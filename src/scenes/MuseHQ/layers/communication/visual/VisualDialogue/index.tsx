import { GroupProps, useFrame } from "@react-three/fiber";
import Bubbles from "./components/Bubbles";
import { createContext, useMemo, useRef, useState } from "react";
import { Dialogue } from "../../index";
import { Idea } from "../../../basis";
import {
  DoubleSide,
  Group,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  Vector3,
} from "three";
import { RoundedBox } from "@react-three/drei";
import VisualInteraction from "../VisualInteraction";
import { useSpring, animated } from "react-spring/three";
import FacePlayer from "../../../../modifiers/FacePlayer";

type DialogueState = {
  key: string;
  setKey: (s: string) => void;
};

export const DialogueContext = createContext<DialogueState>(
  {} as DialogueState
);

type VisualDialogueProps = {
  numStops?: number;
  enabled?: boolean;
  builderHeight?: number;
  dialogue: Dialogue;
};

export default function VisualDialogue(
  props: VisualDialogueProps & GroupProps
) {
  const {
    numStops = 5,
    enabled = false,
    dialogue,
    children,
    builderHeight = 0.95,
    ...rest
  } = props;

  const WIDTH = 1;
  const HEIGHT = 0.35;
  const DEPTH = 0.125;
  const RADIUS = Math.min(WIDTH, HEIGHT, DEPTH) * 0.5;
  // @ts-ignore
  const SIDE = props.position && props.position[0] < 0 ? "left" : "right";

  const [key, setKey] = useState("init");
  const mat = useRef<MeshStandardMaterial>();
  const group = useRef<Group>();
  const mesh = useRef<Mesh>();
  const curIdea = useMemo(() => new Idea(), []);
  const trailEnd = useMemo(() => new Vector3(), []);
  const dummy = useMemo(() => new Vector3(), []);
  const { scale } = useSpring({ scale: enabled ? 1 : 0 });

  useFrame(() => {
    if (!mat.current || !mesh.current || !group.current) return;
    mat.current.color.set(curIdea.getHex());

    console.log("===================================");
    trailEnd.set(0, 0, 0);
    trailEnd.applyMatrix4(group.current.matrix);
    let child: Object3D = group.current;
    while (child.children && child.children[0]) {
      console.log(trailEnd);
      child = child.children[0];
      trailEnd.applyMatrix4(child.matrix);
    }
    trailEnd.y -= builderHeight;
  });

  return (
    <group name="dialogue">
      <DialogueContext.Provider value={{ key, setKey }}>
        <group name="main-bubbles" position-y={builderHeight}>
          <mesh>
            <boxBufferGeometry args={[0.075, 0.075, 0.075]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <Bubbles
            numStops={numStops}
            enabled={enabled}
            idea={curIdea}
            trailEnd={trailEnd}
          />
        </group>
        <group name="main-dialogue" {...rest} ref={group}>
          <group
            position-x={((SIDE === "left" ? -1 : 1) * WIDTH) / 2}
            rotation-y={0}
          >
            <FacePlayer>
              <animated.group scale={scale}>
                <mesh
                  ref={mesh}
                  position-x={((SIDE === "left" ? 1 : -1) * WIDTH) / 2}
                >
                  <boxBufferGeometry args={[0.0001, 0.1, 0.1]} />
                  <meshStandardMaterial color="red" />
                </mesh>
                <RoundedBox
                  args={[WIDTH, HEIGHT, DEPTH]}
                  radius={RADIUS}
                  smoothness={4}
                  name="base"
                >
                  <meshStandardMaterial ref={mat} side={DoubleSide} />
                </RoundedBox>
                <group name="interactions" position-z={DEPTH / 2 + 0.003}>
                  {dialogue.map((interaction) => (
                    <VisualInteraction
                      {...interaction}
                      enabled={interaction.key === key}
                    />
                  ))}
                </group>
              </animated.group>
            </FacePlayer>
          </group>
        </group>
      </DialogueContext.Provider>
    </group>
  );
}

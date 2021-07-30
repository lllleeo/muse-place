import { GroupProps, useFrame } from "@react-three/fiber";
import Bubbles from "./components/Bubbles";
import { createContext, useMemo, useRef, useState } from "react";
import { Dialogue } from "../../index";
import { Idea } from "../../../basis";
import {
  DoubleSide,
  Group,
  MeshStandardMaterial,
  Object3D,
  Vector3,
} from "three";
import { RoundedBox } from "@react-three/drei";
import VisualInteraction from "../VisualInteraction";
import { useSpring, animated } from "react-spring/three";
import FacePlayer from "../../../../modifiers/FacePlayer";
import { useLimiter } from "spacesvr";

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

  const activeInteraction = dialogue.find((dial) => dial.key === key);
  const ENABLED =
    (enabled && activeInteraction?.text && activeInteraction.text !== "") ===
    true;

  const mat = useRef<MeshStandardMaterial>();
  const curIdea = useMemo(() => new Idea(), []);
  const { scale } = useSpring({ scale: ENABLED ? 1 : 0 });

  // anchor for bubbles to track to dialogue
  const limiter = useLimiter(50);
  const group = useRef<Group>();
  const anchor = useRef<Group>();
  const anchorPos = useMemo(() => new Vector3(), []);

  useFrame(({ clock }) => {
    if (
      !mat.current ||
      !anchor.current ||
      !group.current ||
      !limiter.isReady(clock)
    )
      return;
    mat.current.color.set(curIdea.getHex());

    anchorPos.set(0, 0, 0);
    anchorPos.applyMatrix4(anchor.current.matrix);
    let child: Object3D = anchor.current;
    while (child.parent && child !== group.current) {
      child = child.parent;
      anchorPos.applyMatrix4(child.matrix);
    }
    anchorPos.y -= builderHeight;
  });

  return (
    <group name="dialogue">
      <DialogueContext.Provider value={{ key, setKey }}>
        <Bubbles
          position-y={builderHeight}
          numStops={numStops}
          enabled={ENABLED}
          idea={curIdea}
          anchorPos={anchorPos}
        />
        <group name="main-dialogue" {...rest} ref={group}>
          <group position-x={((SIDE === "left" ? -1 : 1) * WIDTH) / 2}>
            <FacePlayer>
              <animated.group scale={scale}>
                <group
                  name="anchor"
                  ref={anchor}
                  position-x={((SIDE === "left" ? 1 : -1) * WIDTH) / 2}
                />
                <RoundedBox
                  name="base"
                  args={[WIDTH, HEIGHT, DEPTH]}
                  radius={RADIUS}
                  smoothness={4}
                >
                  <meshStandardMaterial ref={mat} side={DoubleSide} />
                </RoundedBox>
                <group name="interactions" position-z={DEPTH / 2 + 0.003}>
                  {dialogue.map((interaction) => (
                    <VisualInteraction
                      {...interaction}
                      key={interaction.key}
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

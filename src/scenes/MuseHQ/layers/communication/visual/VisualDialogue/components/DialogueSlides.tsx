import { RoundedBox } from "@react-three/drei";
import { DoubleSide, MeshStandardMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { animated, useSpring } from "react-spring/three";
import { DialogueContext } from "../index";
import FacePlayer from "../../../../../modifiers/FacePlayer";
import VisualInteraction from "../../VisualInteraction";

export default function DialogueSlides() {
  const { enabled, currentIdea, key, setKey, dialogue } = useContext(
    DialogueContext
  );

  const WIDTH = 1;
  const HEIGHT = 0.35;
  const DEPTH = 0.125;
  const RADIUS = Math.min(WIDTH, HEIGHT, DEPTH) * 0.5;

  const material = useRef<MeshStandardMaterial>();

  useFrame(() => {
    if (!material.current) return;
    material.current.color.set(currentIdea.getHex());
  });

  const { scale } = useSpring({
    scale: enabled ? 1 : 0,
  });

  return (
    <group position-x={WIDTH / 2 + 0.1}>
      <animated.group scale={scale}>
        <FacePlayer>
          <RoundedBox
            args={[WIDTH, HEIGHT, DEPTH]}
            radius={RADIUS}
            smoothness={4}
            name="base"
          >
            <meshStandardMaterial ref={material} side={DoubleSide} />
          </RoundedBox>
          <group name="interactions" position-z={DEPTH / 2 + 0.003}>
            {dialogue.map((interaction) => (
              <VisualInteraction
                {...interaction}
                enabled={interaction.key === key}
              />
            ))}
          </group>
        </FacePlayer>
      </animated.group>
    </group>
  );
}

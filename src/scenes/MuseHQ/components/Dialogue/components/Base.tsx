import { RoundedBox } from "@react-three/drei";
import { DoubleSide, MeshStandardMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { getIdeaHex } from "../../../utils/metaphysics";
import { Children, ReactNode, useContext, useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring/three";
import { DialogueContext } from "../index";

type BaseProps = {
  children?: ReactNode | ReactNode[];
};

export default function Base(props: BaseProps) {
  const { children } = props;

  const { enabled, currentIdea, index, setIndex } = useContext(DialogueContext);

  const WIDTH = 1;
  const HEIGHT = 0.5;
  const DEPTH = 0.125;
  const RADIUS = Math.min(WIDTH, HEIGHT, DEPTH) * 0.5;

  const material = useRef<MeshStandardMaterial>();

  useFrame(() => {
    if (!material.current) return;
    material.current.color.set(getIdeaHex(currentIdea));
  });

  const { scale } = useSpring({
    scale: enabled ? 1 : 0,
  });

  useEffect(() => {
    setIndex(0);
  }, []);

  return (
    <group position-x={WIDTH / 2 + 0.1}>
      <animated.group scale={scale}>
        <RoundedBox
          args={[WIDTH, HEIGHT, DEPTH]}
          radius={RADIUS}
          smoothness={4}
        >
          <meshStandardMaterial ref={material} side={DoubleSide} />
        </RoundedBox>
        <group name="content" position-z={DEPTH / 2 + 0.001}>
          {Children.map(children, (child, i) => (
            <Slide enabled={index === i}>{child}</Slide>
          ))}
        </group>
      </animated.group>
    </group>
  );
}

function Slide(props: { children: ReactNode; enabled: boolean }) {
  const { enabled, children } = props;

  const { posZ, scaleY } = useSpring({
    posZ: enabled ? 0.001 : -0.003,
    scaleY: enabled ? 1 : 0,
  });

  return (
    <animated.group name="slide" position-z={posZ} scale-y={scaleY}>
      {children}
    </animated.group>
  );
}

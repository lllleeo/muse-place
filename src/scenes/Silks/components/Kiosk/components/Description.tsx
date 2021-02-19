import { GroupProps } from "react-three-fiber";
import FacePlayer from "../../../modifiers/FacePlayer";
import { Text } from "@react-three/drei";
import { useContext } from "react";
import { KioskContext } from "../index";

const WIDTH = 0.3;
const HEIGHT = 0.15;
const PADDING_X = 0.02;
const PADDING_Y = 0.04;

const Description = (props: GroupProps) => {
  const { product, open } = useContext(KioskContext);

  if (!open || !product) {
    return null;
  }

  const { description } = product;

  if (!description) {
    return null;
  }

  return (
    <group {...props}>
      <FacePlayer>
        <mesh>
          <planeBufferGeometry args={[WIDTH, HEIGHT]} />
          <meshStandardMaterial color="white" />
        </mesh>
        {/* @ts-ignore */}
        <Text
          color="black"
          fontSize={0.015}
          anchorX="left"
          anchorY="top"
          textAlign="center"
          position-x={-WIDTH / 2 + PADDING_X}
          position-y={HEIGHT / 2 - PADDING_Y}
          position-z={0.025}
          maxWidth={WIDTH - PADDING_X * 2}
        >
          {description}
        </Text>
      </FacePlayer>
    </group>
  );
};

export default Description;

import { GroupProps } from "react-three-fiber";
import * as THREE from "three";
import { Text } from "@react-three/drei";

const HEIGHT = 0.15;
const PADDING_Y = 0.035;
const PADDING_X = 0.02;

const TITLE_FONT = {
  fontSize: 0.025,
  color: "black",
  anchorX: "left",
  textAlign: "left",
};

const SUB_FONT = {
  fontSize: 0.02,
  color: "black",
  anchorY: "top",
  anchorX: "left",
  textAlign: "left",
};

type Props = {
  width: number;
} & GroupProps;

const Control = (props: Props) => {
  const { width, ...restProps } = props;

  const WIDTH = width * 0.9;
  const CART_WIDTH = HEIGHT * 0.5;
  const TEXT_WIDTH = WIDTH - CART_WIDTH - PADDING_X * 3;

  return (
    <group {...restProps} name="control">
      <group rotation-x={-Math.PI / 6}>
        <group position-y={HEIGHT / 2} name="content">
          <mesh position-z={-0.001}>
            <planeBufferGeometry args={[WIDTH, HEIGHT]} />
            <meshStandardMaterial color="white" side={THREE.DoubleSide} />
          </mesh>
          {/* @ts-ignore */}
          <Text
            name="title"
            {...TITLE_FONT}
            position-y={HEIGHT / 2 - PADDING_Y}
            position-x={-WIDTH / 2 + PADDING_X}
            maxWidth={TEXT_WIDTH}
          >
            22 Neon Green Silk (Green/White)
          </Text>
          {/* @ts-ignore */}
          <Text
            name="subtitle"
            {...SUB_FONT}
            position-y={0.025}
            position-x={-WIDTH / 2 + PADDING_X}
            maxWidth={TEXT_WIDTH}
          >
            {"Ships in 2 weeks\n"}
            $100
          </Text>
          <group
            name="add-to-cart"
            position-x={WIDTH / 2 - CART_WIDTH / 2 - PADDING_X}
            position-y={0.01}
          >
            <mesh>
              <boxBufferGeometry args={[CART_WIDTH, CART_WIDTH, 0.02]} />
              <meshStandardMaterial color="red" />
            </mesh>
            {/* @ts-ignore */}
            <Text
              fontSize={0.07}
              color="white"
              textAlign="center"
              anchorY="middle"
              anchorX="center"
              position-z={0.021}
            >
              +
            </Text>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Control;

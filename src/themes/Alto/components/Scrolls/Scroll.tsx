import ScrollModel from "../../models/Scroll";
import { useFrame, useThree } from "react-three-fiber";
import { useEnvironment, Text } from "spacesvr";
import { useRef } from "react";
import * as THREE from "three";
import { Billboard } from "@react-three/drei";

type ScrollProps = {
  text: string;
  textColor?: string;
  img?: string;
};

const Scroll = (props: JSX.IntrinsicElements["group"] & ScrollProps) => {
  const { camera } = useThree();
  const { player } = useEnvironment();
  const { text, textColor = "black", img } = props;
  const outer = useRef<THREE.Group>();
  const inner = useRef<THREE.Group>();

  useFrame(({ clock }, delta) => {
    if (outer.current && inner.current) {
      if (camera.position.distanceTo(outer.current.position) < 3) {
        inner.current.position.y = Math.min(
          2,
          inner.current.position.y + delta * 2
        );
      } else {
        inner.current.position.y = Math.max(
          0,
          inner.current.position.y - delta * 2
        );
      }
    }
  });

  return (
    <group ref={outer} {...props}>
      <group ref={inner}>
        <Billboard lockX lockZ>
          <Text
            text={text}
            color={textColor}
            position={[0, -0.2, 0]}
            rotation={[0, Math.PI, 0]}
          />
          <ScrollModel />
        </Billboard>
      </group>
    </group>
  );
};

export default Scroll;

import ScrollModel from "../../models/Scroll";
import { useFrame, useThree } from "react-three-fiber";
import { useEnvironment, Text } from "spacesvr";
import { useRef } from "react";
import * as THREE from "three";

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
      if (camera.position.distanceTo(outer.current.position) < 10) {
        inner.current.position.y = Math.min(
          10,
          inner.current.position.y + delta * 15
        );
      } else {
        inner.current.position.y = Math.max(
          0,
          inner.current.position.y - delta * 15
        );
      }
    }
  });

  return (
    <group ref={outer} {...props}>
      <group ref={inner}>
        <Text
          text={text}
          color={textColor}
          position={[0, -3, 0]}
          rotation={[0, Math.PI, 0]}
        />
        <ScrollModel />
      </group>
    </group>
  );
};

export default Scroll;

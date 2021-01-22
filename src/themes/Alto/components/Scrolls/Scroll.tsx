import ScrollModel from "../../models/Scroll";
import { useFrame, useThree } from "react-three-fiber";
import { useEnvironment } from "spacesvr";
import { useRef } from "react";
import * as THREE from "three";

const Scroll = (props: JSX.IntrinsicElements["group"]) => {
  const { camera } = useThree();
  const { player } = useEnvironment();
  const outer = useRef<THREE.Group>();
  const inner = useRef<THREE.Group>();

  useFrame(({ clock }, delta) => {
    if (outer.current && inner.current) {
      if (camera.position.distanceTo(outer.current.position) < 10) {
        // @ts-ignore
        inner.current.position.y = Math.min(
          10,
          inner.current.position.y + delta * 15
        );
      } else {
        // @ts-ignore
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
        <ScrollModel />
      </group>
    </group>
  );
};

export default Scroll;

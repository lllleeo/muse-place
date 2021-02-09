import { GroupProps, useFrame, useThree } from "react-three-fiber";
import { useRef, useState } from "react";
// @ts-ignore
import { animated, useSpring } from "react-spring/three";
import { Group } from "three";
import { config } from "react-spring";
import Content from "./components/Content";

type Props = GroupProps;

export const WIDTH = 1;
export const HEIGHT = 0.5;

const ProductPanel = (props: Props) => {
  const { camera } = useThree();
  const group = useRef<Group>();
  const [open, setOpen] = useState(false);

  const { rotX } = useSpring({
    rotX: open ? 0 : -Math.PI / 2,
    config: config.slow,
  });

  useFrame(() => {
    if (
      group.current &&
      camera.position.distanceTo(group.current.position) < 1.5
    ) {
      setOpen(true);
    } else if (open) {
      setOpen(false);
    }
  });

  return (
    <group {...props} ref={group}>
      <animated.group position-y={0.25} rotation-x={rotX}>
        <group name="parent" position={[0, -HEIGHT / 2 + 0.75, 0]}>
          <group name="container" position-y={HEIGHT / 2}>
            <mesh name="panel" position-z={-0.02}>
              <planeBufferGeometry args={[WIDTH, HEIGHT]} />
              <meshStandardMaterial color="gray" transparent opacity={0.8} />
            </mesh>
            <Content />
          </group>
        </group>
      </animated.group>
    </group>
  );
};

export default ProductPanel;

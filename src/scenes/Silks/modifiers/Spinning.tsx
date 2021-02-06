import { ReactNode, useRef } from "react";
import { Group } from "three";
import { useFrame } from "react-three-fiber";

type Props = {
  children: ReactNode;
  xSpeed?: number;
  ySpeed?: number;
  zSpeed?: number;
};

const Spinning = (props: Props) => {
  const { children, xSpeed = 0, ySpeed = 1, zSpeed = 0 } = props;

  const group = useRef<Group>();

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.x = clock.getElapsedTime() * xSpeed * 0.25;
      group.current.rotation.y = clock.getElapsedTime() * ySpeed * 0.25;
      group.current.rotation.z = clock.getElapsedTime() * zSpeed * 0.25;
    }
  });

  return <group ref={group}>{children}</group>;
};

export default Spinning;

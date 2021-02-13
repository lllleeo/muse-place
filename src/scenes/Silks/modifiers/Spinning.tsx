import { ReactNode, useRef, useState } from "react";
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
  const [seed] = useState(Math.random());

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.x =
        clock.getElapsedTime() * xSpeed * 0.25 + xSpeed * seed * 100;
      group.current.rotation.y =
        clock.getElapsedTime() * ySpeed * (0.25 + seed / 10) +
        ySpeed * seed * 1000;
      group.current.rotation.z =
        clock.getElapsedTime() * zSpeed * 0.25 + zSpeed * seed * 40;
    }
  });

  return <group ref={group}>{children}</group>;
};

export default Spinning;

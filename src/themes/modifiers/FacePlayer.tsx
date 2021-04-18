import { ReactNode, useRef } from "react";
import { useLimiter } from "spacesvr";
import { useFrame } from "react-three-fiber";
import { Group } from "three";

export default function FacePlayer(props: {
  children: ReactNode | ReactNode[];
}) {
  const { children } = props;

  const limiter = useLimiter(40);
  const group = useRef<Group>();

  useFrame(({ camera, clock }) => {
    if (!group.current || !limiter.isReady(clock)) return;

    group.current.quaternion.copy(camera.quaternion);
  });

  return <group ref={group}>{children}</group>;
}

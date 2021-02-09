import { ReactNode, useRef } from "react";
import { Group } from "three";
import { useFrame, useThree } from "react-three-fiber";

type Props = {
  children: ReactNode;
};

const FacePlayer = (props: Props) => {
  const { children } = props;

  const { camera } = useThree();
  const group = useRef<Group>();

  useFrame(() => {
    if (group.current) {
      group.current.lookAt(camera.position);
    }
  });

  return <group ref={group}>{children}</group>;
};

export default FacePlayer;

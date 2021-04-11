import { ReactNode, useRef } from "react";
import { Group } from "three";
import { useFrame } from "react-three-fiber";
import { config, useSpring } from "react-spring";
import { getSpringValues } from "../../../utils/spring";
import { useLimiter } from "../../../utils/limiter";

type Props = {
  children: ReactNode;
  face: boolean;
};

const SpringFace = (props: Props) => {
  const { children, face } = props;

  const group = useRef<Group>();

  const [spring, setSpring] = useSpring(() => ({
    y: [0],
    config: config.slow,
  }));

  const limiter = useLimiter(40);

  useFrame(({ clock, camera }) => {
    if (!limiter.isReady(clock)) return;

    if (group.current) {
      if (!face) {
        setSpring({ y: [0] });
      } else {
        const prev = {
          x: group.current.rotation.x,
          y: group.current.rotation.y,
          z: group.current.rotation.z,
        };

        group.current.lookAt(camera.position);
        setSpring({ y: [group.current.rotation.y] });

        // return to state
        group.current.rotation.x = prev.x;
        group.current.rotation.y = prev.y;
        group.current.rotation.z = prev.z;
      }

      // set new value
      const [y] = getSpringValues(spring);
      group.current.rotation.y = y;
    }
  }, 1);

  return <group ref={group}>{children}</group>;
};

export default SpringFace;

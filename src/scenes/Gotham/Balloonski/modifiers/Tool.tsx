import React, { ReactNode, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Group, Vector2, Vector3 } from "three";

type Props = {
  children: ReactNode;
  pos?: [number, number];
  face?: boolean;
  distance?: number;
  pinY?: boolean;
};

const SCALE = 0.0025;

/**
 * Tool modifier will place its children in constant view of the camera
 *
 * pos will determine relative placement on [x, y] axis
 * face will make item face the player (defaults to true)
 *
 * @param props
 * @constructor
 */
export const Tool = (props: Props) => {
  const { children, pos, face = true, pinY = false, distance = 1 } = props;

  const DISTANCE = distance * 0.05;

  const camera = useThree((state) => state.camera);
  const size = useThree((state) => state.size);

  const group = useRef<Group>();
  const groupPos = useRef(new Vector3());
  const screenPos = useRef(new Vector2(pos ? pos[0] : 0, pos ? pos[1] : 0));
  const dummy2 = useRef(new Vector2());

  const { current: dummyVector } = useRef(new Vector3());

  useFrame(() => {
    if (!group.current) return;

    if (pos !== undefined) {
      dummy2.current.x = pos[0];
      dummy2.current.y = pos[1];
      screenPos.current.lerp(dummy2.current, 0.125);
      const xPos = (screenPos.current.x * 0.00008 * size.width) / 2;
      const yPos = 0.04 * screenPos.current.y;
      dummyVector.set(xPos * distance, yPos * distance, -DISTANCE);
      const moveQuaternion = camera.quaternion.clone();
      if (!pinY) {
        moveQuaternion.x = 0;
        moveQuaternion.z = 0;
      }
      dummyVector.applyQuaternion(moveQuaternion);

      group.current.getWorldPosition(groupPos.current);
      const deltaPos = groupPos.current.sub(camera.position);
      group.current.position.sub(deltaPos);
      group.current.position.add(dummyVector);
    }

    if (face) {
      group.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <group name="tool">
      <group ref={group}>
        <group scale={SCALE * distance}>{children}</group>
      </group>
    </group>
  );
};

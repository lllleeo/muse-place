import { useMemo, useRef } from "react";
import { Group } from "three";
import BuilderModel from "../lib/models/Builder2";
import { GroupProps, useFrame } from "@react-three/fiber";
import { Floating } from "spacesvr";

export default function Builder(props: GroupProps) {
  const group = useRef<Group>();

  // @ts-ignore
  const timestamp = useMemo(() => new Date() / 1000000000, []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = timestamp + clock.getElapsedTime();
  });

  return (
    <group name="builder" {...props}>
      <group ref={group}>
        <group position-x={17}>
          <group position-y={0.5}>
            <Floating height={0.4} speed={2}>
              <BuilderModel animation="swimmin" />
            </Floating>
          </group>
        </group>
      </group>
    </group>
  );
}

import { useRef } from "react";
import { Group } from "three";
import BuilderModel from "../lib/models/Builder2";
import { GroupProps } from "@react-three/fiber";
import { Spinning, Floating } from "spacesvr";

export default function Builder(props: GroupProps) {
  const group = useRef<Group>();

  return (
    <group name="builder" {...props}>
      <Spinning ySpeed={-0.3}>
        <group position-x={17}>
          <group ref={group} position-y={0.5}>
            <Floating height={0.4} speed={2}>
              <BuilderModel animation="swimmin" />
            </Floating>
          </group>
        </group>
      </Spinning>
    </group>
  );
}

import { Suspense, useRef } from "react";
import Monmon06 from "./models/Monmon_06";
import Distort from "./modifiers/Distort";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export default function CentralModel() {
  const group = useRef<Group>();

  useFrame(() => {
    if (!group.current) return;

    // @ts-ignore
    const t = ((new Date() / 1000) % 10000) * 0.3;
    group.current.position.y = 15 * Math.sin(t);
  });

  return (
    <Suspense fallback={null}>
      <group ref={group}>
        <Monmon06 scale={0.5} position-y={10} />
      </group>
    </Suspense>
  );
}

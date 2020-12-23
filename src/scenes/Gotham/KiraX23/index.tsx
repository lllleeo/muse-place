import { Suspense, useMemo } from "react";
import KiraHead from "./KiraHead";
import { Floating, Text } from "spacesvr";
import {
  MeshPhongMaterial,
  MeshStandardMaterial,
  MultiplyOperation,
} from "three";

const KiraX23 = () => {
  const glowMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: 0x2db6bd,
        transparent: true,
        opacity: 0.9,
      }),
    []
  );

  return (
    <group>
      <Floating>
        <Suspense fallback={null}>
          <KiraHead position={[-1, -5, -13]} />
        </Suspense>
      </Floating>
      <mesh position={[-5.48, 1.25, 4.2]} rotation-y={Math.PI / 2}>
        <planeBufferGeometry args={[16.5, 3, 60, 30]} />
        <meshStandardMaterial
          color={0x00ff00}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh position={[2.49, 1.25, 4.2]} rotation-y={Math.PI / 2}>
        <planeBufferGeometry args={[16.5, 3, 60, 30]} />
        <meshStandardMaterial
          color={0x00ff00}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
      <group scale={[5, 5, 5]}>
        <group position={[-1.16, 0.3, 1]} rotation={[0, Math.PI / 2, 0]}>
          <group scale={[1.001, 1.03, 1.001]}>
            <Text
              text={"KIRA-X23"}
              size={1.15}
              material={glowMaterial}
              position={[0, 0, -0.019]}
              font="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/ethnocentric.json"
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export default KiraX23;

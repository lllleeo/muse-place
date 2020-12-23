import { Suspense, useMemo } from "react";
import KiraHead from "./KiraHead";
import { Floating, Text } from "spacesvr";
import { Color, MeshPhongMaterial, MultiplyOperation } from "three";

const KiraX23 = () => {
  const chromeMaterial = useMemo(
    () =>
      new MeshPhongMaterial({
        color: 0xcccccc,
        specular: 0xffffff,
        shininess: 50,
        combine: MultiplyOperation,
        reflectivity: 1,
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
          <Text
            text={"KIRA-X23"}
            size={1.15}
            material={chromeMaterial}
            position={[0, 0, -0.019]}
            font="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/ethnocentric.json"
          />
        </group>
      </group>
    </group>
  );
};

export default KiraX23;

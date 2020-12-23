import { Suspense } from "react";
import KiraHead from "./KiraHead";
import { Floating } from "spacesvr";

const KiraX23 = () => {
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
    </group>
  );
};

export default KiraX23;

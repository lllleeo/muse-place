import { Suspense, useMemo } from "react";
import KiraHead from "./KiraHead";
import { Floating, Image, Text } from "spacesvr";
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
      <group
        position={[-5.46, 1, 8]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.5, 0.5, 1]}
      >
        <Image
          src="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/QRCODE1.png"
          size={1.5}
          position-x={-3}
          framed
        />
        <Image
          src="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/QRCODE2.png"
          size={1.5}
          position-x={15}
          framed
        />
      </group>
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

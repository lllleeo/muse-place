import { Reflector, useDetectGPU, useTexture } from "@react-three/drei";
import * as THREE from "three";
import Trigger from "../../modifiers/Trigger";
import { useEnvironment } from "spacesvr";
import { Perf } from "r3f-perf";

const BASE_URL = "https://d27rt3a60hh1lx.cloudfront.net/content/soliman/";
const FLOOR_URL = BASE_URL + "SurfaceImperfections003_1K_var1.jpg";
const NORMAL_URL = BASE_URL + "SurfaceImperfections003_1K_Normal.jpg";

const Ground = () => {
  const { setPaused } = useEnvironment();

  const floor = useTexture(FLOOR_URL);
  const normal = useTexture(NORMAL_URL);

  floor.repeat.x = 2;
  floor.repeat.y = 2;
  floor.wrapS = floor.wrapT = THREE.RepeatWrapping;

  normal.repeat.x = 2;
  normal.repeat.y = 2;
  normal.wrapS = normal.wrapT = THREE.RepeatWrapping;

  const gpu = useDetectGPU();

  return (
    <group>
      {/*<Perf />*/}
      {/* @ts-ignore */}
      <Reflector
        rotation-y={Math.PI / 2}
        position={[-2.32, 0.98, -0.85]}
        // resolution={1024}
        resolution={gpu && gpu.tier >= 2 ? 512 : 256}
        args={[4.5, 0.775]}
        mirror={0.75}
        // mixBlur={5}
        mixBlur={10}
        mixStrength={0.9}
        blur={[0, 0]}
        // blur={[4.5 * 400, 0.775 * 400]}
        frustumCulled={false}
        // debug={4}
      >
        {(Material, props) => (
          <Material
            color="#f0f0f0"
            metalness={0.5}
            // roughnessMap={floor}
            // normalMap={normal}
            {...props}
          />
        )}
      </Reflector>
      <Trigger onClick={() => setPaused(true, "uoma")}>
        <mesh rotation-y={Math.PI / 2} position={[-2.29, 0.98, -0.85]}>
          <planeBufferGeometry args={[4.5, 0.775, 25, 25]} />
          <meshStandardMaterial color="#999999" transparent opacity={0} />
        </mesh>
        <mesh rotation-y={Math.PI / 2} position={[-2.29, 0.98, -0.85]}>
          <planeBufferGeometry args={[4.5, 0.775]} />
          <meshStandardMaterial transparent opacity={0} />
        </mesh>
      </Trigger>
    </group>
  );
};

export default Ground;

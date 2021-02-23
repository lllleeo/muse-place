import { Reflector, useDetectGPU, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Vector2 } from "three";

const BASE_URL = "https://d27rt3a60hh1lx.cloudfront.net/content/soliman/";
const FLOOR_URL = BASE_URL + "SurfaceImperfections003_1K_var1.jpg";
const NORMAL_URL = BASE_URL + "SurfaceImperfections003_1K_Normal.jpg";

const Ground = () => {
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
      {/* @ts-ignore */}
      <Reflector
        rotation-y={Math.PI / 2}
        position={[-2.35, 0.98, -0.85]}
        resolution={gpu && gpu.tier >= 2 ? 256 : 128}
        args={[4.5, 0.775]}
        mirror={0.25}
        mixBlur={10}
        mixStrength={0.8}
        blur={[4.5 * 300, 0.775 * 300]}
      >
        {(Material, props) => (
          <Material
            color="#a0a0a0"
            metalness={0.5}
            roughnessMap={floor}
            normalMap={normal}
            normalScale={new Vector2(0.5, 0.5)}
            {...props}
          />
        )}
      </Reflector>
    </group>
  );
};

export default Ground;

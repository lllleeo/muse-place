import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import { ReactText, useEffect, useMemo, useRef } from "react";
import { InstancedMesh, Mesh } from "three";

type SceneProps = {
  color?: string | ReactText;
  wSegments?: number;
  hSegments?: number;
  position?: [number, number, number];
  map?: string;
  hScale?: number;
  xzScale?: number;
};

const Outside = (props: SceneProps) => {
  const {
    color,
    wSegments = 200,
    hSegments = 200,
    position = [0, 0, 0],
    map = "mountain",
    hScale = 10,
    xzScale = 1000,
  } = props;

  const heightmap = useLoader(THREE.TextureLoader, `/assets/${map}.jpg`);
  const emissiveMap = useLoader(THREE.TextureLoader, "/assets/gradient2.jpg");

  const dist = 1;
  const mesh = useRef<InstancedMesh>();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (mesh.current && dist) {
      let i = 0;
      for (let z = -dist; z <= dist; z++) {
        for (let x = 0; x < 1; x++) {
          if (x !== 0 && z == 0) continue;
          dummy.rotation.x = -Math.PI / 2;
          dummy.position.set(x * xzScale, 0, z * xzScale);
          if (x != 0 || z != 0) {
            dummy.scale.z = Math.random() * 0.3 + 0.85;
            dummy.rotation.z = (Math.PI / 2) * i;
          }
          dummy.updateMatrix();
          mesh.current.setMatrixAt(i, dummy.matrix);
          i++;
        }
      }
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  }, [dist, mesh]);

  return (
    <group position={position}>
      {/* @ts-ignore */}
      <instancedMesh ref={mesh} args={[null, null, 1 + dist * 2]}>
        <planeBufferGeometry args={[xzScale, xzScale, wSegments, hSegments]} />
        <meshStandardMaterial
          color={color}
          transparent
          displacementMap={heightmap}
          displacementScale={hScale}
          alphaMap={heightmap}
          emissiveMap={emissiveMap}
          emissive={new THREE.Color(0x800080)}
          emissiveIntensity={3}
        />
      </instancedMesh>
      <mesh rotation-x={-Math.PI / 2}>
        <planeBufferGeometry args={[xzScale * 5, xzScale * 5]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
};

export default Outside;

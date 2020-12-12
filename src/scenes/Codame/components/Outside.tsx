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
    wSegments = 700,
    hSegments = 700,
    position = [0, 0, 0],
    map = "mountain",
    hScale = 10,
    xzScale = 1000,
  } = props;

  const heightmap = useLoader(THREE.TextureLoader, `/assets/${map}.jpg`);
  const emissiveMap = useLoader(THREE.TextureLoader, "/assets/gradient2.jpg");

  const count = 9; // odd perfect square pls (9, 25, 49, ...)
  const mesh = useRef<InstancedMesh>();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (mesh.current && count) {
      let len = Math.ceil(Math.sqrt(count));
      len = len % 2 === 0 ? len + 1 : len;
      const min = -Math.floor(len / 2);
      const max = min + (len - 1);
      for (let x = min; x < max; x++) {
        for (let z = min; z < max; z++) {
          dummy.position.set(x * xzScale, 0, z * xzScale);
          dummy.rotation.x = -Math.PI / 2;
          // dummy.rotation.z = (Math.PI / 2) * (x * len + z);
          dummy.updateMatrix();
          mesh.current.setMatrixAt(x * len + z, dummy.matrix);
        }
      }
      // mesh.current.layers.set(1);
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  }, [count, mesh]);

  return (
    <group position={position}>
      {/* @ts-ignore */}
      <instancedMesh ref={mesh} args={[null, null, count]}>
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
    </group>
  );
};

export default Outside;

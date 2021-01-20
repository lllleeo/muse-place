import { useMemo, useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";

type ReactiveProps = JSX.IntrinsicElements["group"] & {
  url?: string;
  aa: THREE.AudioAnalyser;
};

let min = 1000000;
let max = -10000000;

const MIN_DISP = -0.2;
const MAX_DISP = 0.85;

const ReactivePrimitive = (props: ReactiveProps) => {
  const {
    url = "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/renaissance/cubehm.jpg",
    aa,
  } = props;

  const seed = useMemo(() => Math.random(), []);
  const texture = useLoader(THREE.TextureLoader, url);
  const group = useRef<THREE.Group>();
  const innerGroup = useRef<THREE.Group>();
  const material = useRef<THREE.MeshStandardMaterial>();
  const freqIndex = useRef(Math.floor(Math.random() * 16));

  useFrame(({ clock }) => {
    if (material.current) {
      const freqData = aa?.getFrequencyData()[freqIndex.current] || 0;

      if (freqData < min) {
        min = freqData;
      }

      if (freqData > max) {
        max = freqData;
      }

      const modFreqData = (freqData - min) / (max - min);

      const disp = THREE.MathUtils.lerp(MIN_DISP, MAX_DISP, modFreqData);

      material.current.displacementScale = Math.max(0, disp / 2 + 0.05);
    }

    if (group.current) {
      group.current.rotation.x = clock.getElapsedTime() / (7 + seed * 30);
      group.current.rotation.y = clock.getElapsedTime() / (10 + seed * 30);
      group.current.rotation.z = clock.getElapsedTime() / (9 + seed * 30);
    }
  });

  const SCALE = 1;

  return (
    <group scale={[SCALE, SCALE, SCALE]} position={[0, 0, 0]}>
      <group {...props} ref={group}>
        <group ref={innerGroup}>
          <mesh>
            <sphereBufferGeometry args={[2, 50, 50]} />
            <meshStandardMaterial
              ref={material}
              map={texture}
              color="red"
              displacementMap={texture}
              displacementScale={0}
            />
          </mesh>
          <mesh scale={[1 + MIN_DISP, 1 + MIN_DISP, 1 + MIN_DISP]}>
            <boxBufferGeometry args={[2, 2, 2, 40, 40, 40]} />
            <meshBasicMaterial color="black" />
          </mesh>
        </group>
      </group>
    </group>
  );
};

export default ReactivePrimitive;

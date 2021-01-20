import { useMemo, useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import Knot from "../../../themes/Renaissance/models/Knot";
import { ModifierStack, Taper } from "three.modifiers/src/index";
import { BufferGeometry } from "three";

type ReactiveProps = JSX.IntrinsicElements["group"] & {
  url?: string;
  freq?: number;
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
    freq,
  } = props;

  const seed = useMemo(() => Math.random(), []);
  const texture = useLoader(THREE.TextureLoader, url);
  const group = useRef<THREE.Group>();
  const innerGroup = useRef<THREE.Group>();
  const material = useRef<THREE.MeshStandardMaterial>();
  const freqIndex = useRef(Math.floor(Math.random() * 16));
  const mesh = useRef<THREE.Mesh | undefined>();

  useFrame(({ clock }, delta) => {
    if (material.current) {
      const freqData = aa?.getFrequencyData()[freq || freqIndex.current] || 0;

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

    if (mesh.current) {
      const meshBuf = mesh?.current?.geometry as BufferGeometry;
      const vertices = meshBuf.attributes.position.array;
      const count = meshBuf.attributes.position.count;
      for (let i = 0; i < count; i++) {
        const x = vertices[i * 3];
        const y = vertices[i * 3 + 1];
        const z = vertices[i * 3 + 2];
        if (i < count / 2) {
          meshBuf.attributes.position.setZ(
            i,
            z + delta * Math.sin(clock.getElapsedTime())
          );
        }
      }
      meshBuf.attributes.position.needsUpdate = true;
    }
  });

  const SCALE = 0.7;

  return (
    <group scale={[SCALE, SCALE, SCALE]} position={[0, 0, 0]}>
      <group {...props} ref={group}>
        <group ref={innerGroup}>
          <mesh ref={mesh}>
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

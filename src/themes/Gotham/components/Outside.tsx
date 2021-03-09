import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  InstancedMesh,
  ShaderMaterial,
  Spherical,
  Vector3,
} from "three";
import { frag, vert } from "../shaders/building";
import { useFrame } from "react-three-fiber";
import { useLimiter } from "../../../scenes/Silks/utils/limiter";

type SceneProps = {
  count?: number;
  fogColor?: string;
};

const FLOOR = -100;

const Outside = (props: SceneProps) => {
  const { count = 400, fogColor = "#000000" } = props;

  const mesh = useRef<InstancedMesh>();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const limiter = useLimiter(40);

  useEffect(() => {
    if (mesh.current && count) {
      const seeds = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const scaleXZ = 1.75 + Math.random();
        const scaleY = 0.1 + Math.random() * 2.75;
        dummy.scale.y = scaleY;
        dummy.scale.x = scaleXZ;
        dummy.scale.z = scaleXZ;
        dummy.rotation.y = Math.random() * Math.PI * 2;
        dummy.updateMatrix();

        const r = 30 + Math.random() * 200;
        const p = Math.PI / 2;
        const tVariance = (Math.PI * 2 * Math.random()) / 3 - Math.PI / 3;
        const t = Math.random() > 0.5 ? tVariance : Math.PI + tVariance;
        dummy.position.copy(
          new Vector3().setFromSpherical(new Spherical(r, p, t))
        );
        const newHeight = 40 * scaleY;
        dummy.position.y += FLOOR;
        dummy.position.y += newHeight / 2;
        dummy.updateMatrix();
        mesh.current.setMatrixAt(i, dummy.matrix);

        seeds[i] = Math.random();
      }
      mesh.current.instanceMatrix.needsUpdate = true;

      (mesh.current.geometry as BufferGeometry).setAttribute(
        "seed",
        new BufferAttribute(seeds, 1)
      );
    }
  }, [count, mesh]);

  const mat = useMemo(() => {
    return new ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        fogColor: { value: new Color(fogColor) },
      },
      vertexShader: vert,
      fragmentShader: frag,
    });
  }, []);

  useFrame(({ clock }) => {
    if (mat && limiter.isReady(clock)) {
      mat.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <group>
      {/* @ts-ignore */}
      <instancedMesh ref={mesh} args={[null, null, count]} material={mat}>
        <boxBufferGeometry args={[5, 40, 5, 70, 2]} />
      </instancedMesh>
    </group>
  );
};

export default Outside;

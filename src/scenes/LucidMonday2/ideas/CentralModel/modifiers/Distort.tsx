import * as THREE from "three";
import { DoubleSide, Group, Material, Mesh, Object3D } from "three";

import { ReactNode, useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLimiter } from "spacesvr";
import { useLucidWorld } from "../../../layers/LucidWorld";

const uniforms = `
    uniform float time;
    uniform float bins;
    uniform float audio[64];
`;

const vert = `
    #include <begin_vertex>
    // float theta = sin( time + uv.t );
    // float c = cos( theta );
    // float s = sin( theta );
    // mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );
    // transformed = vec3( position ) * m;
    // vNormal = vNormal * m;
`;

const frag = `
  #include <dithering_fragment>
`;

const BINS = 64;

export default function Distort(props: { children: ReactNode }) {
  const { children } = props;

  const { audioData } = useLucidWorld();

  const group = useRef<Group>();
  const limiter = useLimiter(60);
  const meshes = useRef<Mesh[]>([]);

  useLayoutEffect(() => {
    if (!group.current) return;
    meshes.current = [];

    group.current.traverse((child: Object3D) => {
      const mesh = child as Mesh;
      if (!mesh.material) return;
      if (mesh.userData.newMat) {
        mesh.material = mesh.userData.ogMat;
        (mesh.userData.newMat as Material).dispose();
      }
      const mat = (mesh.material as Material).clone();

      mat.onBeforeCompile = function (shader) {
        shader.uniforms.time = { value: 0 };
        shader.uniforms.audio = { value: new Array(BINS).fill(0) };
        shader.uniforms.bins = { value: BINS };
        shader.vertexShader =
          uniforms +
          shader.vertexShader.replace("#include <begin_vertex>", vert);

        shader.fragmentShader =
          uniforms +
          shader.fragmentShader.replace("#include <dithering_fragment>", frag);

        mat.userData.shader = shader;
      };

      mat.side = DoubleSide;

      mesh.userData.ogMat = mesh.material;
      mesh.userData.newMat = mat;
      mesh.material = mat;
      mesh.material.needsUpdate = true;

      meshes.current?.push(mesh);
    });
  }, [frag, vert]);

  useFrame(({ clock }) => {
    if (!limiter.isReady(clock) || !audioData.current) return;

    const newData: number[] = [];
    for (let i = 0; i < BINS; i++) {
      newData[i] = audioData.current[i * 2];
    }

    meshes.current.map((mesh) => {
      const mat = mesh.material as Material;
      if (!mat || !mat.userData?.shader) return;
      mat.userData.shader.uniforms.time.value = clock.getElapsedTime() * 2;
      mat.userData.shader.uniforms.audio.value = newData;
    });
  });

  return <group ref={group}>{children}</group>;
}

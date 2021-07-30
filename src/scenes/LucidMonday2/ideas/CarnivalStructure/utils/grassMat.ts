import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { ShaderMaterial, Uniform } from "three";
import { useMemo } from "react";
import { printUniforms } from "../../../utils/shaders";
import { frag, vert } from "../shaders/grass";
import { useLimiter } from "spacesvr";
import { useFrame } from "@react-three/fiber";

const GRASS_TEX =
  "https://d27rt3a60hh1lx.cloudfront.net/content/alto/grasstile.jpg";

export const useGrassMat = () => {
  // grass texture
  const tex = useTexture(GRASS_TEX);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;

  const uniforms: { [key: string]: Uniform } = {
    tex: new Uniform(tex),
    time: new Uniform(0),
    energy: new Uniform(0),
  };

  const mat = useMemo(
    () =>
      new ShaderMaterial({
        uniforms,
        vertexShader: `
          ${printUniforms(uniforms)}
          ${vert}
        `,
        fragmentShader: `
          ${printUniforms(uniforms)}
          ${frag}
        `,
      }),
    [uniforms, vert, frag, tex]
  );

  const limiter = useLimiter(40);
  useFrame(({ clock }) => {
    if (!mat || !limiter.isReady(clock)) return;

    mat.uniforms.time.value = clock.getElapsedTime();
  });

  return mat;
};

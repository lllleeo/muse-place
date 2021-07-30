import { useTexture } from "@react-three/drei";
import { RepeatWrapping, ShaderMaterial, Uniform } from "three";
import { useMemo } from "react";
import { printUniforms } from "../../../utils/shaders";
import { frag, vert } from "../shaders/grass";
import { useLimiter } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import { useLucidWorld } from "../../../layers/LucidWorld";

const GRASS_TEX =
  "https://d27rt3a60hh1lx.cloudfront.net/content/alto/grasstile.jpg";

export const useGrassMat = (): ShaderMaterial => {
  const { audioFloorData } = useLucidWorld();

  // uniforms
  const tex = useTexture(GRASS_TEX);
  tex.wrapS = tex.wrapT = RepeatWrapping;
  const uniforms: { [key: string]: Uniform } = {
    tex: new Uniform(tex),
    time: new Uniform(0),
    floor0: new Uniform(0),
    floor1: new Uniform(0),
    floor2: new Uniform(0),
    floor3: new Uniform(0),
    floor4: new Uniform(0),
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
    mat.uniforms.floor0.value = audioFloorData[0];
    mat.uniforms.floor1.value = audioFloorData[1];
    mat.uniforms.floor2.value = audioFloorData[2];
    mat.uniforms.floor3.value = audioFloorData[3];
    mat.uniforms.floor4.value = audioFloorData[4];
  });

  return mat;
};

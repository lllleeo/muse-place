import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";
import {
  MeshStandardMaterial,
  RingBufferGeometry,
  ShaderMaterial,
  Uniform,
} from "three";
import { printUniforms } from "../../utils/shaders";
import { frag, vert } from "./shaders/grass";

const GRASS_TEX =
  "https://d27rt3a60hh1lx.cloudfront.net/content/alto/grasstile.jpg";

export default function CarnivalGrass() {
  const geo = useMemo(() => new RingBufferGeometry(9, 22.5, 50, 2), []);

  // grass texture
  const tex = useTexture(GRASS_TEX);
  tex.repeat.x = 100;
  tex.repeat.y = 100;
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

  return (
    <group name="carnival-grass">
      <mesh
        rotation-x={-Math.PI / 2}
        position-y={0.05}
        geometry={geo}
        material={mat}
      />
    </group>
  );
}

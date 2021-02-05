import { BackSide, ShaderMaterial } from "three";
import React, { useContext, useMemo } from "react";
import { useFrame } from "react-three-fiber";
import { frag, vert } from "./shaders/lucid";
import { AltoSceneState } from "../index";

const LucidMonday = () => {
  const { aa } = useContext(AltoSceneState);

  const lsdMat = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          audio: { value: new Array(5).fill(Math.random() * 255) },
        },
        vertexShader: vert,
        fragmentShader: frag,
        side: BackSide,
      }),
    []
  );

  useFrame(({ clock }) => {
    if (lsdMat?.uniforms) {
      lsdMat.uniforms.time.value = clock.getElapsedTime() / 10;
    }
    if (aa) {
      const data = aa.getFrequencyData();
      lsdMat.uniforms.audio.value = [
        data[0],
        data[10],
        data[20],
        data[120],
        data[200],
      ];
    }
  });

  return (
    <group>
      <mesh material={lsdMat}>
        <sphereBufferGeometry args={[60, 10, 10]} />
      </mesh>
    </group>
  );
};

export default LucidMonday;

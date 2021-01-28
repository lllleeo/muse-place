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
          audio: { value: new Array(256).fill(0) },
        },
        vertexShader: vert,
        fragmentShader: frag,
        side: BackSide,
        transparent: true,
      }),
    []
  );

  useFrame(({ clock }) => {
    if (lsdMat?.uniforms) {
      lsdMat.uniforms.time.value = clock.getElapsedTime() / 10;
    }
    if (aa) {
      lsdMat.uniforms.audio.value = aa.getFrequencyData();
    }
  });

  return (
    <group>
      <mesh material={lsdMat}>
        <sphereBufferGeometry args={[60, 60, 60]} />
      </mesh>
    </group>
  );
};

export default LucidMonday;

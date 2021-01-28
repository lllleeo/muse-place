import * as THREE from "three";
import { AudioAnalyser, Group, Material, Mesh, Object3D } from "three";
// @ts-ignore
import glsl from "babel-plugin-glsl/macro";
import { ReactNode, useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "react-three-fiber";

const uniforms = `
    uniform float time;
    uniform float bins;
    uniform float audio[64];
    varying vec3 vUv;
    
    float average_bins(float start, float end) {
      float total = 0.0;
      float i = 0.0;
      
      for(i = start; i < end; ++i) {
        total += audio[int(i)];
      }
      
      return total / (end - start + 1.0);
    }
`;

const vert = glsl`
    float y_factor = 1.0 + audio[int(vUv.t * bins)] / 255.0;
    float theta = sin( time + position.y * y_factor + audio[1] / 255.0 * 3.14 * 2.0 / 4.0 ) / 3.0;
    float c = cos( theta );
    float s = sin( theta );
    mat3 m = mat3( c, 0, s, 0, 1, 0, -s, 0, c );
    vec3 transformed = vec3( position ) * m;
    vNormal = vNormal * m;
`;

type Props = {
  children: ReactNode;
  aa?: AudioAnalyser;
};

const BINS = 64;

const Distort = (props: Props) => {
  const { aa, children } = props;

  const group = useRef<Group>();
  const seed = useMemo(() => Math.random(), []);
  const distortMat = useMemo<Material>(() => {
    const material = new THREE.MeshNormalMaterial();

    material.onBeforeCompile = function (shader) {
      shader.uniforms.time = { value: 0 };
      shader.uniforms.audio = { value: new Array(BINS).fill(0) };
      shader.uniforms.bins = { value: BINS };
      shader.vertexShader = uniforms + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace(
        "#include <begin_vertex>",
        vert
      );

      material.userData.shader = shader;
    };

    return material;
  }, []);

  useLayoutEffect(() => {
    if (group.current) {
      group.current.traverse((child: Object3D) => {
        if ((child as Mesh).material) {
          (child as Mesh).material = distortMat;
        }
      });
    }
  }, [distortMat]);

  useFrame(({ clock }) => {
    if (distortMat.userData.shader) {
      distortMat.userData.shader.uniforms.time.value =
        clock.getElapsedTime() * 2;

      if (aa) {
        const data = aa.getFrequencyData();
        const newData = [];
        for (let i = 0; i < BINS; i++) {
          newData[i] = data[i * 4];
        }
        distortMat.userData.shader.uniforms.audio.value = newData;
      }
    }

    if (group.current) {
      group.current.rotation.x = clock.getElapsedTime() / (7 + seed * 30);
      group.current.rotation.y = clock.getElapsedTime() / (10 + seed * 30);
      group.current.rotation.z = clock.getElapsedTime() / (9 + seed * 30);
    }
  });

  return <group ref={group}>{children}</group>;
};

export default Distort;

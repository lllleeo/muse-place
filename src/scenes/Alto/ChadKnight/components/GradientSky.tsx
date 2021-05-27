// @ts-ignore
import glsl from "glslify";
import { ReactThreeFiber, useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { Color, MathUtils, ShaderMaterial } from "three";
import * as THREE from "three";
import { useLimiter } from "spacesvr";
import { useSeason } from "../contexts/Seasons";
import { useSpring } from "react-spring/three";
import { Winter, Spring, Summer, Fall } from "./constants/skyColors";

type GradientSky = {
  radius?: number;
  stops: ReactThreeFiber.Color[];
} & JSX.IntrinsicElements["group"];

const GradientSky = (props: GradientSky) => {
  const { radius, stops, ...restProps } = props;

  const { activeSeason } = useSeason();

  const { skyColors } = useSpring({
    skyColors:
      activeSeason === "Winter"
        ? Winter
        : activeSeason === "Summer"
        ? Summer
        : activeSeason === "Spring"
        ? Spring
        : Fall,
    config: {
      mass: 5,
    },
  });

  const NUM_COLORS = skyColors.get().length;
  console.log(skyColors.get());
  // const COLORS = stops.map((stop) => {
  //   return new THREE.Color(stop as Color).getHex();
  // });

  const limiter = useLimiter(50);

  const mat = useMemo(() => {
    return new ShaderMaterial({
      uniforms: {
        radius: { value: radius },
        colors: { value: skyColors.get() },
        num_colors: { value: NUM_COLORS },
        time: { value: 0 },
      },
      vertexShader: `
          varying vec3 absPosition;
          void main() {
            absPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
          }
      `,
      fragmentShader: glsl`
          uniform highp float radius;
          uniform highp float time;
          uniform int num_colors;
          uniform highp float colors[100];
          varying vec3 absPosition;
          
          #pragma glslify: snoise = require(glsl-noise-simplex/3d.glsl) 
            float fsnoise(float val1, float val2, float val3){
              return snoise(vec3(val1,val2,val3));
            }
      
          vec3 hexToVec(int hex) {
            highp float r = float((hex >> 0x10) & 0xFF);
            highp float g = float((hex >> 0x8) & 0xFF);
            highp float b = float(hex & 0xFF);
            return vec3(r / 255.0, g / 255.0, b / 255.0);
          }
      
          void main() {
            highp float yCoord = (gl_FragCoord.y / gl_FragCoord.w);
            highp float height = ((absPosition.y + radius) / 2.) / (radius);
            highp float noise1 = snoise((absPosition * 0.01)+ time*0.07);
            highp float noise2 = snoise((absPosition * 0.2)+ time*0.4);
            
            highp float noise = noise1 * 0.8 + noise2 * 0.2;
            
            vec3 color = vec3(colors[0], colors[1], colors[2]);
            for(int i = 3; i < num_colors; i+=3) {
              vec3 thisColor = vec3(colors[i], colors[i+1], colors[i+2]);
              highp float lastPerc = float(i - 1) / float(num_colors);
              highp float thisPerc = float(i) / float(num_colors);
              color = mix(color, thisColor, smoothstep(lastPerc, thisPerc, height + noise * 0.1));
            }
            
            // color *= 1.;
            
            gl_FragColor = vec4( color, 1.0 );
          }
      `,
    });
  }, [stops]);

  mat.side = THREE.DoubleSide;

  useFrame(({ clock }) => {
    if (mat && limiter.isReady(clock)) {
      mat.uniforms.time.value = clock.getElapsedTime();
      mat.uniforms.colors.value = skyColors.get();
      // console.log(mat.uniforms.colors.value);
    }
  });

  return (
    <group {...restProps}>
      <mesh material={mat}>
        <sphereBufferGeometry args={[radius, 50, 50]} />
      </mesh>
    </group>
  );
};

export default GradientSky;
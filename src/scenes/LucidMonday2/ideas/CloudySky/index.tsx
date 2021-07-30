// @ts-ignore
import glsl from "glslify";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { Color, ShaderMaterial } from "three";
import * as THREE from "three";
import { useLimiter } from "spacesvr";
import { animated } from "react-spring/three";
import { isMobile } from "react-device-detect";

type GradientSky = {
  radius?: number;
} & GroupProps;

export default function CloudySky(props: GradientSky) {
  const { radius = 150, ...restProps } = props;

  // @ts-ignore
  const timestamp = useMemo(() => new Date() / 1000000000, []);

  const COLORS = [
    0.62, 0.988, 0.992, 0.757, 0.922, 0.992, 0.867, 0.847, 0.988, 0.961, 0.765,
    0.984,
  ].map((i) => i * 1);

  const mat = useMemo(() => {
    return new ShaderMaterial({
      uniforms: {
        radius: { value: radius },
        colors: { value: COLORS },
        num_colors: { value: COLORS.length },
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
            
            color *= (sin(time * 0.01) + 1.) / 2. * 0.8 + 0.2;
            
            gl_FragColor = vec4( color, 1.0 );
          }
      `,
    });
  }, []);

  mat.side = THREE.DoubleSide;

  const limiter = useLimiter(50);
  useFrame(({ clock }) => {
    if (!mat || !limiter.isReady(clock)) return;

    mat.uniforms.time.value = timestamp + clock.getElapsedTime();
  });

  if (isMobile) {
    return (
      <group {...restProps}>
        <mesh>
          <sphereBufferGeometry args={[radius, 50, 50]} />
          <animated.meshBasicMaterial
            color={new Color(COLORS[3], COLORS[4], COLORS[5])}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    );
  }

  return (
    <group {...restProps}>
      <mesh material={mat}>
        <sphereBufferGeometry args={[radius, 50, 50]} />
      </mesh>
    </group>
  );
}

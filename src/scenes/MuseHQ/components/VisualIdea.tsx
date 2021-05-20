import { useEffect, useMemo, useRef } from "react";
import { GroupProps, useFrame } from "@react-three/fiber";
import Material from "component-material";
import { Sphere } from "@react-three/drei";
import { DoubleSide, Color, Mesh } from "three";
// @ts-ignore
import { useLimiter } from "spacesvr";
import { Idea } from "../layers/basis";

type Props = {
  size?: number | [number, number, number];
  idea?: Idea;
} & Partial<Idea> &
  GroupProps;

/**
 * Pure Idea
 *
 *
 *
 * @param props
 * @constructor
 */
export const VisualIdea = (props: Props) => {
  const {
    size = 1,
    idea,
    mediation = 0,
    specificity = 0,
    utility = 0.5,
    ...restProps
  } = props;

  const mesh = useRef<Mesh>();
  const material = useRef<any>();
  const limiter = useLimiter(50);

  const SEED = useMemo(() => Math.random(), []);
  const COLOR = useMemo(() => new Color(), []);
  const RADIUS = 4;
  const NOISE_AMPLITUDE = 0.82;
  const NOISE_FREQ = 0.154;
  const HEX = idea
    ? idea.getHex()
    : new Idea({ utility, specificity, mediation }).getHex();
  const SIZE: [number, number, number] =
    typeof size === "number"
      ? [size * 0.2, size * 0.2, size * 0.2]
      : [size[0] * 0.2, size[1] * 0.2, size[2] * 0.2];

  useFrame(({ clock }) => {
    if (!material.current || !mesh.current || !limiter.isReady(clock)) return;

    material.current["time"] = clock.getElapsedTime() / 6 + SEED * 1000;
  });

  useEffect(() => {
    COLOR.set(HEX);
  }, [HEX]);

  return (
    <group {...restProps}>
      <group scale={SIZE}>
        {/* @ts-ignore */}
        <Sphere args={[RADIUS, 64, 32]} ref={mesh}>
          <Material
            ref={material}
            // @ts-ignore
            metalness={0.18}
            clearcoat={0.17}
            roughness={0.49}
            envMapIntensity={0.66}
            side={DoubleSide}
            uniforms={{
              radius: { value: RADIUS, type: "float" },
              time: { value: 0, type: "float" },
              color: {
                value: COLOR,
                type: "vec3",
              },
              radiusVariationAmplitude: {
                value: NOISE_AMPLITUDE,
                type: "float",
              },
              radiusNoiseFrequency: {
                value: NOISE_FREQ,
                type: "float",
              },
            }}
          >
            {/* @ts-ignore */}
            <Material.Vert.Head>
              {`
                // Description : Array and textureless GLSL 2D/3D/4D simplex
                //               noise functions.
                //      Author : Ian McEwan, Ashima Arts.
                //  Maintainer : ijm
                //     Lastmod : 20110822 (ijm)
                //     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
                //               Distributed under the MIT License. See LICENSE file.
                //               https://github.com/ashima/webgl-noise
                //
                
                vec3 mod289(vec3 x) {
                  return x - floor(x * (1.0 / 289.0)) * 289.0;
                }
                
                vec4 mod289(vec4 x) {
                  return x - floor(x * (1.0 / 289.0)) * 289.0;
                }
                
                vec4 permute(vec4 x) {
                     return mod289(((x*34.0)+1.0)*x);
                }
                
                vec4 taylorInvSqrt(vec4 r)
                {
                  return 1.79284291400159 - 0.85373472095314 * r;
                }
                
                float snoise(vec3 v)
                  {
                  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
                  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
                
                // First corner
                  vec3 i  = floor(v + dot(v, C.yyy) );
                  vec3 x0 =   v - i + dot(i, C.xxx) ;
                
                // Other corners
                  vec3 g = step(x0.yzx, x0.xyz);
                  vec3 l = 1.0 - g;
                  vec3 i1 = min( g.xyz, l.zxy );
                  vec3 i2 = max( g.xyz, l.zxy );
                
                  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
                  //   x1 = x0 - i1  + 1.0 * C.xxx;
                  //   x2 = x0 - i2  + 2.0 * C.xxx;
                  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
                  vec3 x1 = x0 - i1 + C.xxx;
                  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
                  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
                
                // Permutations
                  i = mod289(i);
                  vec4 p = permute( permute( permute(
                             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
                
                // Gradients: 7x7 points over a square, mapped onto an octahedron.
                // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
                  float n_ = 0.142857142857; // 1.0/7.0
                  vec3  ns = n_ * D.wyz - D.xzx;
                
                  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
                
                  vec4 x_ = floor(j * ns.z);
                  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
                
                  vec4 x = x_ *ns.x + ns.yyyy;
                  vec4 y = y_ *ns.x + ns.yyyy;
                  vec4 h = 1.0 - abs(x) - abs(y);
                
                  vec4 b0 = vec4( x.xy, y.xy );
                  vec4 b1 = vec4( x.zw, y.zw );
                
                  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
                  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
                  vec4 s0 = floor(b0)*2.0 + 1.0;
                  vec4 s1 = floor(b1)*2.0 + 1.0;
                  vec4 sh = -step(h, vec4(0.0));
                
                  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
                  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
                
                  vec3 p0 = vec3(a0.xy,h.x);
                  vec3 p1 = vec3(a0.zw,h.y);
                  vec3 p2 = vec3(a1.xy,h.z);
                  vec3 p3 = vec3(a1.zw,h.w);
                
                //Normalise gradients
                  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
                  p0 *= norm.x;
                  p1 *= norm.y;
                  p2 *= norm.z;
                  p3 *= norm.w;
                
                // Mix final noise value
                  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                  m = m * m;
                  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                                dot(p2,x2), dot(p3,x3) ) );
                  }
                          
                
                float fsnoise(float val1, float val2, float val3){
                  return snoise(vec3(val1,val2,val3));
                }
      
                vec3 distortFunct(vec3 transformed, float factor) {
                  float radiusVariation = -fsnoise(
                    transformed.x * radiusNoiseFrequency + time,
                    transformed.y * radiusNoiseFrequency + time,
                    transformed.z * radiusNoiseFrequency + time 
                  ) * radiusVariationAmplitude * factor;
                  return normalize(transformed) * (radiusVariation + radius);
                }
      
                vec3 orthogonal(vec3 v) {
                  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)
                  : vec3(0.0, -v.z, v.y));
                }
      
                vec3 distortNormal(vec3 position, vec3 distortedPosition, vec3 normal){
                  vec3 tangent1 = orthogonal(normal);
                  vec3 tangent2 = normalize(cross(normal, tangent1));
                  vec3 nearby1 = position + tangent1 * 0.1;
                  vec3 nearby2 = position + tangent2 * 0.1;
                  vec3 distorted1 = distortFunct(nearby1, 1.0);
                  vec3 distorted2 = distortFunct(nearby2, 1.0);
                  return normalize(cross(distorted1 - distortedPosition, distorted2 - distortedPosition));
                }
              `}
              {/* @ts-ignore */}
            </Material.Vert.Head>
            <Material.Vert.Body>{`
                float updateTime = time / 10.0;
                transformed = distortFunct(transformed, 1.0);
                vec3 distortedNormal = distortNormal(position, transformed, normal);
                vNormal = normal + distortedNormal;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed,1.);
              `}</Material.Vert.Body>
            <Material.Frag.Body>{`
                float angle = clamp(dot(normalize(vNormal), vec3(0., -1., 0.)), 0., 1.);
                gl_FragColor = vec4(gl_FragColor.rgb * color, gl_FragColor.a);  
                gl_FragColor.rgb = mix(gl_FragColor.rgb, mix(color, vec3(0.), 0.5), angle);
            `}</Material.Frag.Body>
          </Material>
        </Sphere>
      </group>
    </group>
  );
};

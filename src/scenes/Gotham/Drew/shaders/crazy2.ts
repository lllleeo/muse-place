import { Vector2 } from "three";
import { extend } from "@react-three/fiber";

import { shaderMaterial } from "@react-three/drei";

const CrazyMaterial = shaderMaterial(
  {
    time: 0,
  },
  `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix 
      * modelViewMatrix 
      * vec4( position, 1.0 );
  }`,
  `
  varying vec2 vUv;
  uniform float time;
  
  void main() {
    
    float r1 = 0.4;
    float r2 = 0.9;
    float r3 = 0.29;
    
    vec2 uv = 2.0 * vUv.xy  - 1.0;
    vec2 pos = (uv.xy-0.5);
    vec2 cir = ((pos.xy*pos.xy+sin(uv.x*18.0+time)/25.0*sin(uv.y*7.0+time*1.5)/1.0)+uv.x*sin(time)/16.0+uv.y*sin(time*1.2)/16.0);
    float circles = (sqrt(abs(cir.x+cir.y*0.5)*25.0)*5.0);
    gl_FragColor = vec4(sin(circles*1.25+2.0),abs(sin(circles*1.0-1.0)-sin(circles)),abs(sin(circles)*1.0),1.0);
  }
`
);

export default CrazyMaterial;
extend({ CrazyMaterial });

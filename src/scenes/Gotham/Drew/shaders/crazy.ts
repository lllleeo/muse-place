import { Vector2 } from "three";
import { extend } from "@react-three/fiber";

import { shaderMaterial } from "@react-three/drei";

const CrazyMaterial = shaderMaterial(
  {
    resolution: new Vector2(2000, 2000),
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
  uniform vec2 resolution;
  vec2 Randomise_Fractal = vec2(0.572, 0.432);
  float NUM_SIDES = 3.14567;
  float PI = 3.14159265359;
  
  void koleidoscope(inout vec2 uv)
  {
    float KA = PI / NUM_SIDES;
    // get the angle in radians of the current coords relative to origin (i.e. center of screen)
    float angle = atan (uv.y, uv.x);
    // repeat image over evenly divided rotations around the center
    angle = mod (angle, 2.0 * KA);
    // reflect the image within each subdivision to create a tilelable appearance
    angle = abs (angle - KA);
    // rotate image over time
    angle += 0.2 *time;
    // get the distance of the coords from the uv origin (i.e. center of the screen)
    float d = length(uv); 
    // map the calculated angle to the uv coordinate system at the given distance
    uv = d * vec2(cos(angle), sin(angle));
  }
  
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

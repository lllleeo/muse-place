// @ts-ignore
import glsl from "babel-plugin-glsl/macro";

export const uniforms = `
    varying vec3 pos;
    uniform float time;
`;

export const vert = `
    #include <begin_vertex>
    pos = (modelMatrix * vec4(position, 1.0)).xyz;
`;

export const frag = `
    #include <dithering_fragment>
    float pos_offset = (pos.x + pos.y + pos.z) / 8.;
    float shine = pow( sin(pos_offset + time / 4. ), 2000. ); // make sure pow is even
    
    gl_FragColor.rgb = clamp(gl_FragColor.rgb + 0.2 * shine, 0., 1.);
`;

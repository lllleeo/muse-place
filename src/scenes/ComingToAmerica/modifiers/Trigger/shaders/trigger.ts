export const uniforms = `
    varying vec3 pos;
    uniform float time;
    uniform float glow;
    uniform float seed;
`;

export const vert = `
    #include <begin_vertex>
    pos = (modelMatrix * vec4(position, 1.0)).xyz;
`;

// shine is #c999b5
export const frag = `
    #include <dithering_fragment>
    float seed_offset = seed * 549045.;
    float pos_offset = (pos.x + pos.y + pos.z) / 7.;
    
    // make sure pow is even
    float shine = pow( sin( seed_offset + pos_offset + time / 2.5 ), 2000. ); 
    
    vec3 shine_color = vec3(0.788,0.6,0.71);
    
    vec3 shine_offset = 0.4 * shine * shine_color;
    vec3 glow_offset = 0.35 * glow * shine_color;
    
    gl_FragColor.rgb = saturate( gl_FragColor.rgb + shine_offset + glow_offset );
`;

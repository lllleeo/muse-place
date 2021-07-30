export const vert = `
    void main(void) {
        vec3 nPos = position;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(nPos, 1.0);
    }
`;

export const frag = `
    uniform sampler2D tex;
    
    vec3 rgb2hsv(vec3 c)
    {
        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    
        float d = q.x - min(q.w, q.y);
        float e = 1.0e-10;
        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }
    
    vec3 hsv2rgb(vec3 c)
    {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    void main (void) {
        float u_time = time * 0.5;
    
        vec2 uv_coord = vUv;
        uv_coord *= 100.;
        uv_coord.x += 0.4 * (sin(u_time + uv_coord.x) + 1.) / 2.;
        uv_coord.y += 0.4 * (sin(u_time + 300. + uv_coord.y) + 1.) / 2.;

        vec4 color_a = texture2D(tex, uv_coord);
        vec3 color = color_a.rgb;
        
        color = rgb2hsv(color);
        color.r += 0.2 + 0.1 * (sin(u_time + vUv.x) + 1.) / 2.;
        color.g += 0.2 + 0.1 * (sin(u_time + 300. + vUv.y) + 1.) / 2.;
        color = hsv2rgb(color);
        
        gl_FragColor.rgb = color;
    }
`;

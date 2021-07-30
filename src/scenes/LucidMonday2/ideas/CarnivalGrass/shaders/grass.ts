export const vert = `

    void main(void) {
        vec3 nPos = position;
        vPos = position;
        vUv = uv;
        gl_PointSize = pointSize;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(nPos, 1.0);
    }
`;

export const frag = `
    void main (void) {
        vec3 color = vec3(1.0);
        
        gl_FragColor.rgb = vec3(baseColor * color);
        
        float a = fbm(vPos * 25. + time);
        a = pow(abs(a), fulfilled);
        gl_FragColor.a = a;
    }
`;

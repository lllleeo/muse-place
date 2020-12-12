export const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

export const fragShader = `
uniform sampler2D baseTexture;
uniform sampler2D bloomTexture;
varying vec2 vUv;
void main() {
    // gl_FragColor = texture2D( bloomTexture, vUv );
    if( vec4(1.0) * texture2D( baseTexture, vUv ) == vec4(0.0)) {
        gl_FragColor = vec4(1.0) * texture2D( bloomTexture, vUv );
    }
    else {
        gl_FragColor = ( vec4(1.0) * texture2D( baseTexture, vUv )  );
    }
}
`;

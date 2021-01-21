import { Texture, Vector2 } from "three";

export const grassUniforms = (grassTex: Texture) => ({
  grassTex: { value: grassTex },
  uvScale: { value: new Vector2(1, 1) },
  globalTime: { value: 0 },
});

export const grassVert = `
      uniform vec2 uvScale;
      uniform float globalTime;
      varying vec3 absPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      
      float magnitude = 0.5;
      
      void main() {
        vNormal = (modelMatrix * instanceMatrix * vec4(normal, 0.0)).xyz;
        vec4 pos = instanceMatrix * vec4(position, 1.0);
        vUv = uvScale * uv;

        float noised = 1.0; //noise(pos.xy);
        if(vUv.t > 0.4) {
          pos.y += 0.05 * sin(globalTime * magnitude * noised + pos.x + pos.y);
          pos.z += 0.05 * sin(globalTime * magnitude * noised + pos.x + pos.y);
          pos.x += 0.05 * sin(globalTime * magnitude * noised + pos.x + pos.y);
        }
        
        vec4 mvPosition = modelViewMatrix * vec4( pos );
        gl_Position = projectionMatrix * mvPosition;
      }
`;

export const grassFrag = `
      uniform sampler2D grassTex;
      uniform vec2 uvScale;
      varying vec2 vUv;
  
      void main() {
        const float threshold = 0.05;
        vec4 textureColor = texture2D(grassTex, vec2(vUv.s, vUv.t));
        
        // gradient from color1 to color2 going upward
        vec3 color1 = vec3(0.0782, 0.153, 0.0116);
        vec3 color2 = vec3(0.33958, 0.51, 0.0);
        vec3 color = mix(color1, color2, vUv.t);
        
        if (textureColor.w < threshold) {
            discard;
        } else {
            gl_FragColor = vec4(color, 1.0);
        }
      }
`;

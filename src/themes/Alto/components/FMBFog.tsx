import { useEffect } from "react";
import * as THREE from "three";
import { useThree } from "react-three-fiber";
import { FogExp2 } from "three";

const FBMFog = () => {
  const { scene } = useThree();

  useEffect(() => {
    THREE.ShaderChunk.fog_fragment = `
      #ifdef USE_FOG
        vec3 fogOrigin = cameraPosition;
        vec3 fogDirection = normalize(vWorldPosition - fogOrigin);
        float fogDepth = distance(vWorldPosition, fogOrigin);
        
        float heightFactor = 0.05;
        float fogFactor = heightFactor * exp(-fogOrigin.y * fogDensity) * 
          (1.0 - exp(-fogDepth * fogDirection.y * fogDensity) / fogDirection.y);
        fogFactor = saturate(fogFactor);
       
        gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
      #endif
    `;

    THREE.ShaderChunk.fog_pars_fragment = `
      #ifdef USE_FOG
        uniform vec3 fogColor;
        varying vec3 vWorldPosition;
        #ifdef FOG_EXP2
          uniform float fogDensity;
        #else
          uniform float fogNear;
          uniform float fogFar;
        #endif
      #endif
    `;

    THREE.ShaderChunk.fog_vertex = `
      #ifdef USE_FOG
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      #endif
    `;

    THREE.ShaderChunk.fog_pars_vertex = `
      #ifdef USE_FOG
        varying vec3 vWorldPosition;
      #endif
    `;

    scene.fog = new FogExp2(0xa7a7a7, 0.0005);

    return () => {
      // defaults

      THREE.ShaderChunk.fog_fragment = `
      #ifdef USE_FOG
        #ifdef FOG_EXP2
          float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
        #else
          float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
        #endif
        gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
      #endif
    `;

      THREE.ShaderChunk.fog_pars_fragment = `
      #ifdef USE_FOG
        uniform vec3 fogColor;
        varying float fogDepth;
        #ifdef FOG_EXP2
          uniform float fogDensity;
        #else
          uniform float fogNear;
          uniform float fogFar;
        #endif
      #endif
    `;

      THREE.ShaderChunk.fog_vertex = `
      #ifdef USE_FOG
        fogDepth = - mvPosition.z;
      #endif
    `;

      THREE.ShaderChunk.fog_pars_vertex = `
      #ifdef USE_FOG
        varying float fogDepth;
      #endif
    `;
    };

    scene.fog = null;
  }, []);

  return null;
};

export default FBMFog;

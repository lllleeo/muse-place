import { useEffect } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { FogExp2 } from "three";

const FBMFog = () => {
  const { scene } = useThree();

  useEffect(() => {
    THREE.ShaderChunk.common = `
        #define PI 3.141592653589793
        #define PI2 6.283185307179586
        #define PI_HALF 1.5707963267948966
        #define RECIPROCAL_PI 0.3183098861837907
        #define RECIPROCAL_PI2 0.15915494309189535
        #define EPSILON 1e-6
        #ifndef saturate
        #define saturate(a) clamp( a, 0.0, 1.0 )
        #endif
        #define whiteComplement(a) ( 1.0 - saturate( a ) )
        float pow2( const in float x ) { return x*x; }
        float pow3( const in float x ) { return x*x*x; }
        float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
        float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
        highp float rand( const in vec2 uv ) {
          const highp float a = 12.9898, b = 78.233, c = 43758.5453;
          highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
          return fract(sin(sn) * c);
        }
        #ifdef HIGH_PRECISION
          float precisionSafeLength( vec3 v ) { return length( v ); }
        #else
          float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
          float precisionSafeLength( vec3 v ) {
          float maxComponent = max3( abs( v ) );
          return length( v / maxComponent ) * maxComponent;
          }
        #endif
        struct IncidentLight {
          vec3 color;
          vec3 direction;
          bool visible;
        };
        struct ReflectedLight {
          vec3 directDiffuse;
          vec3 directSpecular;
          vec3 indirectDiffuse;
          vec3 indirectSpecular;
        };
        struct GeometricContext {
          vec3 position;
          vec3 normal;
          vec3 viewDir;
        #ifdef CLEARCOAT
          vec3 clearcoatNormal;
        #endif
        };
        vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
          return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
        }
        vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
          return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
        }
        vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
          float distance = dot( planeNormal, point - pointOnPlane );
          return - distance * planeNormal + point;
        }
        float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
          return sign( dot( point - pointOnPlane, planeNormal ) );
        }
        vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
          return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
        }
        mat3 transposeMat3( const in mat3 m ) {
          mat3 tmp;
          tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
          tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
          tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
          return tmp;
        }
        float linearToRelativeLuminance( const in vec3 color ) {
          vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
          return dot( weights, color.rgb );
        }
        bool isPerspectiveMatrix( mat4 m ) {
          return m[ 2 ][ 3 ] == - 1.0;
        }
        vec2 equirectUv( in vec3 dir ) {
          float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
          float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
          return vec2( u, v );
        }
         
        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
        
        float snoise(vec3 v){ 
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
        
          //  x0 = x0 - 0. + 0.0 * C 
          vec3 x1 = x0 - i1 + 1.0 * C.xxx;
          vec3 x2 = x0 - i2 + 2.0 * C.xxx;
          vec3 x3 = x0 - 1. + 3.0 * C.xxx;
        
        // Permutations
          i = mod(i, 289.0 ); 
          vec4 p = permute( permute( permute( 
                     i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                   + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
        
        // Gradients
        // ( N*N points uniformly over a square, mapped onto an octahedron.)
          float n_ = 1.0/7.0; // N=7
          vec3  ns = n_ * D.wyz - D.xzx;
        
          vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)
        
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
        
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
        
          vec4 b0 = vec4( x.xy, y.xy );
          vec4 b1 = vec4( x.zw, y.zw );
        
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
    
        float FBM(vec3 p) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 0.0;
          for (int i = 0; i < 6; ++i) {
            value += amplitude * snoise(p);
            p *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }
    `;

    THREE.ShaderChunk.fog_fragment = `
      #ifdef USE_FOG
        vec3 fogOrigin = cameraPosition;
        vec3 fogDirection = normalize(vWorldPosition - fogOrigin);
        float fogDepth = distance(vWorldPosition, fogOrigin);
        
        vec3 noiseSampleCoord = vWorldPosition * 0.25 + vec3(0.0, 0.0, fogTime * 0.025);
        float noiseSample = FBM(noiseSampleCoord + FBM(noiseSampleCoord)) * 0.5 + 0.5;
        fogDepth *= mix(noiseSample, 1.0, saturate((fogDepth - 5000.0) / 5000.0));
        fogDepth *= fogDepth;

        float heightFactor = 0.1;
        float fogFactor = heightFactor * exp(-fogOrigin.y * fogDensity) * 
          (1.0 - exp(-fogDepth * fogDirection.y * fogDensity)) / fogDirection.y;
        fogFactor = saturate(fogFactor);
       
        gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
      #endif
    `;

    THREE.ShaderChunk.fog_pars_fragment = `
      #ifdef USE_FOG
        uniform float fogTime;
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

    scene.fog = new FogExp2(0x32393f, 0.1);

    return () => {
      // defaults

      THREE.ShaderChunk.common = `
        #define PI 3.141592653589793
        #define PI2 6.283185307179586
        #define PI_HALF 1.5707963267948966
        #define RECIPROCAL_PI 0.3183098861837907
        #define RECIPROCAL_PI2 0.15915494309189535
        #define EPSILON 1e-6
        #ifndef saturate
        #define saturate(a) clamp( a, 0.0, 1.0 )
        #endif
        #define whiteComplement(a) ( 1.0 - saturate( a ) )
        float pow2( const in float x ) { return x*x; }
        float pow3( const in float x ) { return x*x*x; }
        float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
        float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
        highp float rand( const in vec2 uv ) {
          const highp float a = 12.9898, b = 78.233, c = 43758.5453;
          highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
          return fract(sin(sn) * c);
        }
        #ifdef HIGH_PRECISION
          float precisionSafeLength( vec3 v ) { return length( v ); }
        #else
          float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
          float precisionSafeLength( vec3 v ) {
          float maxComponent = max3( abs( v ) );
          return length( v / maxComponent ) * maxComponent;
          }
        #endif
        struct IncidentLight {
          vec3 color;
          vec3 direction;
          bool visible;
        };
        struct ReflectedLight {
          vec3 directDiffuse;
          vec3 directSpecular;
          vec3 indirectDiffuse;
          vec3 indirectSpecular;
        };
        struct GeometricContext {
          vec3 position;
          vec3 normal;
          vec3 viewDir;
        #ifdef CLEARCOAT
          vec3 clearcoatNormal;
        #endif
        };
        vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
          return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
        }
        vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
          return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
        }
        vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
          float distance = dot( planeNormal, point - pointOnPlane );
          return - distance * planeNormal + point;
        }
        float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
          return sign( dot( point - pointOnPlane, planeNormal ) );
        }
        vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
          return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
        }
        mat3 transposeMat3( const in mat3 m ) {
          mat3 tmp;
          tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
          tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
          tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
          return tmp;
        }
        float linearToRelativeLuminance( const in vec3 color ) {
          vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
          return dot( weights, color.rgb );
        }
        bool isPerspectiveMatrix( mat4 m ) {
          return m[ 2 ][ 3 ] == - 1.0;
        }
        vec2 equirectUv( in vec3 dir ) {
          float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
          float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
          return vec2( u, v );
        }
      `;

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

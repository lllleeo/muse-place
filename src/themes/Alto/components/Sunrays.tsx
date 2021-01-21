import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { forwardRef, Suspense } from "react";
import { useResource } from "react-three-fiber";
import * as THREE from "three";

const Sun = forwardRef(function Sun(props: any, forwardRef: any) {
  return (
    <group>
      <mesh ref={forwardRef} position={[0, 50, -50]}>
        <sphereBufferGeometry attach="geometry" args={[10, 20, 20]} />
        <meshBasicMaterial attach="material" color="white" />
      </mesh>
    </group>
  );
});

const Sunrays = (props: JSX.IntrinsicElements["group"]) => {
  const sunRef = useResource<THREE.Mesh>();
  return (
    <group {...props}>
      <Suspense fallback={null}>
        <Sun ref={sunRef} />
        {sunRef.current && (
          <EffectComposer multisampling={0}>
            <GodRays
              sun={sunRef.current}
              exposure={0.9}
              decay={0.9}
              samples={30}
              blur={0.9}
            />
          </EffectComposer>
        )}
      </Suspense>
    </group>
  );
};

export default Sunrays;

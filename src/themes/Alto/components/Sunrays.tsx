import { Bloom, EffectComposer, GodRays } from "@react-three/postprocessing";
import { forwardRef, Suspense } from "react";
import { useResource } from "react-three-fiber";
import * as THREE from "three";

const Sun = forwardRef(function Sun(props: any, forwardRef: any) {
  return (
    <group>
      <mesh ref={forwardRef} position={[0, 50, -50]}>
        <sphereBufferGeometry attach="geometry" args={[7, 20, 20]} />
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
            <Bloom
              intensity={0.7}
              luminanceThreshold={0.3}
              luminanceSmoothing={0.6}
              height={200}
            />
          </EffectComposer>
        )}
      </Suspense>
    </group>
  );
};

export default Sunrays;

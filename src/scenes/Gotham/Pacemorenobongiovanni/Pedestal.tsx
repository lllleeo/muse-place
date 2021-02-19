import { Text } from "@react-three/drei";
import { Material } from "three";

type PedestalProps = {
  material: Material;
  crazyMaterial: Material;
  drugTaken: boolean;
};

const Pedestal = (props: PedestalProps) => {
  const { material, crazyMaterial, drugTaken } = props;

  return (
    <group>
      {/* pedestal */}
      <mesh material={material} position={[0, 0.1, 0]}>
        <boxBufferGeometry args={[0.25, 1, 0.25]} />
      </mesh>
      <mesh
        material={crazyMaterial}
        position={[0, 0.1, 0]}
        scale={[0.99, 0.99, 0.99]}
      >
        <boxBufferGeometry args={[0.25, 1, 0.25]} />
      </mesh>
      {!drugTaken && (
        <>
          <group rotation-y={Math.PI} position-z={0.1}>
            {/* @ts-ignore */}
            <Text
              position={[0, 0.601, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              color="black"
              fontSize={0.05}
            >
              TAKE ME
            </Text>
          </group>
          {/* @ts-ignore */}
          <Text
            position={[0, 0.601, -0.1]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            color="black"
            fontSize={0.05}
          >
            TAKE ME
          </Text>
        </>
      )}
      {drugTaken && (
        <>
          <group rotation-y={Math.PI} position-z={0.1}>
            {/* @ts-ignore */}
            <Text
              position={[0, 0.601, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI]}
              color="black"
              fontSize={0.05}
            >
              OK
            </Text>
          </group>
          {/* @ts-ignore */}
          <Text
            position={[0, 0.601, -0.1]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            color="black"
            fontSize={0.05}
          >
            UH OH
          </Text>
        </>
      )}
    </group>
  );
};

export default Pedestal;

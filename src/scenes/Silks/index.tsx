import { Fog, StandardEnvironment } from "spacesvr";
import * as THREE from "three";
const Silks = () => {
  return (
    <StandardEnvironment player={{ speed: 1.4 }}>
      <mesh rotation-x={-Math.PI / 2}>
        <planeBufferGeometry args={[100, 100]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <ambientLight />
      <Fog color={new THREE.Color(0x000000)} near={0} far={40} />
    </StandardEnvironment>
  );
};

export default Silks;

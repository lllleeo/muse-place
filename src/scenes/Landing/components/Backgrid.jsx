import * as THREE from "three";
import { Plane } from "@react-three/drei";

export default function BackGrid() {
  return (
    <Plane
      position={[0, -10, -8]}
      rotation={[Math.PI / 2, 0, 0]}
      args={[700, 700, 128, 128]}
    >
      <meshStandardMaterial color="#ea5455" wireframe side={THREE.DoubleSide} />
    </Plane>
  );
}

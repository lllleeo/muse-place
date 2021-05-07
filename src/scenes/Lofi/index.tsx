import { Background, StandardEnvironment } from "spacesvr";
import Sphere from "./components/Sphere";

export default function Lofi() {
  return (
    <StandardEnvironment>
      <mesh name="floor" rotation-x={-Math.PI / 2}>
        <planeBufferGeometry args={[300, 300]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <directionalLight />
      <Background color="white" />
      <group name="lofi">
        <Sphere />
      </group>
    </StandardEnvironment>
  );
}

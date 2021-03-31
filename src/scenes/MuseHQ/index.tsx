import { Suspense } from "react";
import { StandardEnvironment } from "spacesvr";
import { Stars } from "@react-three/drei";
import Saas from "./models/Saas";

export default function MuseHQ() {
  return (
    <StandardEnvironment
      player={{ speed: 1.8 }}
      canvasProps={{ camera: { far: 300 } }}
    >
      <Stars count={1500} fade radius={80} factor={15} />
      <ambientLight />
      <Suspense fallback={null}>
        <Saas />
      </Suspense>
    </StandardEnvironment>
  );
}

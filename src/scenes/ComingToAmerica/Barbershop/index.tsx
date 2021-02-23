import { Suspense } from "react";
import { StandardEnvironment } from "spacesvr";
import { Sky } from "@react-three/drei";
import Barbershop from "./models/Barbershop";
import Mirror from "./components/Mirror";
import { Vector3 } from "three";
import MobileOnboarding from "../components/MobileOnboarding";

const BarbershopScene = () => {
  return (
    <StandardEnvironment player={{ pos: new Vector3(0, 1.25, 0), speed: 0.9 }}>
      <MobileOnboarding />
      <Sky />
      <Suspense fallback={null}>
        <Barbershop />
      </Suspense>
      <Suspense fallback={null}>
        <Mirror />
      </Suspense>
      <ambientLight />
    </StandardEnvironment>
  );
};

export default BarbershopScene;

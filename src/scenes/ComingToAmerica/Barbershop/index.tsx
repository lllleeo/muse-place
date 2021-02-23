import { Suspense } from "react";
import { StandardEnvironment } from "spacesvr";
import { Sky } from "@react-three/drei";
import Barbershop from "./models/Barbershop";
import Mirror from "./components/Mirror";
import { Vector3 } from "three";
import AmazonContainer from "../components/AmazonContainer";
import PauseMenu from "../components/PauseMenu";
import { Perf } from "r3f-perf";

const BarbershopScene = () => {
  return (
    <AmazonContainer>
      <StandardEnvironment
        pauseMenu={<PauseMenu />}
        player={{ pos: new Vector3(0, 1.25, 0), speed: 0.9 }}
      >
        <Sky />
        <Suspense fallback={null}>
          <Barbershop />
        </Suspense>
        <Suspense fallback={null}>
          <Mirror />
        </Suspense>
        <ambientLight />
        {/*<Perf />*/}
      </StandardEnvironment>
    </AmazonContainer>
  );
};

export default BarbershopScene;

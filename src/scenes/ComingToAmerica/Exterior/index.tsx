import { Suspense } from "react";
import { StandardEnvironment } from "spacesvr";
import { Sky } from "@react-three/drei";
import Sidewalk from "./models/Sidewalk";
import Building from "./models/Building";
import { Vector3 } from "three";
import Buildings from "./components/Buildings";

const ComingAmerica = () => {
  return (
    <StandardEnvironment player={{ pos: new Vector3(0, 2, 0), speed: 2 }}>
      <Sky sunPosition={[0, 1, 0.8]} />

      <Suspense fallback={null}>
        <Sidewalk />
      </Suspense>
      {/*<Suspense fallback={null}>*/}
      {/*  <Building position-x={-10} />*/}
      {/*</Suspense>*/}
      <pointLight position={[10, 30, 10]} intensity={0.6} />
      <ambientLight />
      <Suspense fallback={null}>
        <Buildings />
      </Suspense>
    </StandardEnvironment>
  );
};

export default ComingAmerica;

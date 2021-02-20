import { Suspense } from "react";
import { StandardEnvironment } from "spacesvr";
import { Sky } from "@react-three/drei";
import C2AExterior from "./models/C2AExterior";
import { Vector3 } from "three";
import Buildings from "./components/Buildings";

const ComingAmerica = () => {
  return (
    <StandardEnvironment
      player={{ pos: new Vector3(0, 2, 0), speed: 2 }}
      disableGround
    >
      <Sky sunPosition={[0, 1, 0.8]} />
      <Suspense fallback={null}>
        <C2AExterior />
      </Suspense>
      <pointLight position={[10, 30, 10]} intensity={0.6} />
      <ambientLight />
      {/*<Suspense fallback={null}>*/}
      {/*  <Buildings />*/}
      {/*</Suspense>*/}
    </StandardEnvironment>
  );
};

export default ComingAmerica;

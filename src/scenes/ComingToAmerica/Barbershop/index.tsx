import { Suspense } from "react";
import { StandardEnvironment } from "spacesvr";
import { Sky } from "@react-three/drei";
import C2ABarbershop from "./models/C2ABarbershop";
import Mirror from "./components/Mirror";
import { Vector3 } from "three";

const Barbershop = () => {
  return (
    <StandardEnvironment player={{ pos: new Vector3(0, 1.25, 0), speed: 0.9 }}>
      <Sky />
      <Suspense fallback={null}>
        <C2ABarbershop />
      </Suspense>
      <Suspense fallback={null}>
        <Mirror />
      </Suspense>
      {/*<mesh*/}
      {/*  name="mirror-placeholder"*/}
      {/*  rotation-y={Math.PI / 2}*/}
      {/*  position={[-2.82, 0.980, 0.75]}*/}
      {/*>*/}
      {/*  <planeBufferGeometry args={[4.5, 0.775]} />*/}
      {/*  <meshStandardMaterial color="red" />*/}
      {/*</mesh>*/}
      <ambientLight />
    </StandardEnvironment>
  );
};

export default Barbershop;

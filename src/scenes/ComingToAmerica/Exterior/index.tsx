import { Suspense } from "react";
import { HDRI, StandardEnvironment } from "spacesvr";
import { Sky } from "@react-three/drei";
import Sidewalk from "./models/Sidewalk";
import Building from "./models/Building";
import { Vector3 } from "three";
import Buildings from "./components/Buildings";

const ComingAmerica = () => {
  return (
    <StandardEnvironment
      player={{ pos: new Vector3(0, 2, 0), speed: 2 }}
      disableGround
    >
      <Suspense fallback={null}>
        <Sidewalk />
      </Suspense>
      {/*<Suspense fallback={null}>*/}
      {/*  <Building position-x={-10} />*/}
      {/*</Suspense>*/}
      <pointLight position={[0, 20, 0]} intensity={0.2} />
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Buildings />
      </Suspense>
      <HDRI
        src={
          "https://d27rt3a60hh1lx.cloudfront.net/content/silksbyvp/Hazy_Afternoon_HDR_full.hdr"
        }
      />
    </StandardEnvironment>
  );
};

export default ComingAmerica;

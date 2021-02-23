import { Suspense } from "react";
import { Audio, HDRI, StandardEnvironment } from "spacesvr";
import { Sky } from "@react-three/drei";
import Sidewalk from "./models/Sidewalk";
import Building from "./models/Building";
import { Vector3 } from "three";
import Buildings from "./components/Buildings";
import AmazonContainer from "../components/AmazonContainer";
import PauseMenu from "../components/PauseMenu";

const ComingAmerica = () => {
  return (
    <AmazonContainer>
      <StandardEnvironment
        pauseMenu={<PauseMenu />}
        player={{ pos: new Vector3(0, 1.5, 6), speed: 2 }}
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
        <Audio
          url="https://d27rt3a60hh1lx.cloudfront.net/content/c2a/audio/queens-audio.mp3"
          position={[0, 10, 0]}
        />
        <HDRI
          src={
            "https://d27rt3a60hh1lx.cloudfront.net/content/silksbyvp/Hazy_Afternoon_HDR_full.hdr"
          }
        />
      </StandardEnvironment>
    </AmazonContainer>
  );
};

export default ComingAmerica;

import { Suspense } from "react";
import { Audio, HDRI, StandardEnvironment } from "spacesvr";
import Sidewalk from "./models/Sidewalk";
import { Vector3 } from "three";
import Buildings from "./components/Buildings";
import AmazonContainer from "../components/AmazonContainer";
import PauseMenu from "../components/PauseMenu";
import EnterBarbershop from "./components/EnterBarbershop";

const ComingAmerica = () => {
  return (
    <AmazonContainer>
      <StandardEnvironment
        pauseMenu={<PauseMenu />}
        player={{
          pos: new Vector3(-1.315, 1.7, 5.58),
          rot: -Math.PI / 2,
          speed: 2,
        }}
        disableGround
      >
        <EnterBarbershop />
        <Suspense fallback={null}>
          <Sidewalk />
        </Suspense>
        <pointLight position={[0, 20, 0]} intensity={0.2} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Buildings />
        </Suspense>
        <Audio
          url="https://d27rt3a60hh1lx.cloudfront.net/content/c2a/audio/queens-audio.mp3"
          position={[0, 10, 0]}
        />
        <HDRI src="https://d27rt3a60hh1lx.cloudfront.net/content/silksbyvp/Hazy_Afternoon_HDR_full.hdr" />
      </StandardEnvironment>
    </AmazonContainer>
  );
};

export default ComingAmerica;

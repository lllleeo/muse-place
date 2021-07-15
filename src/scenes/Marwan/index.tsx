import { StandardEnvironment } from "spacesvr";
import Structure from "./ideas/Structure";
import Vinyl from "./ideas/Vinyl";
import CloudySky from "./ideas/CloudySky";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Image } from "spacesvr";
import TrackInfo from "./ideas/TrackInfo";

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/marwan";

export default function Marwan() {
  return (
    <StandardEnvironment
      playerProps={{
        pos: [0, 1, 0],
        rot: Math.PI / 2,
        speed: 2,
        controls: { disableGyro: true },
      }}
      canvasProps={{ camera: { far: 300 }, gl: { antialias: false } }}
      dev={process.env.NODE_ENV === "development"}
    >
      {/*<Sky sunPosition={[0, 1, 0]} />*/}
      <Structure />
      <Vinyl />
      <CloudySky radius={200} />
      <ambientLight />
      <TrackInfo
        title="7ajir"
        src={`${CONTENT_FOLDER}/album_1.jpg`}
        link="https://open.spotify.com/album/7Irru1vkUozGzdCBb0jr6d?si=D0xcP1viRcWOZqlP6xPRxg&dl_branch=1"
        position={[-1.4, 1, 0.115]}
        rotation-y={Math.PI / 2}
      />
      <TrackInfo
        title="Tourist"
        src={`${CONTENT_FOLDER}/album_2.jpg`}
        link="https://open.spotify.com/album/1c3wBlTUaz0LfQFR5BVN97?si=71a610d947674b57"
        position={[-1.62, 1, 0.115]}
        rotation-y={-Math.PI / 2}
      />
      <Image
        src={`${CONTENT_FOLDER}/3.jpg`}
        position={[-1.4, 1, 4.115]}
        rotation-y={Math.PI / 2}
      />
      <Image
        src={`${CONTENT_FOLDER}/4.jpg`}
        position={[-1.62, 1, 4.115]}
        rotation-y={-Math.PI / 2}
      />
      <TrackInfo
        title="Jerusalem Freestyle"
        src={`${CONTENT_FOLDER}/album_3.jpg`}
        link="https://open.spotify.com/album/4EDClLYmtvQdEHpIX66jxL?si=dEooT-BZT8eWq83pUb_C8w&dl_branch=1"
        position={[-1.4, 1, 8.115]}
        rotation-y={Math.PI / 2}
      />
      <TrackInfo
        title="Nirvana in Gaza"
        src={`${CONTENT_FOLDER}/album_4.jpg`}
        link="https://open.spotify.com/album/21GUygV8B9lQPtJiM0FP8k?si=q67KYklhQ1ioUYMntucfrA&dl_branch=1"
        position={[-1.62, 1, 8.115]}
        rotation-y={-Math.PI / 2}
      />
      <EffectComposer multisampling={0}>
        <Bloom
          luminanceThreshold={0.25}
          luminanceSmoothing={0.9}
          intensity={0.3}
          height={300}
        />
      </EffectComposer>
    </StandardEnvironment>
  );
}

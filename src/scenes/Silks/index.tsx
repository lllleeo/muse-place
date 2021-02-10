import { StandardEnvironment, Video } from "spacesvr";
import SilksModel from "./models/SilksModel";
import { Vector3 } from "three";
import Gallery from "./components/Gallery";
import Cart from "./Cart";
import { Perf } from "r3f-perf";
import Kiosks from "./components/Kiosks";
import Renderer from "./components/Renderer";
import { Radiance } from "./components/Radiance";
import ValPerre from "./characters/ValPerre";

const SILKS_CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/silksbyvp";

const HDR_URL = `${SILKS_CONTENT_FOLDER}/Hazy_Afternoon_HDR_full.hdr`;

const VIDEO_URL = `${SILKS_CONTENT_FOLDER}/video.mp4`;
const VIDEO_SCALE = 2.2;

const Silks = () => {
  return (
    <StandardEnvironment
      player={{
        pos: new Vector3(4.6, 1, -1.9),
        rot: Math.PI,
        speed: 1.25,
        controls: { disableGyro: true },
      }}
      canvasProps={{ gl: { antialias: true }, noEvents: true }}
    >
      <Cart />
      <Gallery />
      <Video
        src={VIDEO_URL}
        size={[VIDEO_SCALE, (402 / 720) * VIDEO_SCALE]}
        position={[-8.67, 1.03, -1.82]}
        rotation-y={Math.PI / 2}
      />
      <Radiance src={HDR_URL} />
      <ambientLight intensity={0.8} />
      <pointLight intensity={0.2} position-y={2} />
      <SilksModel />
      <ValPerre />
      <Kiosks />
      {/*<Perf />*/}
      <Renderer />
    </StandardEnvironment>
  );
};

export default Silks;

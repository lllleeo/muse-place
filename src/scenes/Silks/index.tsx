import { StandardEnvironment, Video } from "spacesvr";
import SilksModel from "./models/SilksModel";
import { Vector3 } from "three";
import Gallery from "./components/Gallery";
import { Sky } from "@react-three/drei";
import Cart from "./Cart";
import { Perf } from "r3f-perf";
import Kiosks from "./components/Kiosks";

const SILKS_CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/silksbyvp";

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
      {/*<Video*/}
      {/*  src={VIDEO_URL}*/}
      {/*  size={[VIDEO_SCALE, (402 / 720) * VIDEO_SCALE]}*/}
      {/*  position={[-8.67, 1.03, -1.82]}*/}
      {/*  rotation-y={Math.PI / 2}*/}
      {/*/>*/}
      <ambientLight intensity={0.6} />
      <pointLight intensity={0.6} position-y={10} />
      <SilksModel />
      <Sky sunPosition={[0, 1, 0.8]} />
      <Kiosks />
      {/*<Perf />*/}
    </StandardEnvironment>
  );
};

export default Silks;

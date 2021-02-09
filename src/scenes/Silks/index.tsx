import { StandardEnvironment, Video } from "spacesvr";
import SilksModel from "./models/SilksModel";
import { Vector3 } from "three";
import Gallery from "./components/Gallery";
import { Sky } from "@react-three/drei";
import Cart from "./Cart";

const VIDEO_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/content/silksbyvp/video.mp4";
const VIDEO_SCALE = 2.2;

const Silks = () => {
  return (
    <StandardEnvironment
      player={{ pos: new Vector3(0, 1, 0), speed: 1.25 }}
      canvasProps={{ gl: { antialias: true } }}
    >
      <Cart />
      <Gallery />
      <Video
        src={VIDEO_URL}
        size={[VIDEO_SCALE, (402 / 720) * VIDEO_SCALE]}
        position={[-8.67, 1.03, -1.82]}
        rotation-y={Math.PI / 2}
      />
      <ambientLight intensity={0.6} />
      <SilksModel />
      <pointLight position={[0, 5, 0]} intensity={0.1} />
      <Sky sunPosition={[0, 1, 0.8]} />
    </StandardEnvironment>
  );
};

export default Silks;

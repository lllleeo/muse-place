import { StandardEnvironment, Video } from "spacesvr";
import SilksModel from "./models/SilksModel";
import { Vector3 } from "three";
import Gallery from "./components/Gallery";
import { Sky } from "@react-three/drei";
import Cart from "./Cart";
import ProductPanel from "./components/ProductPanel";
import Kiosk from "./components/Kiosk";

const SILKS_CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/silksbyvp";

const VIDEO_URL = `${SILKS_CONTENT_FOLDER}/video.mp4`;
const VIDEO_SCALE = 2.2;

const Silks = () => {
  return (
    <StandardEnvironment
      player={{
        pos: new Vector3(0, 1, 0),
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
      <ambientLight intensity={0.6} />
      <SilksModel />
      <pointLight position={[0, 5, 0]} intensity={0.1} />
      <Sky sunPosition={[0, 1, 0.8]} />
      <ProductPanel position={[-0.75, 0, -3.3]} />
      <Kiosk position={[2, 0.6, -4.6]}>
        <mesh position-y={0}>
          <torusKnotBufferGeometry args={[0.1, 0.05]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </Kiosk>
      <Kiosk position={[3.5, 0.6, -4.6]}>
        <mesh position-y={0}>
          <sphereBufferGeometry args={[0.1, 0.05]} />
          <meshStandardMaterial color="purple" />
        </mesh>
      </Kiosk>
    </StandardEnvironment>
  );
};

export default Silks;

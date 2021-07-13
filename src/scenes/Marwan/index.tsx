import { StandardEnvironment } from "spacesvr";
import Structure from "./models/Structure";
import Vinyl from "./models/Vinyl";
import { Sky } from "@react-three/drei";

export default function Marwan() {
  return (
    <StandardEnvironment
      playerProps={{
        pos: [0, 1, 0],
        rot: Math.PI / 2,
        speed: 2,
        controls: { disableGyro: true },
      }}
    >
      <Sky sunPosition={[0, 1, 0]} />
      <Structure />
      <Vinyl />
      <ambientLight />
    </StandardEnvironment>
  );
}

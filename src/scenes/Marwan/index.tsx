import { StandardEnvironment } from "spacesvr";
import { Sky } from "@react-three/drei";
import Structure from "./ideas/Structure";
import Vinyl from "./ideas/Vinyl";

export default function Marwan() {
  return (
    <StandardEnvironment
      playerProps={{
        pos: [0, 1, 0],
        rot: Math.PI / 2,
        speed: 2,
        controls: { disableGyro: true },
      }}
      dev={process.env.NODE_ENV === "development"}
    >
      <Sky sunPosition={[0, 1, 0]} />
      <Structure />
      <Vinyl />
      <ambientLight />
    </StandardEnvironment>
  );
}

import { Suspense } from "react";
import { StandardEnvironment } from "spacesvr";
import Artbox from "./models/Artbox";
import { Sky } from "@react-three/drei";

const Artbocks = () => {
  return (
    <StandardEnvironment
      playerProps={{
        pos: [4.6, 1, -1.9],
        rot: Math.PI / 2,
        speed: 2,
        controls: { disableGyro: true },
      }}
    >
      <Sky sunPosition={[0, 1, 0]} />
      <pointLight />
      <ambientLight intensity={0.7} />
      <Suspense fallback={null}>
        <Artbox />
      </Suspense>
    </StandardEnvironment>
  );
};

export default Artbocks;

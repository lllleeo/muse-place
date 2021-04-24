import { Suspense } from "react";
import { StandardEnvironment } from "spacesvr";
import { Sky } from "@react-three/drei";
import Shed from "./models/Shed";

const ShedScene = () => {
  return (
    <StandardEnvironment
      canvasProps={{ camera: { far: 200 } }}
      playerProps={{ pos: [0, 1, 0], speed: 0.9, rot: 0 }}
    >
      <Sky />
      <Suspense fallback={null}>
        <Shed />
      </Suspense>
      <ambientLight intensity={4} />
      {/*<Perf />*/}
    </StandardEnvironment>
  );
};

export default ShedScene;

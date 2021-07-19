import { useAnalytics } from "services/analytics";
import { StandardEnvironment, Background, Fog } from "spacesvr";
import { Vector3 } from "three";
import * as THREE from "three";

import Wat from "./components/Water";
import { Sky } from "@react-three/drei";
import Mountains from "./components/Mountains";
import Structure from "./models/Poly_01";

import Models from "./components/Models";
import Controls from "./components/Controls";
import { useState, Suspense } from "react";

export type PolyProps = {
  models: {
    url: string;
    scale: number;
  }[];
};

const Starter = (props: PolyProps) => {
  useAnalytics();
  const { models } = props;
  const [current, setCurrent] = useState<number>(0);

  return (
    <StandardEnvironment player={{ pos: new Vector3(-15, 1, 0), speed: 3 }}>
      <Background color={0xffffff} />
      <ambientLight intensity={1} />
      <pointLight intensity={0.75} position={[0.5, 0.5, 0]} />
      <Fog color={new THREE.Color(0x000000)} near={0} far={50} />
      <Suspense fallback={null}>
        <Structure />
        <Models current={current} models={models} />
      </Suspense>
      <Controls current={current} setCurrent={setCurrent} models={models} />
      <Wat />
      <Sky />
      <Mountains />
    </StandardEnvironment>
  );
};

export default Starter;

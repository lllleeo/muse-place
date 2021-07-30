import React from "react";
import { Stars } from "@react-three/drei";

import InfiniteFalling from "./ideas/InfiniteFalling";
import CarnivalEntrance from "./ideas/CarnivalEntrance";
import ChangingSky from "./ideas/ChangingSky";
import { StandardEnvironment } from "spacesvr";
import CarnivalStructure from "./ideas/CarnivalStructure";
import CentralModel from "./ideas/CentralModel";
import CarnivalFoliage from "./ideas/CarnivalFoliage";
import CarnivalAudio from "./ideas/CarnivalAudio";
import { LucidWorld } from "./layers/LucidWorld";
import Kiosks from "./ideas/Kiosks";

export default function LucidMonday() {
  const innerCirle = (t: number, r: number) => {
    const x_gen = r * Math.cos(t);
    const z_gen = r * Math.sin(t);
    return new Vector3(x_gen, 0, z_gen);
  };

  return (
    <StandardEnvironment
      disableGround
      canvasProps={{ camera: { far: 300 } }}
      playerProps={{ pos: [-3, 10, 10], rot: Math.PI, speed: 4.25 }}
      dev={process.env.NODE_ENV == "development"}
    >
      <LucidWorld>
        <ambientLight intensity={0.5} color={0xffffff} />
        <ChangingSky duration={7} />
        <Stars radius={30} depth={50} count={1000} factor={2} fade />
        <CarnivalFoliage />
        <InfiniteFalling />
        <CarnivalAudio />
        <CarnivalStructure />
        <CentralModel />
        <CarnivalEntrance />
        <group name="weed plants">
          <Kiosks shape={innerCirle} />
          <Kiosks shape={innerCirle} position-y={5} rotation-y={Math.PI / 5} />
          <Kiosks
            shape={innerCirle}
            position-y={10}
            rotation-y={(6 * Math.PI) / 5}
          />
          <Kiosks
            shape={innerCirle}
            position-y={15}
            rotation-y={(4 * Math.PI) / 5}
          />
          <Kiosks shape={innerCirle} position-y={20} rotation-y={8 * Math.PI} />
        </group>
      </LucidWorld>
    </StandardEnvironment>
  );
}

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
import { Perf } from "r3f-perf";

export default function LucidMonday() {
  return (
    <StandardEnvironment
      disableGround
      canvasProps={{ camera: { far: 300 } }}
      playerProps={{ pos: [-3, 10, 10], rot: Math.PI, speed: 4.25 }}
      dev={process.env.NODE_ENV == "development"}
      simulationProps={{
        signalHost: "alto.us-west-1.elasticbeanstalk.com",
        signalPort: 443,
        signalPath: "/signal",
        socketServer: "wss://alto.us-west-1.elasticbeanstalk.com:8081",
        frequency: 25,
      }}
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
        <Kiosks />
        {/*<Perf />*/}
      </LucidWorld>
    </StandardEnvironment>
  );
}

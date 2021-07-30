import React from "react";
import { Stars } from "@react-three/drei";

import InfiniteFalling from "./ideas/InfiniteFalling";
import CarnivalEntrance from "./ideas/CarnivalEntrance";
import { StandardEnvironment } from "spacesvr";
import CarnivalStructure from "./ideas/CarnivalStructure";
import CentralModel from "./ideas/CentralModel";
import CarnivalFoliage from "./ideas/CarnivalFoliage";
import CarnivalAudio from "./ideas/CarnivalAudio";
import { LucidWorld } from "./layers/LucidWorld";
import Kiosks from "./ideas/Kiosks";
import { Perf } from "r3f-perf";
import Builder08 from "./ideas/Builders/Builder08";
import CloudySky from "./ideas/CloudySky";
import Kiosk2 from "./ideas/Kiosk2";
import Kiosk3 from "./ideas/Kiosk3";
import Kiosk4 from "./ideas/Kiosk4";

export default function LucidMonday() {
  return (
    <StandardEnvironment
      disableGround
      canvasProps={{ camera: { far: 300 } }}
      playerProps={{ pos: [3, 85, 10], rot: Math.PI, speed: 4.25 }}
      dev={process.env.NODE_ENV == "development"}
      simulationProps={{
        signalHost: "multiplayer-dev.us-west-1.elasticbeanstalk.com",
        signalPort: 443,
        signalPath: "/signal",
        socketServer:
          "wss://multiplayer-dev.us-west-1.elasticbeanstalk.com:8081",
        frequency: 25,
      }}
    >
      <LucidWorld>
        <ambientLight intensity={1} color={0xffffff} />
        <CloudySky />
        <Stars radius={40} depth={50} count={1000} factor={3} fade />
        <CarnivalFoliage />
        <InfiniteFalling />
        <CarnivalAudio />
        <CarnivalStructure />
        <CentralModel />
        <CarnivalEntrance />
        <Kiosks />
        <Kiosk2 />
        <Kiosk3 />
        <Kiosk4 />
        <Builder08 position={[0, 20.05, -13]} />
        {/*<Perf />*/}
      </LucidWorld>
    </StandardEnvironment>
  );
}

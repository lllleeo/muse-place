import React from "react";
import { Stars } from "@react-three/drei";
import { Vector3 } from "three";

import InfiniteFalling from "./ideas/InfiniteFalling";
import CarnivalEntrance from "./ideas/CarnivalEntrance";
import ChangingSky from "./ideas/ChangingSky";
import Grass from "./ideas/Grass";
import { StandardEnvironment, Audio } from "spacesvr";
import CarnivalStructure from "./ideas/CarnivalStructure";
import CentralModel from "./ideas/CentralModel";

export default function LucidMonday() {
  return (
    <StandardEnvironment
      disableGround
      canvasProps={{ camera: { far: 150 } }}
      playerProps={{ pos: [-3, 20, 32], rot: Math.PI, speed: 5 }}
    >
      <ambientLight intensity={0.5} color={0xffffff} />
      <Stars radius={30} depth={50} count={1000} factor={2} fade />
      <ChangingSky duration={7} />
      <InfiniteFalling />
      <Audio
        url="https://spaces-gallery-assets.s3-us-west-1.amazonaws.com/audio/LM025-Compiled.mp3"
        position={new Vector3(0, 10, 24)}
        volume={10}
        rollOff={0.2}
      />
      <CarnivalStructure />
      <CentralModel />
      <CarnivalEntrance />
      <Grass
        position-y={1.85}
        minRadius={5.25}
        maxRadius={50}
        raycastY={50}
        targetY={4}
      />
      <Grass
        position-y={-2.05}
        minRadius={5.25}
        maxRadius={50}
        raycastY={50}
        targetY={4}
      />
      <Grass
        position-y={-6.25}
        minRadius={5.25}
        maxRadius={50}
        raycastY={50}
        targetY={4}
      />
    </StandardEnvironment>
  );
}

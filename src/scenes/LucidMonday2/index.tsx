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
import CarnivalFoliage from "./ideas/CarnivalFoliage";
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
      canvasProps={{ camera: { far: 150 } }}
      playerProps={{ pos: [-3, 10, 10], rot: Math.PI, speed: 4.25 }}
      dev={process.env.NODE_ENV == "development"}
    >
      <CarnivalFoliage />
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

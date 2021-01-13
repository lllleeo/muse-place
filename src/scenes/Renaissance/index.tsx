import { Audio, Fog } from "spacesvr";
import * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";

import Lighting from "../../themes/Renaissance/components/Lighting";
import { keyframes } from "themes/Gotham/assets/constants";
import DualEnvironment from "themes/components/DualEnvironment";
import Renaissance, { RenaissanceProps } from "themes/Renaissance";
import { ReactNode } from "react";
import { Vector3 } from "three";
import dynamic from "next/dynamic";

const AudioReactive = dynamic(import("scenes/Renaissance/AudioReactive"), {
  ssr: false,
});

export type RenaissanceSceneProps = {
  floorColor?: string;
  sunPos?: number;
  night?: boolean;
  stars?: boolean;
  fogColor?: string;
  fogFar?: number;
  fogNear?: number;
  map?: string;
  scenePos?: [number, number, number];
  hMapScale?: number;
  xzMapScale?: number;
  far?: number;
  lightColor?: string;
  children?: ReactNode;
  audio?: string;
} & RenaissanceProps;

const RenaissanceScene = (props: RenaissanceSceneProps) => {
  const {
    children,
    audio,
    floorColor = 0xbbbbbb,
    sunPos = 1,
    night,
    stars,
    fogColor,
    fogFar = 50,
    fogNear = 3,
    map,
    scenePos = [0, -1, 0],
    hMapScale,
    xzMapScale,
    lightColor,
  } = props;

  return (
    <DualEnvironment
      keyframes={keyframes}
      canvasProps={{ camera: { far: 300 } }}
      player={{ pos: new Vector3(-3.4, 1, 4.9), rot: Math.PI }}
    >
      <Sky inclination={sunPos} distance={night ? 0 : 1000000} />
      {stars && <Stars count={1500} fade />}
      {fogColor && (
        <Fog color={new THREE.Color(fogColor)} near={fogNear} far={fogFar} />
      )}
      {audio && (
        <Audio url={audio} position={new Vector3(-6, 1, 2.5)} volume={1.2} />
      )}
      <Lighting color={lightColor} />
      <Renaissance {...props} />
      <AudioReactive />
      {children}
    </DualEnvironment>
  );
};

export default RenaissanceScene;

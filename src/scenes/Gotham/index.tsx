import { Audio, Fog } from "spacesvr";
import * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";

import Outside from "themes/Gotham/components/Outside";
import Lighting from "themes/Gotham/components/Lighting";
import { keyframes } from "themes/Gotham/assets/constants";
import DualEnvironment from "themes/Gotham/components/DualEnvironment";
import Gotham, { GothamProps } from "themes/Gotham";
import { ReactNode } from "react";
import { Vector3 } from "three";

export type GothamSceneProps = {
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
} & GothamProps;

const GothamScene = (props: GothamSceneProps) => {
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
      <Outside
        position={scenePos}
        color={floorColor}
        map={map}
        hScale={hMapScale}
        xzScale={xzMapScale}
      />
      <Gotham {...props} />
      {children}
    </DualEnvironment>
  );
};

export default GothamScene;

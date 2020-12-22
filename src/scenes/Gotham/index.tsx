import { Fog } from "spacesvr";
import * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";

import Outside from "themes/Gotham/components/Outside";
import Lighting from "themes/Gotham/components/Lighting";
import { keyframes } from "themes/Gotham/assets/constants";
import DualEnvironment from "themes/Gotham/components/DualEnvironment";
import Gotham, { GothamProps } from "themes/Gotham";
import { ReactNode } from "react";
import { useLoader } from "react-three-fiber";

type GothamSceneProps = {
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
} & GothamProps;

const GothamScene = (props: GothamSceneProps) => {
  const {
    children,
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
    >
      <Sky inclination={sunPos} distance={night ? 0 : 1000000} />
      {stars && <Stars count={1500} fade />}
      {fogColor && (
        <Fog color={new THREE.Color(fogColor)} near={fogNear} far={fogFar} />
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

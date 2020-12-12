import {
  StandardEnvironment,
  KeyframeEnvironment,
  Fog,
  Keyframe,
} from "spacesvr";
import * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";
import { isMobile } from "react-device-detect";

import Outside from "./components/Outside";
import Space from "./components/Space";
import Lighting from "./components/Lighting";
import { CanvasProps } from "react-three-fiber";
import { keyframes } from "./assets/constants";

type CodameProps = {
  linkData: {
    link?: string;
    desc: string;
    src: string;
  }[];
  name?: string;
  socials?: {
    instagram?: string;
    twitter?: string;
    web?: string;
  };
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
};

const Codame = (props: CodameProps) => {
  const {
    linkData,
    socials,
    floorColor = 0xbbbbbb,
    sunPos = 1,
    night,
    name,
    stars,
    fogColor,
    fogFar = 50,
    fogNear = 3,
    map,
    scenePos = [0, -1, 0],
    hMapScale,
    xzMapScale,
    far = 1000,
    lightColor,
  } = props;

  const fColor = new THREE.Color(fogColor);

  const Environment = (props: {
    children: React.ReactNode;
    keyframes: Keyframe[];
    canvasProps: Partial<CanvasProps>;
  }) => {
    const { keyframes, children, canvasProps } = props;

    if (isMobile) {
      return (
        <KeyframeEnvironment keyframes={keyframes} canvasProps={canvasProps}>
          {children}
        </KeyframeEnvironment>
      );
    } else {
      return (
        <StandardEnvironment canvasProps={canvasProps}>
          {children}
        </StandardEnvironment>
      );
    }
  };

  return (
    <Environment keyframes={keyframes} canvasProps={{ camera: { far } }}>
      <Sky inclination={sunPos} distance={night ? 0 : 1000000} />
      {stars && <Stars count={5000} factor={100000} radius={5000000} fade />}
      {fogColor && <Fog color={fColor} near={fogNear} far={fogFar} />}
      <Lighting color={lightColor} />
      <Outside
        position={scenePos}
        color={floorColor}
        map={map}
        hScale={hMapScale}
        xzScale={xzMapScale}
      />
      <Space linkData={linkData} socials={socials} name={name} />
    </Environment>
  );
};

export default Codame;

import { Audio, Fog, Keyframe, StandardEnvironment } from "spacesvr";
import * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";

import Outside from "themes/Gotham/components/Outside";
import Lighting from "themes/Gotham/components/Lighting";
import Gotham, { GothamProps } from "themes/Gotham";
import { ReactNode } from "react";
import { Vector3 } from "three";
import { Color } from "three";

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
  keyframes?: Keyframe[];
} & GothamProps;

const GothamScene = (props: GothamSceneProps) => {
  const {
    children,
    audio,
    sunPos = 1,
    night,
    stars,
    fogColor,
    lightColor,
    keyframes,
  } = props;

  return (
    <StandardEnvironment
      canvasProps={{ camera: { far: 200 } }}
      player={{ pos: new Vector3(-3.4, 1, 4.9), rot: Math.PI, speed: 1.7 }}
    >
      {!stars && <Sky inclination={sunPos} distance={night ? 0 : 1000000} />}
      {stars && <Stars count={1500} fade />}
      {fogColor && (
        <Fog
          color={new Color(night ? "#000000" : "#ececf4")}
          near={20}
          far={200}
        />
      )}
      {audio && (
        <Audio url={audio} position={new Vector3(-6, 1, 2.5)} volume={1.2} />
      )}
      <Lighting />
      <Outside fogColor={night ? "#000000" : "#ececf4"} />
      <Gotham {...props} />
      {children}
    </StandardEnvironment>
  );
};

export default GothamScene;

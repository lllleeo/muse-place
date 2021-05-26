import { Fog, StandardEnvironment } from "spacesvr";
import * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";

import React, { ReactNode, useState } from "react";
import { AudioAnalyser, DoubleSide } from "three";
import Alto, { AltoProps } from "themes/Alto/Chad";
import Lighting from "themes/Alto/components/Lighting";
import Dropoff from "themes/Alto/components/Dropoff";
import { HDRI } from "spacesvr";
import { SimulationProps } from "spacesvr/core/types/simulation";

export type AltoSceneProps = {
  stars?: boolean;
  fog?: [string, number, number];
  skyColor?: string;
  children?: ReactNode;
  hdri?: string;
  simulationProps?: SimulationProps;
} & Partial<AltoProps>;

type AltoSceneStore = {
  aa?: AudioAnalyser;
  setAA: (aa: AudioAnalyser) => void;
};
export const ChadAltoSceneState = React.createContext({} as AltoSceneStore);

const AltoScene = (props: AltoSceneProps) => {
  const {
    stars,
    fog,
    skyColor,
    children,
    simulationProps,
    hdri,
    ...restProps
  } = props;

  const [aa, setAA] = useState<THREE.AudioAnalyser>();

  return (
    <StandardEnvironment
      playerProps={{ pos: [0.5, 3, 70], rot: 0, speed: 5 }}
      canvasProps={{ dpr: 1 }}
      simulationProps={simulationProps}
      disableGround
      dev
    >
      <ChadAltoSceneState.Provider value={{ aa, setAA }}>
        {stars && <Stars count={5000} factor={100000} radius={5000000} fade />}
        {fog && (
          <Fog color={new THREE.Color(fog[0])} near={fog[1]} far={fog[2]} />
        )}
        {skyColor && (
          <mesh name="sun">
            <sphereBufferGeometry args={[60, 60, 60]} />
            <meshStandardMaterial
              color={skyColor}
              opacity={0.9}
              transparent
              side={DoubleSide}
            />
          </mesh>
        )}
        {/*<HDRI*/}
        {/*  src={*/}
        {/*    hdri ||*/}
        {/*    "https://d27rt3a60hh1lx.cloudfront.net/content/alto/SkyMural3.hdr"*/}
        {/*  }*/}
        {/*  disableBackground={!hdri}*/}
        {/*/>*/}
        {!hdri && <Sky sunPosition={[0, 1, 0]} />}
        <Alto {...restProps} />
        <Lighting />
        <Dropoff maxDist={35} />
        {/* @ts-ignore */}
        {children && React.cloneElement(children, { aa })}
      </ChadAltoSceneState.Provider>
    </StandardEnvironment>
  );
};

export default AltoScene;

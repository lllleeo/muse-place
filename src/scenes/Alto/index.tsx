import { Fog, StandardEnvironment } from "spacesvr";
import * as THREE from "three";
import { Sky, Stars, useProgress } from "@react-three/drei";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { MeshStandardMaterial, Vector3 } from "three";
import Alto, { AltoProps } from "themes/Alto";
import Lighting from "themes/Alto/components/Lighting";
import Dropoff from "themes/Alto/components/Dropoff";
import { HDRI } from "./components/HDRBackground";
import { ScrollDataProps } from "themes/Alto";

export type AltoSceneProps = {
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
  audio?: string;
  img?: string;
  scrollData?: ScrollDataProps[];
} & AltoProps;

const AltoScene = (props: AltoSceneProps) => {
  const {
    scrollData,
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
    far = 500,
    lightColor,
    audio = "",
    img,
  } = props;

  return (
    <StandardEnvironment
      player={{ pos: new Vector3(0, 1.5, 36), rot: -Math.PI / 2, speed: 2.4 }}
      disableGround
    >
      {stars && <Stars count={5000} factor={100000} radius={5000000} fade />}
      {fogColor && (
        <Fog color={new THREE.Color(fogColor)} near={fogNear} far={fogFar} />
      )}
      <Sky sunPosition={[0, 1, -1]} />
      <HDRI src="https://d27rt3a60hh1lx.cloudfront.net/content/alto/SkyMural3.hdr" />
      <Alto
        name={name}
        socials={socials}
        scrollData={scrollData}
        audio={audio}
      />
      <Lighting />
      <Dropoff />
    </StandardEnvironment>
  );
};

export default AltoScene;

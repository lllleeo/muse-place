import { Fog } from "spacesvr";
import * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";

import { keyframes } from "themes/Renaissance/assets/constants";
import React, { useMemo } from "react";
import { MeshStandardMaterial, Vector3 } from "three";
import DualEnvironment from "themes/components/DualEnvironment";
import Renaissance, { RenaissanceProps } from "themes/Renaissance";
import Lighting from "../../../themes/Renaissance/components/Lighting";
import Outside from "../../../themes/Renaissance/components/Outside";
import SkyCubes from "../../../themes/Renaissance/components/SkyCubes";
import AudioReactive from "../AudioReactive";
import { Perf } from "r3f-perf";

type StandardProps = {
  socialLinks: {
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
  audio?: string;
  img?: string;
} & RenaissanceProps;

const Standard = (props: StandardProps) => {
  const {
    artwork,
    socialLinks,
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
    audio = "",
    img,
  } = props;

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.2,
        roughness: 0.1,
      }),
    []
  );

  const socials = [];
  if (socialLinks.instagram) socials.push(socialLinks.instagram);
  if (socialLinks.twitter) socials.push(socialLinks.twitter);
  if (socialLinks.web) socials.push(socialLinks.web);

  return (
    <DualEnvironment
      keyframes={keyframes}
      canvasProps={{ camera: { far } }}
      player={{ pos: new Vector3(0, 0, 10), rot: Math.PI / 2 }}
    >
      <Sky inclination={sunPos} distance={night ? 0 : 1000000} />
      {stars && <Stars count={5000} factor={100000} radius={5000000} fade />}
      {fogColor && (
        <Fog color={new THREE.Color(fogColor)} near={fogNear} far={fogFar} />
      )}
      <group position={[0, 0, 0]}>
        <Renaissance name={name} socials={socials} artwork={artwork} />
        <Lighting />
      </group>
      <Outside
        position={scenePos}
        color={floorColor}
        map={map}
        hScale={hMapScale}
        xzScale={xzMapScale}
      />
      <SkyCubes
        position={[0, 30, 0]}
        scale={[20, 20, 20]}
        baseColor="#0000FF"
        baseColor2="#FF0000"
      />
      {audio && <AudioReactive audio={audio} img={img} position={[0, 5, 0]} />}
      <Perf />
    </DualEnvironment>
  );
};

export default Standard;

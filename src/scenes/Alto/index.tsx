import { Fog, StandardEnvironment } from "spacesvr";
import * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";

import React from "react";
import { Vector3 } from "three";
import Alto, { AltoProps } from "themes/Alto";
import Lighting from "themes/Alto/components/Lighting";
import Dropoff from "themes/Alto/components/Dropoff";
import { HDRI } from "themes/components/HDRBackground";

export type AltoSceneProps = {
  stars?: boolean;
  fog?: [string, number, number];
} & AltoProps;

const AltoScene = (props: AltoSceneProps) => {
  const { stars, fog, ...restProps } = props;

  return (
    <StandardEnvironment
      player={{ pos: new Vector3(0, 1.5, 36), rot: -Math.PI / 2, speed: 2.4 }}
      disableGround
    >
      {stars && <Stars count={5000} factor={100000} radius={5000000} fade />}
      {fog && (
        <Fog color={new THREE.Color(fog[0])} near={fog[1]} far={fog[2]} />
      )}
      <Sky sunPosition={[0, 1, -1]} />
      <HDRI src="https://d27rt3a60hh1lx.cloudfront.net/content/alto/SkyMural3.hdr" />
      <Alto {...restProps} />
      <Lighting />
      <Dropoff />
    </StandardEnvironment>
  );
};

export default AltoScene;

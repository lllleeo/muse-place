import { Interactable, StandardEnvironment, Video } from "spacesvr";
import * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";

import React, { ReactNode, useState } from "react";
import { Audio, AudioAnalyser, DoubleSide, Vector3 } from "three";
import Alto, { AltoProps } from "themes/Alto";
import Lighting from "themes/Alto/components/Lighting";
import Dropoff from "themes/Alto/components/Dropoff";
import { HDRI } from "spacesvr";
import EmailCollection from "themes/Gotham/overlays/EmailCollection";

export type AltoSceneProps = {
  stars?: boolean;
  skyColor?: string;
  children?: ReactNode;
} & Partial<AltoProps>;

type AltoSceneStore = {
  aa?: AudioAnalyser;
  setAA: (aa: AudioAnalyser) => void;
};
export const AltoSceneState = React.createContext({} as AltoSceneStore);

const AltoScene = (props: AltoSceneProps) => {
  const { stars, skyColor, children, ...restProps } = props;

  const genesis =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/GENESIS1.mp4";
  const cardPlat =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/CARD1_PLAT.mp4";
  const skyloft =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/skyloft.mp4";

  const handleSkyloft = () => {
    window.location.href = "/kirax23";
  };
  const handleGenesis = () => {
    window.open(
      "https://foundation.app/X23/x23-genesis-release-7116",
      "_blank"
    );
  };

  const [aa, setAA] = useState<THREE.AudioAnalyser>();

  return (
    <StandardEnvironment
      player={{ pos: new Vector3(0, 2.7, 36), rot: -Math.PI / 2, speed: 2.4 }}
      disableGround
    >
      <AltoSceneState.Provider value={{ aa, setAA }}>
        {stars && <Stars count={5000} factor={100000} radius={5000000} fade />}
        {skyColor && (
          <mesh>
            <sphereBufferGeometry args={[60, 60, 60]} />
            <meshStandardMaterial
              color={skyColor}
              opacity={0.9}
              transparent
              side={DoubleSide}
            />
          </mesh>
        )}
        <HDRI src="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/kirahdri2.hdr" />
        <Alto {...restProps} />
        <Lighting />
        <Dropoff />
        <Interactable onClick={handleSkyloft}>
          <group
            position={[-12, 1, 32]}
            rotation-y={Math.PI / 1.2}
            scale={[5, 5, 5]}
          >
            <Video src={skyloft} />
          </group>
        </Interactable>
        <Interactable onClick={handleGenesis}>
          <group
            position={[2.9, 7.75, -3.75]}
            rotation-y={-0.6}
            scale={[1.8, 1.8, 1.8]}
            name="genesis"
          >
            <Video src={genesis} framed />
          </group>
          <group
            position={[-2.35, 7.75, -4]}
            rotation-y={0.6}
            scale={[1.8, 1.8, 1.8]}
            name="cardplat"
          >
            <Video src={cardPlat} framed />
          </group>
        </Interactable>
        {/* @ts-ignore */}
        {children && React.cloneElement(children, { aa })}
      </AltoSceneState.Provider>
    </StandardEnvironment>
  );
};

export default AltoScene;

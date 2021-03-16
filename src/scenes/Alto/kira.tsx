import { Interactable, StandardEnvironment, Image } from "spacesvr";
import * as THREE from "three";
import { Stars } from "@react-three/drei";

import React, { ReactNode, useState } from "react";
import { AudioAnalyser, DoubleSide, Vector3 } from "three";
import Alto, { AltoProps } from "themes/Alto/Kira";
import Lighting from "themes/Alto/components/Lighting";
import Dropoff from "themes/Alto/components/Dropoff";
import { HDRI } from "spacesvr";
import Card from "themes/Alto/models/Kira/NftCard";

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
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/g1.JPG";
  const genesis2 =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/g2.JPG";
  const genesis3 =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/g3.JPG";
  const genesis4 =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/genesis4.mp4";
  const cardPlat =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/CARD1_PLAT.mp4";
  const skyloft =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/SKYLOFT2.png";
  const link = "https://foundation.app/X23";

  const handleSkyloft = () => {
    window.location.href = "/kirax23";
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
            <Image src={skyloft} />
          </group>
        </Interactable>
        <group position={[-18.5, 1.6, 26.7]} rotation-y={-2.61} name="cardPlat">
          <Card link={link} video={cardPlat} float />
        </group>
        <group position={[28.9, 1.6, 10.8]} rotation-y={-0.45} name="g1">
          <Card
            link={link + "/x23-genesis-release-7116"}
            image={genesis}
            float
          />
        </group>
        <group position={[-23.7, 1.6, -15.9]} rotation-y={2.5} name="g2">
          <Card
            link={link + "/x23-genesis-collection-arrival-7595"}
            image={genesis2}
            float
          />
        </group>
        <group position={[22.4, 2.15, -14.12]} rotation-y={0.54} name="g3">
          <Card
            link={link + "/x23-genesis-collection-download-8117"}
            image={genesis3}
            float
          />
        </group>
        <group position={[0, 7.5, 0]} rotation-y={0.5} name="g4">
          <Card
            link={link + "/x23-genesis-collection-deus-x23-machina-8682"}
            video={genesis4}
            rotate
            float
          />
        </group>
        {/*@ts-ignore*/}
        {children && React.cloneElement(children, { aa })}
      </AltoSceneState.Provider>
    </StandardEnvironment>
  );
};

export default AltoScene;

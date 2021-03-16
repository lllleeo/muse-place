import { Interactable, StandardEnvironment, Video, Image } from "spacesvr";
import * as THREE from "three";
import { Stars } from "@react-three/drei";

import React, { ReactNode, useState } from "react";
import { Audio, AudioAnalyser, DoubleSide, Vector3 } from "three";
import Alto, { AltoProps } from "themes/Alto/Kira";
import Lighting from "themes/Alto/components/Lighting";
import Dropoff from "themes/Alto/components/Dropoff";
import { HDRI } from "spacesvr";
import Card from "themes/Alto/models/Kira/NftCard";
import EmailCollection from "themes/Gotham/overlays/EmailCollection";
import { useLoader } from "react-three-fiber";

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
  const genesis2 =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/genesis2.mp4";
  const genesis3 =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/genesis3.mp4";
  const cardPlat =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/CARD1_PLAT.mp4";
  const skyloft =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/SKYLOFT2.png";
  // const planetTex = useLoader(THREE.TextureLoader, skyloft);
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
            {/*<Video src={skyloft} />*/}
            <Image src={skyloft} />
            {/*<mesh>*/}
            {/*  <planeBufferGeometry args={[1, 0.15]} />*/}
            {/*  <meshStandardMaterial map={planetTex} opacity={1} transparent/>*/}
            {/*</mesh>*/}
          </group>
        </Interactable>
        <group
          position={[2.9, 7.75, -3.75]}
          rotation-y={0.9}
          scale={[1.25, 1.25, 1.25]}
          name="g1"
        >
          <Card link={link} video={genesis} />
        </group>
        <group
          position={[-2.35, 7.75, -4]}
          rotation-y={2}
          scale={[1.25, 1.25, 1.25]}
          name="g2"
        >
          <Card link={link} video={genesis2} />
        </group>
        {/*<group*/}
        {/*  position={[0, 2, 33]}*/}
        {/*  rotation-y={2}*/}
        {/*  scale={[1.25, 1.25, 1.25]}*/}
        {/*  name="g3"*/}
        {/*>*/}
        {/*  <Card link={link} video={genesis3} />*/}
        {/*</group>*/}
        {/* @ts-ignore */}
        {children && React.cloneElement(children, { aa })}
      </AltoSceneState.Provider>
    </StandardEnvironment>
  );
};

export default AltoScene;

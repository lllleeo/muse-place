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

const GAP = 0.2;

export const AltoSceneState = React.createContext({} as AltoSceneStore);

const AltoScene = (props: AltoSceneProps) => {
  const { stars, skyColor, children, ...restProps } = props;

  const genesis10 =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/genesis10.mp4";
  const skyloft =
    "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/SKYLOFT2.png";
  const link = "https://foundation.app/X23";

  const handleSkyloft = () => {
    window.location.href = "/kirax23";
  };

  const [aa, setAA] = useState<THREE.AudioAnalyser>();
  const links = [
    {
      video:
        "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/genesis10.mp4",
      link: "/x23-genesis-collection-discovery-12710",
      thin: true,
    },
    {
      img:
        "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/g1.JPG",
      link: "https://foundation.app/X23/x23-genesis-release-7116",
    },
    {
      img:
        "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/g2.JPG",
      link: "https://foundation.app/X23/x23-genesis-collection-arrival-7595",
    },
    {
      img:
        "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/g3.JPG",
      link: "https://foundation.app/X23/x23-genesis-collection-download-8117",
    },
    {
      img:
        "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/g4.JPG",
      link:
        "https://foundation.app/X23/x23-genesis-collection-deus-x23-machina-8682",
    },
    {
      img:
        "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/g5.JPG",
      link: "https://foundation.app/X23/x23-genesis-collection-night-city-9257",
    },
    {
      img:
        "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/g6.JPG",
      link: "https://foundation.app/X23/x23-genesis-collection-invasion-9837",
      thin: true,
    },
    {
      img:
        "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/g6.JPG",
      link: "https://foundation.app/X23/x23-genesis-collection-deception-10462",
      thin: true,
    },
    {
      img:
        "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/g8.JPG",
      link:
        "https://foundation.app/X23/x23-genesis-collection-final-boss-11610",
    },
    {
      img:
        "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23/g9.JPG",
      link: "https://foundation.app/X23/x23-genesis-collection-aftermath-12138",
    },
  ];

  function rotate(index: number) {
    return (Math.PI * 2 - GAP) * (index / 11) - Math.PI + GAP;
  }

  return (
    <StandardEnvironment
      playerProps={{ pos: [0, 2.7, 36], rot: -Math.PI / 2, speed: 4.5 }}
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
        <group position={[0, 7.5, 0]} rotation-y={0.5} name="center">
          <Card
            link={link + "/x23-genesis-collection-discovery-12710"}
            video={genesis10}
            rotate
            float
            thin
          />
        </group>
        {links.map((link) => (
          <group
            rotation-y={-rotate(links.indexOf(link) + 1) + 0.1}
            key={links.indexOf(link)}
          >
            <group rotation-y={-Math.PI / 2} position={[0, 5.9, -12]}>
              <group position-x={1.35}>
                <Card
                  link={link.link}
                  image={link.img ? link.img : undefined}
                  video={link.video ? link.video : undefined}
                  thin={link.thin ? true : undefined}
                />
              </group>
            </group>
          </group>
        ))}
        {/*@ts-ignore*/}
        {children && React.cloneElement(children, { aa })}
      </AltoSceneState.Provider>
    </StandardEnvironment>
  );
};

export default AltoScene;

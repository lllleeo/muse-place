import { Fog, Text } from "spacesvr";
import * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";

import Outside from "themes/Gotham/components/Outside";
import Lighting from "themes/Gotham/components/Lighting";
import { keyframes } from "themes/Gotham/assets/constants";
import { useMemo } from "react";
import { MeshStandardMaterial } from "three";
import DualEnvironment from "themes/components/DualEnvironment";
import Gotham, { GothamProps } from "themes/Gotham";

type CodameProps = {
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
} & GothamProps;

const Codame = (props: CodameProps) => {
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
      player={{ speed: 1.7 }}
    >
      <Sky inclination={sunPos} distance={night ? 0 : 1000000} />
      {stars && <Stars count={5000} factor={100000} radius={5000000} fade />}
      {fogColor && (
        <Fog color={new THREE.Color(fogColor)} near={fogNear} far={fogFar} />
      )}
      <Lighting color={lightColor} />
      <Outside
        position={scenePos}
        color={floorColor}
        map={map}
        hScale={hMapScale}
        xzScale={xzMapScale}
      />
      <Gotham name={name} socials={socials} artwork={artwork} />
      <group scale={[5, 5, 5]}>
        <group
          position={[0.27, 0.195, -0.55]}
          rotation={[0, -Math.PI / 5, 0]}
          name="Muse & Codame"
        >
          <Text
            text="Muse"
            size={1.18}
            material={material}
            position={[-0.06, 0, 0]}
          />
          <Text
            text="&"
            size={1.4}
            material={material}
            position={[0.22, -0.01, 0]}
            rotation={[0, 0, Math.PI / 6.5]}
          />
          <Text
            text="Codame"
            size={1.18}
            position={[0, -0.12, 0]}
            material={material}
          />
        </group>
      </group>
    </DualEnvironment>
  );
};

export default Codame;

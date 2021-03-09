import { Fog, StandardEnvironment } from "spacesvr";
import * as THREE from "three";
import { Sky, Stars } from "@react-three/drei";

import Outside from "themes/Gotham/components/Outside";
import Lighting from "themes/Gotham/components/Lighting";
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
    night,
    name,
    stars,
    fogColor,
    fogFar = 50,
    fogNear = 3,
  } = props;

  const socials = [];
  if (socialLinks.instagram) socials.push(socialLinks.instagram);
  if (socialLinks.twitter) socials.push(socialLinks.twitter);
  if (socialLinks.web) socials.push(socialLinks.web);

  return (
    <StandardEnvironment
      canvasProps={{ camera: { far: 200 } }}
      player={{ speed: 1.7 }}
    >
      {!stars && <Sky inclination={1} distance={night ? 0 : 1000000} />}
      {stars && <Stars count={5000} factor={100000} radius={5000000} fade />}
      {fogColor && (
        <Fog color={new THREE.Color(fogColor)} near={fogNear} far={fogFar} />
      )}
      <Lighting />
      <Outside />
      <Gotham name={name} socials={socials} artwork={artwork} />
    </StandardEnvironment>
  );
};

export default Codame;

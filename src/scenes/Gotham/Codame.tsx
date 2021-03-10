import { Fog, StandardEnvironment } from "spacesvr";
import { Sky, Stars } from "@react-three/drei";

import Buildings from "themes/Gotham/components/Buildings";
import Lighting from "themes/Gotham/components/Lighting";
import Gotham, { GothamProps } from "themes/Gotham";
import { Color, Vector3 } from "three";

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
  const { artwork, socialLinks, night, name, stars, fogColor } = props;

  const socials = [];
  if (socialLinks.instagram) socials.push(socialLinks.instagram);
  if (socialLinks.twitter) socials.push(socialLinks.twitter);
  if (socialLinks.web) socials.push(socialLinks.web);

  return (
    <StandardEnvironment
      canvasProps={{ camera: { far: 200 } }}
      player={{ pos: new Vector3(-3.4, 1, 4.9), rot: Math.PI, speed: 1.7 }}
    >
      {!stars && <Sky inclination={1} distance={night ? 0 : 1000000} />}
      {stars && <Stars count={5000} factor={100000} radius={5000000} fade />}
      {fogColor && (
        <Fog
          color={new Color(night ? "#000000" : "#ececf4")}
          near={20}
          far={200}
        />
      )}
      <Lighting />
      <Buildings fogColor={night ? "#000000" : "#ececf4"} />
      <Gotham name={name} socials={socials} artwork={artwork} />
    </StandardEnvironment>
  );
};

export default Codame;

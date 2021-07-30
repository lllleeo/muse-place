import { Text } from "@react-three/drei";
import { Color } from "three";
import SocialMediaButton from "./SocialMediaButton";
import { GroupProps } from "@react-three/fiber";

const FRAME_COLOR = new Color(0xffffff);

function AnnotatedLink(props: { link: string; text?: string } & GroupProps) {
  const { link, ...restProps } = props;

  return (
    <group name={`annotatedlink-${link}`} {...restProps}>
      <SocialMediaButton link={link} scale={2} />
    </group>
  );
}

const RightWall = () => {
  return (
    <group
      name="socials"
      rotation={[0, -Math.PI / 2, 0]}
      position={[4.0, -0.35, -7.8]}
      scale={[0.7, 0.7, 0.7]}
    >
      <group name="bunch-1" position-z={1.5}>
        <AnnotatedLink
          link="https://open.spotify.com/artist/7dhK4qWq1jEEFjXCD5z5xr?si=Kw66DJ-kQJ6z_tBosMMLTQ&dl_branch=1"
          position={[9.85, 1, -2.1]}
          rotation-y={0.3}
        />
        <AnnotatedLink
          link="https://soundcloud.com/lucidmonday/"
          position={[8.9, 1, -2]}
          rotation-y={-0.1}
        />
        <AnnotatedLink
          link="https://www.instagram.com/lucidmonday/"
          position={[9.3, 1.85, -2]}
          rotation-y={0.1}
        />
      </group>
      <AnnotatedLink
        link="https://discord.com/invite/xQspThf"
        position={[14.3, 0.95, -5.24]}
        rotation-y={-0.9}
        rotation-x={-0.25}
        rotation-z={-0.175}
      />
      <AnnotatedLink
        link="https://www.youtube.com/channel/UCyzAwg6jela6dNhe38Rwp7Q"
        position={[14, 0.9, 0]}
        rotation-y={-0.4}
      />
      <AnnotatedLink
        link="https://twitter.com/Lucid_Monday"
        position={[8, 0.9, 2]}
        rotation-y={0.9}
      />
    </group>
  );
};

export default RightWall;

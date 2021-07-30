import { Text } from "@react-three/drei";
import { Color } from "three";
import SocialMediaButton from "./SocialMediaButton";
import { GroupProps } from "@react-three/fiber";

const FRAME_COLOR = new Color(0xffffff);

function AnnotatedLink(
  props: { link: string; text?: string; smType?: string } & GroupProps
) {
  const { link, smType, ...restProps } = props;

  return (
    <group name={`annotatedlink-${link}`} {...restProps}>
      <SocialMediaButton link={smType ? smType : link} scale={2} />
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
          link="spoti.fi/3iiKz5D"
          smType="open.spotify.com/user/0m1ewbfl4sfauko9hvrg5qopu?si=tD6RjOJRTdSTGn96XGaLEg"
          position={[9.85, 1, -2.1]}
          rotation-y={0.3}
        />
        <AnnotatedLink
          link="bit.ly/3zLAsfa"
          smType="soundcloud.com/lucidmonday"
          position={[8.9, 1, -2]}
          rotation-y={-0.1}
        />
        <AnnotatedLink
          link="bit.ly/2VncRT9"
          smType="instagram.com/lucidmonday"
          position={[9.3, 1.85, -2]}
          rotation-y={0.1}
        />
      </group>
      <AnnotatedLink
        link="bit.ly/3fbzLUW"
        smType="https://discord.gg/gg5JQJC"
        position={[14.3, 0.95, -5.24]}
        rotation-y={-0.9}
        rotation-x={-0.25}
        rotation-z={-0.175}
      />
      <AnnotatedLink
        link="bit.ly/3lcKFxq"
        smType="youtube.com/lucidmonday"
        position={[14, 0.9, 0]}
        rotation-y={-0.4}
      />
      <AnnotatedLink
        link="bit.ly/2V7ZmXI"
        smType="twitter.com/lucid_monday"
        position={[8, 0.9, 2]}
        rotation-y={0.9}
      />
    </group>
  );
};

export default RightWall;

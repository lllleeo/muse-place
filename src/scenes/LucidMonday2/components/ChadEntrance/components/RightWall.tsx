import { Text } from "@react-three/drei";
import { Color } from "three";
import SocialButton from "../../../../../themes/components/SocialButton";
import { GroupProps } from "@react-three/fiber";

const FRAME_COLOR = new Color(0xffffff);

function AnnotatedLink(props: { link: string; text?: string } & GroupProps) {
  const { link, text = link.replace("https://", ""), ...restProps } = props;

  const SCALE = 0.4;

  return (
    <group name={`annotatedlink-${link}`} {...restProps}>
      <SocialButton link={link} scale={[SCALE, SCALE, SCALE]} />
      {/* @ts-ignore */}
      <Text
        position-x={SCALE * 0.3}
        fontSize={0.1}
        anchorX="left"
        color="black"
      >
        {text}
      </Text>
    </group>
  );
}

const RightWall = () => {
  return (
    <group
      name="right-wall"
      rotation={[0, -Math.PI / 2, 0]}
      position={[4.3, -0.35, -7.2]}
      scale={[0.7, 0.7, 0.7]}
    >
      <group position={[1.0, -1, 0]}>
        <Text position={[1.5, 0.4, 0]} fontSize={0.2} anchorY="middle">
          Connect with us on Social Media!
        </Text>
        <AnnotatedLink
          link="https://instagram.com/lucidmonday"
          text="@lucidmonday"
          position={[0, 0, 0]}
        />
        <AnnotatedLink
          link="https://twitter.com/lucid_monday"
          text="@lucid_monday"
          position={[0, -0.2, 0]}
        />
        <AnnotatedLink
          link="https://youtube.com/lucidmonday"
          text="LM on YouTube"
          position={[1.0, 0, 0]}
        />
        <AnnotatedLink
          link="https://soundcloud.com/lucidmonday"
          text="LM on Soundcloud"
          position={[1.0175, -0.2, 0]}
        />
        <AnnotatedLink
          link="https://open.spotify.com/user/0m1ewbfl4sfauko9hvrg5qopu?si=tD6RjOJRTdSTGn96XGaLEg"
          text="LM on Spotify"
          position={[2.25, 0, 0]}
        />
        <AnnotatedLink
          link="https://discord.gg/gg5JQJC"
          text="Join us on Discord!"
          position={[2.25, -0.2, 0]}
        />
      </group>
      <group position={[2.5, -1.7, 0.6]} scale={[0.35, 0.35, 0.35]}>
        <Text
          position={[0, 0.2, 0]}
          scale={[3.5, 3.5, 3.5]}
          anchorY="middle"
          maxWidth={3}
          textAlign="left"
          color="black"
        >
          {"This might be cool for music"}
        </Text>
        {/* <Text
          position={[2.3, -0.3, 0]}
          scale={[2.5, 2.5, 2.5]}
          anchorY="middle"
          maxWidth={3}
          anchorX="right"
          color="black"
        >
          @lucidmonday
        </Text> */}
        <Text
          position={[-2.8, -0.3, 0]}
          scale={[2.5, 2.5, 2.5]}
          anchorY="middle"
          maxWidth={3}
          anchorX="left"
          color="black"
        >
          https://soundcloud.com/lucidmonday/sets/lm025
        </Text>
        <mesh position={[0, 0, -0.25 / 2 - 0.001]}>
          <boxBufferGeometry args={[7, 1.5, 0.25]} attach="geometry" />
          <meshStandardMaterial color={FRAME_COLOR} attach="material" />
        </mesh>
      </group>
    </group>
  );
};

export default RightWall;

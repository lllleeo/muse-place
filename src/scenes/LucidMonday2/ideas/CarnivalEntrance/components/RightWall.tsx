import { Text } from "@react-three/drei";
import { Color } from "three";
import SocialButton from "../../../../../themes/components/SocialButton";
import { GroupProps } from "@react-three/fiber";

const FRAME_COLOR = new Color(0xffffff);

function AnnotatedLink(
  props: { link: string; text?: string; smType?: string } & GroupProps
) {
  const {
    link,
    text = link.replace("https://", ""),
    smType,
    ...restProps
  } = props;

  const SCALE = 0.4;

  return (
    <group name={`annotatedlink-${link}`} {...restProps}>
      <SocialButton link={link} smType={smType} scale={[SCALE, SCALE, SCALE]} />
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
      position={[4.0, -0.35, -7.8]}
      scale={[0.7, 0.7, 0.7]}
    >
      <AnnotatedLink
        link="https://bit.ly/37au0Cs"
        smType="facebook.com"
        text=""
        position={[5.7, 2, -6]}
        rotation-y={[Math.PI / 2]}
        scale={10.0}
      />
      <AnnotatedLink
        link="https://bit.ly/3C6WbjY"
        smType="twitch.tv"
        text=""
        position={[5.7, 2, -3]}
        rotation-y={[Math.PI / 2]}
        scale={10.0}
      />
      <AnnotatedLink
        link="https://bit.ly/2VncRT9"
        smType="instagram.com"
        text=""
        position={[5.7, 2, 0]}
        rotation-y={[Math.PI / 2]}
        scale={10.0}
      />
      <AnnotatedLink
        link="https://bit.ly/2V7ZmXI"
        smType="twitter.tv"
        text=""
        position={[5.7, 2, 3]}
        rotation-y={[Math.PI / 2]}
        scale={10.0}
      />
      <AnnotatedLink
        link="https://bit.ly/375CquO"
        smType="youtube.com"
        text=""
        position={[5.7, 2, 6]}
        rotation-y={[Math.PI / 2]}
        scale={10.0}
      />
      <AnnotatedLink
        link="https://bit.ly/3i9RVbg"
        text=""
        position={[16.5, 2, -6]}
        rotation-y={[-Math.PI / 2]}
        scale={10.0}
      />
      <AnnotatedLink
        link="https://bit.ly/3lcKFxq"
        smType="youtube.com"
        text=""
        position={[16.5, 2, -3]}
        rotation-y={[-Math.PI / 2]}
        scale={10.0}
      />
      <AnnotatedLink
        link="https://bit.ly/3zLAsfa"
        smType="soundcloud.com"
        text=""
        position={[16.5, 2, 0]}
        rotation-y={[-Math.PI / 2]}
        scale={10.0}
      />
      <AnnotatedLink
        link="https://spoti.fi/3iiKz5D"
        smType="open.spotify.com"
        text=""
        position={[16.5, 2, 3]}
        rotation-y={[-Math.PI / 2]}
        scale={10.0}
      />
      <AnnotatedLink
        link="https://bit.ly/3fbzLUW"
        smType="discord.com"
        text=""
        position={[16.5, 2, 6]}
        rotation-y={[-Math.PI / 2]}
        scale={10.0}
      />

      <group position={[1.0, -1, 0]}>
        {/*<Text position={[1.5, 0.4, 0]} fontSize={0.2} anchorY="middle">*/}
        {/*  Connect with us on Social Media!*/}
        {/*</Text>*/}
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

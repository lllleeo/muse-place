import { Text } from "@react-three/drei";
import React from "react";
import SocialLinks from "../../components/SocialLinks";
import SocialButton from "../../components/SocialButton";
import Scroll from "../models/Scroll";
import { Floating } from "spacesvr";

type Props = {
  socials: string[];
};

const Tablatures = (props: Props) => {
  const { socials } = props;

  const textStyles: Partial<typeof Text.defaultProps> = {
    fontSize: 0.2,
    color: "#554c41",
    maxWidth: 1.3,
    font: "https://d27rt3a60hh1lx.cloudfront.net/content/alto/ohmightyisis.ttf",
    anchorY: "top",
  };

  return (
    <>
      <group
        position={[-1.34, 2.25, 29.28]}
        rotation={[0, Math.PI / 6, 0]}
        name="tablature-left"
      >
        <group position-y={-0.05}>
          <Text {...textStyles} textAlign="justify">
            Welcome to Alto
          </Text>
          <Text
            {...textStyles}
            fontSize={0.113}
            position-y={-0.31}
            textAlign="justify"
          >
            otherwise known as the music venue of the gods. For thousands of
            years, Alto has been only accessible to immortal beings, but you
            seem to have found us anyway.. At the top of those stairs, you'll be
            the first mortal to ever hear Lucid Monday's latest work.
          </Text>
        </group>
        <group position-y={-1.5}>
          <Text {...textStyles} fontSize={0.125} textAlign="center">
            Follow Lucid Monday
          </Text>
          <group scale={[1.75, 1.75, 1.75]} position-y={-0.28}>
            <SocialLinks socials={socials} />
          </group>
        </group>
      </group>

      <group
        position={[1.93, 2.2, 29.26]}
        rotation={[0, -Math.PI / 6, 0]}
        name="tablature-right"
      >
        <group name="collection" position-y={-0.4}>
          <Floating height={0.05} speed={2}>
            <Scroll
              open={false}
              position={[-0.3, -0.3, 0.2]}
              rotation-z={-Math.PI / 2}
              scale={[0.8, 0.8, 0.8]}
            />
          </Floating>
          <Text
            {...textStyles}
            fontSize={0.25}
            position={[0.3, -0.1, 0]}
            textAlign="right"
          >
            0 / 6
          </Text>
          <Text
            {...textStyles}
            fontSize={0.15}
            position={[0.3, -0.35, 0]}
            textAlign="right"
          >
            collected
          </Text>
        </group>
        <group name="muse-credits" position-y={0.1} position-x={0.05}>
          <Text
            {...textStyles}
            position={[-0.22, -1.65, 0]}
            fontSize={0.11}
            letterSpacing={0.19}
            textAlign="right"
          >
            Created By Muse
          </Text>
          <Text
            {...textStyles}
            position={[-0.22, -1.8, 0]}
            fontSize={0.11}
            letterSpacing={0.19}
            textAlign="right"
          >
            Want Your Own?
          </Text>
          <SocialButton
            link="https://musevr.typeform.com/to/QwGYwJH2"
            position={[0.45, -1.785, 0]}
            scale={[0.6, 0.6, 0.6]}
          />
        </group>
      </group>
    </>
  );
};

export default Tablatures;

import SocialButton from "themes/components/SocialButton";
import { GroupProps } from "react-three-fiber";
import { Text } from "@react-three/drei";
import { Idea } from "./components/Idea";
import { Image } from "spacesvr";
import ColorCylinder from "./components/ColorCylinder";
import SpinningBuilder from "./components/SpinningBuilder";

function AnnotatedLink(props: { link: string; text?: string } & GroupProps) {
  const { link, text = link.replace("https://", ""), ...restProps } = props;

  const SCALE = 0.4;

  return (
    <group name={`annotatedlink-${link}`} {...restProps}>
      <SocialButton link={link} scale={[SCALE, SCALE, SCALE]} />
      {/* @ts-ignore */}
      <Text
        position-x={SCALE * 0.3}
        fontSize={0.06}
        anchorX="left"
        color="black"
      >
        {text}
      </Text>
    </group>
  );
}

export default function Investors() {
  return (
    <group name="muse-deck">
      <group
        name="wall-top"
        position={[2.49, 0.65, 3.25]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          position={[-1.45, 0.35, 0]}
          size={0.6}
          src="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/investors/running-man-left-exit.jpg"
        />
        <group name="connect" position={[-1.65, 0.1, 0]}>
          <AnnotatedLink link="https://instagram.com/musehq" />
          <AnnotatedLink
            link="https://app.slidebean.com/p/pm6sgokwzm/Pitch-Deck-V10-NGF"
            text="Exit to pitch deck"
            position-y={-0.2}
          />
        </group>
      </group>
      <group
        name="wall-bottom"
        position={[-5.47, 0.95, 0.6]}
        rotation-y={Math.PI / 2}
      >
        {/* @ts-ignore */}
        <Text
          font="https://d27rt3a60hh1lx.cloudfront.net/fonts/Quicksand_Bold.otf"
          color="black"
          fontSize={1}
          position-x={-3.43}
        >
          muse
        </Text>
      </group>
      <ColorCylinder position={[-4.6, 0, 7.1]} />
      <group name="idea" position={[-4.6, 0, 7.1]}>
        <Idea position-y={0.5} size={0.75} />
      </group>
      <ColorCylinder position={[-4.6, 0, 1.1]} />
      <group position={[-4.6, 0, 1.1]} name="builder">
        <SpinningBuilder position-y={1.5} />
      </group>
    </group>
  );
}

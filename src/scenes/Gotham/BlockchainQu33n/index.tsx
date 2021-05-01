import { Image, Video } from "spacesvr";
import Placard from "../../../themes/components/Placard";
import SocialButton from "../../../themes/components/SocialButton";
import { GroupProps } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/blockchainqu33n";

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

export default function BlockchainQu33n() {
  return (
    <group name="blockchain-qu33n">
      <group
        name="wall-top"
        position={[2.49, 0.65, 3.25]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          position={[-1.45, 0.35, 0]}
          size={0.6}
          src="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/blockchainqu33n/running-man-left-exit.jpg"
        />
        <group name="connect" position={[-1.65, 0.1, 0]}>
          <AnnotatedLink
            link="https://instagram.com/blockchain_qu33n"
            text="@Blockchain_Qu33n"
          />
          <AnnotatedLink
            link="https://linktr.ee/BlockchainQu33n"
            text="Exit to BlockchainQu33n.com"
            position-y={-0.2}
          />
        </group>
      </group>
      <group
        name="wall-top-right"
        position={[-1.7, 2, 8.1]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/1.JPG`}
          framed
          size={1.5}
          position-y={-0.6}
        />

        {/* @ts-ignore */}
        <Text
          position={[0.05, -1.5, 0]}
          color="black"
          fontSize={0.1}
          maxWidth={1.225}
          anchorY="top"
        >
          Credit: @soulcurryart
        </Text>
      </group>

      <group
        name="wall-top-middle"
        position={[-1.39, 2.07, 0.15]}
        rotation-y={Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/2.jpg`}
          framed
          size={1.5}
          position-y={-0.6}
        />

        {/* @ts-ignore */}
        <Text
          position={[0.05, -1.5, 0]}
          color="black"
          fontSize={0.1}
          maxWidth={1.225}
          anchorY="top"
        >
          Credit: @jahmelr
        </Text>
      </group>

      <group
        name="wall-top-left"
        position={[-1.39, 1.07, 4.1]}
        rotation-y={Math.PI / 2}
      >
        <Video
          src={`${CONTENT_FOLDER}/3.mp4`}
          framed
          size={1.5}
          position-y={0.4}
        />

        {/* @ts-ignore */}
        <Text
          position={[0.03, -0.5, 0]}
          color="black"
          fontSize={0.1}
          maxWidth={1.225}
          anchorY="top"
        >
          Credit: @chadknight
        </Text>
      </group>

      <group
        name="wall-bottom-left"
        position={[-1.39, 2.07, 8.1]}
        rotation-y={Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/4.JPG`}
          framed
          size={1.5}
          position-y={-0.6}
        />
        <Text
          position={[0.02, -1.5, 0]}
          color="black"
          fontSize={0.1}
          maxWidth={1.225}
          anchorY="top"
        >
          {" "}
          Credit: @redditavatars
        </Text>
      </group>

      <group
        name="wall-bottom-middle"
        position={[-1.63, 1.07, 0.15]}
        rotation-y={-Math.PI / 2}
      >
        <Video
          src={`${CONTENT_FOLDER}/5.mp4`}
          framed
          size={1.5}
          position-y={0.4}
        />
        <Text
          position={[0.03, -0.25, 0]}
          color="black"
          fontSize={0.1}
          maxWidth={1.225}
          anchorY="top"
        >
          {" "}
          Credit: @saturn_xsat
        </Text>
      </group>

      <group
        name="wall-bottom-right"
        position={[-1.63, 1.07, 4.125]}
        rotation-y={-Math.PI / 2}
      >
        <Video
          src={`${CONTENT_FOLDER}/6.mp4`}
          framed
          size={1.5}
          position-y={0.4}
        />
        <Text
          position-y={-0.5}
          color="black"
          fontSize={0.1}
          maxWidth={1.225}
          anchorY="top"
        >
          Credit: @whoman___
        </Text>
      </group>
    </group>
  );
}

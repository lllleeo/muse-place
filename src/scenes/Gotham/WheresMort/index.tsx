import { Image, Video, Interactable } from "spacesvr";
import Placard from "../../../themes/components/Placard";
import SocialButton from "../../../themes/components/SocialButton";
import { GroupProps } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/wheresmort";

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

const link = "https://www.muse.place";

export default function WheresMort() {
  return (
    <group name="wheresmort">
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
            link="https://instagram.com/musehq"
            text="@MuseHQ on Instagram"
          />
          <AnnotatedLink
            link="https://www.muse.place"
            text="Get your own 3D Site Now"
            position-y={-0.2}
          />
        </group>
      </group>
      <group
        name="wall-top-right"
        position={[-1.7, 1.7, 8.125]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/mort@spaces.jpg`}
          framed
          size={2.2}
          position-y={-0.6}
        />
        @ts-ignore
        <Text
          position={[0.05, -1.5, 0]}
          color="black"
          fontSize={0.1}
          maxWidth={1.225}
          anchorY="top"
        >
          Mort @ Spaces
        </Text>
      </group>

      <group
        name="wall-top-middle"
        position={[-1.39, 1.7, 0.125]}
        rotation-y={Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/mort@balloonski.jpg`}
          framed
          size={2.2}
          position-y={-0.6}
        />
        @ts-ignore
        <Text
          position={[0.05, -1.5, 0]}
          color="black"
          fontSize={0.1}
          maxWidth={1.225}
          anchorY="top"
        >
          Mort @ Balloonski
        </Text>
        <Interactable
          onClick={() =>
            window.open("https://musevr.typeform.com/to/mVQuoRQ5", "_blank")
          }
        >
          <Image
            src={`${CONTENT_FOLDER}/mort@spaces.jpg`}
            size={0.1}
            position-x={0.4}
            position-y={-0.45}
            position-z={-0.01}
          />
        </Interactable>
      </group>

      <group
        name="wall-top-left"
        position={[-1.39, 0.7, 4.125]}
        rotation-y={Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/mort@artbox.jpg`}
          framed
          size={2.2}
          position-y={0.4}
        />
        @ts-ignore
        <Text
          position={[0.03, -0.5, 0]}
          color="black"
          fontSize={0.1}
          maxWidth={1.225}
          anchorY="top"
        >
          Mort @ Artbox
        </Text>
      </group>

      <group
        name="wall-bottom-left"
        position={[-1.39, 1.7, 8.1]}
        rotation-y={Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/mort@gotham.jpg`}
          framed
          size={2.2}
          position-y={-0.6}
        />
        <Text
          position={[0.02, -1.5, 0]}
          color="black"
          fontSize={0.1}
          maxWidth={1.225}
          anchorY="top"
        >
          Mort @ Gotham
        </Text>
      </group>

      <group
        name="wall-bottom-middle"
        position={[-1.63, 0.7, 0.125]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/mort@kris.jpg`}
          framed
          size={2.2}
          position-y={0.4}
        />
        <Text
          position={[0.03, -0.25, 0]}
          color="black"
          fontSize={0.1}
          maxWidth={1.225}
          anchorY="top"
        >
          Mort @ Kristopher Kites
        </Text>
      </group>

      <group
        name="wall-bottom-right"
        position={[-1.63, 0.7, 4.125]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/mort@alto.jpg`}
          framed
          size={2.2}
          position-y={0.4}
        />
        <Text
          position-y={-0.5}
          color="black"
          fontSize={0.1}
          maxWidth={1.225}
          anchorY="top"
        >
          Mort @ Alto
        </Text>
      </group>
    </group>
  );
}

import { Image } from "spacesvr";
import { Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import SocialButton from "../../../themes/components/SocialButton";

const CONTENT_FOLDER =
  "https://spaces-gallery-assets.s3.us-west-1.amazonaws.com/content/muse.place/artbox";

function AnnotatedLink(
  props: {
    link: string;
    text?: string;
    width?: number;
    xOffset?: number;
  } & GroupProps
) {
  const {
    link,
    text = link.replace("https://", ""),
    width = 0.8,
    xOffset = 0.225,
    ...restProps
  } = props;

  const SCALE = 0.4;

  return (
    <group
      scale={1.25}
      rotation-x={-0.5}
      name={`annotatedlink-${link}`}
      {...restProps}
    >
      <mesh position={[xOffset, 0, -0.05]}>
        <boxBufferGeometry args={[width, 0.25, 0.05]} />
        <meshBasicMaterial color="white" />
      </mesh>
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

export default function Artwork() {
  return (
    <group>
      <Image
        name="lisergia"
        src={`${CONTENT_FOLDER}/LISERGIA.png`}
        position={[0.92, 4.13, -0.62]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="gundam"
        src={`${CONTENT_FOLDER}/GUNDAM.png`}
        position={[-2.07, 5.97, -2.95]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="fratura"
        src={`${CONTENT_FOLDER}/FRATURA+TEMPORAL.png`}
        position={[1.62, 6.92, 0.91]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="spider"
        src={`${CONTENT_FOLDER}/SPIDER.png`}
        position={[-1.1, 9.81, 1.06]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="blackhole"
        src={`${CONTENT_FOLDER}/BLACK+HOLE.png`}
        position={[-3.79, 9.3, -3.83]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="digital"
        src={`${CONTENT_FOLDER}/DIGITAL+DREAMS.jpg`}
        position={[-2.93, 12.59, -0.76]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="notacrossroad"
        src={`${CONTENT_FOLDER}/NOT+A+CROSSROAD.png`}
        position={[1.42, 11, 4.29]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="lostfreq2"
        src={`${CONTENT_FOLDER}/LOST+FREQUENCIES2.png`}
        position={[-0.37, 14.29, 5.77]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="conhece3"
        src={`${CONTENT_FOLDER}/CONHECE3+(1).png`}
        position={[4.26, 12.59, 0.22]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="reallove"
        src={`${CONTENT_FOLDER}/real+love.png`}
        position={[-1.24, 15.3, -1.25]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="frequencies"
        src={`${CONTENT_FOLDER}/LOST+FREQUENCIES.png`}
        position={[0.51, 18.13, -2.96]}
        size={1.75}
        rotation-y={Math.PI / 2}
        framed
      />
      <Image
        name="image"
        src={`${CONTENT_FOLDER}/image.jpg`}
        position={[-0.27, 4.13, -1.82]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="nowibecomemyself"
        src={`${CONTENT_FOLDER}/Now-I-become-myself.jpg`}
        position={[0.3, 6.92, -0.33]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="thefeelsweshared"
        src={`${CONTENT_FOLDER}/The-feelings-we-once-shared.jpg`}
        position={[0.13, 11.04, 3.08]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="justbtwnus"
        src={`${CONTENT_FOLDER}/just-between-the-two-of-us.jpg`}
        position={[-5.01, 9.3, -5.02]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="iseeatoms"
        src={`${CONTENT_FOLDER}/i-see-the-atoms-split-in-2.jpg`}
        position={[-4.12, 12.59, -2.04]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="hidemyface"
        src={`${CONTENT_FOLDER}/hide-my-face.jpg`}
        position={[3.01, 12.59, -0.98]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="scream"
        src={`${CONTENT_FOLDER}/scream2.jpg`}
        position={[-2.51, 15.3, -2.46]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="rainbowafterstorm"
        src={`${CONTENT_FOLDER}/the+rainbow+after+the+storm.jpg`}
        position={[-0.69, 18.13, -4.12]}
        size={1.75}
        rotation-y={Math.PI}
        framed
      />
      <Image
        name="hidemyface"
        src={`${CONTENT_FOLDER}/hide-my-face.jpg`}
        position={[-3.01, 0.88, -0.15]}
        size={1}
        rotation-y={-Math.PI / 2}
        framed
      />
      <Image
        name="sheddingshadows"
        src={`${CONTENT_FOLDER}/My-shadow's-shedding-skin.jpg`}
        position={[-4.65, 5.97, -2.95]}
        size={1.75}
        rotation-y={-Math.PI / 2}
        framed
      />
      <Image
        name="tempestade"
        src={`${CONTENT_FOLDER}/TEMPESTADE.png`}
        position={[-6.2, 9.3, -3.83]}
        size={1.75}
        rotation-y={-Math.PI / 2}
        framed
      />
      <Image
        name="reallove"
        src={`${CONTENT_FOLDER}/real+love.png`}
        position={[-3.5, 9.81, 1.06]}
        size={1.75}
        rotation-y={-Math.PI / 2}
        framed
      />
      <Image
        name="gum"
        src={`${CONTENT_FOLDER}/GUM+(1).png`}
        position={[-2.8, 14.29, 5.77]}
        size={1.75}
        rotation-y={-Math.PI / 2}
        framed
      />
      <group position={[0.32, 1.3, 1.8]} name="bottomText">
        <Text fontSize={0.2} position={[-0.4, 0.85, 0]} name="title">
          Why A Cube?
        </Text>
        <Text maxWidth={2} fontSize={0.12} name="content">
          A cube is pure geometry, the person does not need too much capacity to
          understand its geometry, more over, this simplicity
        </Text>
        <Text fontSize={0.2} position={[0.7, -0.75, 0]} name="artist">
          -FF
        </Text>
      </group>
      <group position={[-3.42, 6, -1.74]} name="2ndText">
        <Text fontSize={0.2} position={[-0.35, 0.9, 0]} name="title">
          Fernando Frank
        </Text>
        <Text
          maxWidth={2}
          position={[-0.025, -0.1, 0]}
          fontSize={0.12}
          name="content"
        >
          The client specified that the environment could change depending on
          the specifications of the artists, so there is no predominant
          direction to look at, except for the art. That is why the art is
          placed at the focal point of the viewer. Art needs a previous
          ascension to be able to reach it because it is above us, like a
          superior thought, so why not make it a continuous ascension? This is
          the reason for the helix.
        </Text>
      </group>
      <group position={[-2.27, 9.7, 2.24]} name="3rdText">
        <Text fontSize={0.2} position={[-0.35, 0.85, 0]} name="title">
          Fernando Frank
        </Text>
        <Text
          maxWidth={2}
          position={[-0.025, -0.1, 0]}
          fontSize={0.12}
          name="content"
        >
          This element already used before in Guggenheim is a resource that
          allows us towards a higher thought. Another advantage of the helix is
          that it allows us to have a directional path easy to follow for the
          viewer/art buyer who can admire the view at the end and/or buy a work
          at the top after having seen the whole gallery.
        </Text>
      </group>
      <group position={[0.31, 10.93, 5.47]} name="4thText">
        <Text fontSize={0.2} position={[-0.675, 0.85, 0]} name="title">
          Femzor
        </Text>
        <Text
          maxWidth={2}
          position={[0, -0.1, 0]}
          fontSize={0.12}
          name="content"
        >
          Femzor is a 22 year old Brazilian multimedia artist, based in São
          Paulo, mainly focused on digital art. This particular exposition of
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          illustrations is called the "rainbow collection" and resolves around
          the heavy use of colors and virtual effects to represent the deepest
          individual and collective emotions.
        </Text>
        <AnnotatedLink
          link="https://twitter.com/femzor?s=20"
          text="@femzor"
          position={[1.14, -0.26, 3.03]}
          name="femzorTwitter"
        />
      </group>
      <group position={[-1.55, 14.24, 6.9]} name="5thText">
        <Text fontSize={0.2} position={[-0.825, 0.9, 0]} name="title">
          Djak
        </Text>
        <Text
          maxWidth={2}
          position={[0, -0.1, 0]}
          fontSize={0.09}
          name="content"
        >
          DIEANOTHERNIGHT is a sole proprietorship founded by João Victor in
          order to solve visual problems such as branding, creative direction &
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          motion, etc. The main focus is to take a client's vision and turn it
          into something vivid & clear. He started school in 2018 majoring in
          digital design, and continued to work with brands, artists, personal
          collectors & tight niche collectives throughout his schooling,
          graduating in 2021. João started designing back in 2013 being present
          in the gaming community and slowly breaking out into the underground
          music scene in early 2016. Entering the underground art scene at a
          young age, João has created a network of incredibly talented
          international creatives who share similar aspirations.
        </Text>
        <AnnotatedLink
          link="https://twitter.com/almightyDJAK?s=20"
          text="@almightyDJAK"
          position={[-1.11, -4.23, 1.28]}
          width={1.1}
          xOffset={0.385}
          name="djakTwitter"
        />
      </group>
    </group>
  );
}

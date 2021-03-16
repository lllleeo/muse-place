import { Image, Video } from "spacesvr";
import Placard from "../../../themes/components/Placard";
import SocialButton from "../../../themes/components/SocialButton";
import { GroupProps } from "react-three-fiber";
import { Text } from "@react-three/drei";

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/jasonmatias";

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

export default function JasonMatias() {
  return (
    <group name="jason-matias">
      <group
        name="wall-top"
        position={[2.49, 1.07, 4]}
        rotation-y={-Math.PI / 2}
      >
        <group name="connect" position={[-2.65, -0.1, 0]}>
          {/* @ts-ignore */}
          <Text
            fontSize={0.1}
            color="black"
            anchorX="left"
            position={[-0.2, 0.2, 0]}
          >
            Connect
          </Text>
          <AnnotatedLink link="https://instagram.com/realjasonmatias" />
          <AnnotatedLink
            link="jasonmatias.com"
            text="Exit to JasonMatias.com"
            position-y={-0.2}
          />
        </group>
        <Image
          src={`${CONTENT_FOLDER}/WanderingStar.jpg`}
          framed
          size={2}
          position-x={0.8}
        />
      </group>
      <group
        name="wall-top-left"
        position={[-1.39, 1.07, 0.62]}
        rotation-y={Math.PI / 2}
      >
        <Image src={`${CONTENT_FOLDER}/Solitude.jpg`} framed />
        {/*<Placard title="Solitude">*/}
        {/*  There is something extremely calming about boats to me. At a lake*/}
        {/*  shrouded in fog in New York I really felt as though the world was only*/}
        {/*  as large as openings between the mist. Like covering your head with*/}
        {/*  the blankets and willing that dream back. The mist was my blanket. It*/}
        {/*  felt invigorating when I filled my chest with it. While waiting for*/}
        {/*  the small boat to turn in the current I imagined that the condensed*/}
        {/*  air I exhaled on the cool morning was adding to the morning’s misty*/}
        {/*  blanket; I was a part of the magic. That was just Nature allowing me*/}
        {/*    to play along the way she allows all of us from time to time, if we*/}
        {/*    pay attention to her.*/}
        {/*</Placard>*/}
        <Image
          src={`${CONTENT_FOLDER}/CrescendoAndGale.jpg`}
          framed
          position-x={1}
        />
      </group>
      <group
        name="wall-top-middle"
        position={[-1.39, 1.07, 4.1]}
        rotation-y={Math.PI / 2}
      >
        <Video
          src={`${CONTENT_FOLDER}/4.mp4`}
          framed
          size={1.5}
          position-y={0.4}
        />
        <Image
          src={`${CONTENT_FOLDER}/Portrait.jpg`}
          size={0.4}
          position={[-0.7, -0.31, 0]}
        />
        {/* @ts-ignore */}
        <Text
          position={[0.2, -0.1, 0]}
          color="black"
          fontSize={0.04}
          maxWidth={1.35}
          anchorY="top"
        >
          Jason Matias is an author and contemporary photographer who lives and
          works in the Greater Seattle Area. A New York native, his photographs
          of nature include locations around the globe. More recently in his
          career his creative focus expanded work with models. No matter the
          subject, Jason’s work focuses on the ideas of isolation and
          introspection.{"\n\n"}Jason Matias’ career in photography officially
          began in 2012 however he began exploring photography as a medium of
          expression during his service in the United States Air Force in 2006.
          His experience and artist direction eventually culminated in two
          distant veins of work, Comfortable Isolation and the Aria.{"\n\n"}
          Jason’s artwork has been shown in exhibitions in the US including Art
          Basel Week and Art Expo New York and in private shows around the
          world. His photography has been featured in National Geographic,
          Weather Channel, and TED, among others. In 2020, Jason published his
          first book, NakedThoughts.
        </Text>
      </group>
      <group
        name="wall-top-right"
        position={[-1.39, 1.07, 8.1]}
        rotation-y={Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/ASunStory.jpg`}
          framed
          size={1.5}
          position-y={0.6}
        />
        <Image src={`${CONTENT_FOLDER}/EdgeOfSolace.jpg`} framed size={1.5} />
        <Image
          src={`${CONTENT_FOLDER}/AvendasoraLeaf.jpg`}
          framed
          size={1.5}
          position-y={-0.6}
        />
      </group>
      <group
        name="wall-bottom-left"
        position={[-1.63, 1.07, 0.15]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/IceCaveWithAView.jpg`}
          framed
          size={1.5}
        />
      </group>
      <group
        name="wall-bottom-middle"
        position={[-1.63, 1.07, 4.125]}
        rotation-y={-Math.PI / 2}
      >
        <Image src={`${CONTENT_FOLDER}/TreeOfFire.jpg`} framed size={1.5} />
      </group>
      <group
        name="wall-bottom-right"
        position={[-1.63, 1.07, 8.1]}
        rotation-y={-Math.PI / 2}
      >
        <Image src={`${CONTENT_FOLDER}/FirstLight.jpg`} framed size={1.5} />
      </group>
    </group>
  );
}

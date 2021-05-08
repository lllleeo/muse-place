import { Image, Video } from "spacesvr";
import SocialButton from "themes/components/SocialButton";
import { GroupProps } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import Label from "themes/components/Label";
import Info from "./components/Info";
import TitleCard from "./components/TitleCard";

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/jasonmatias";
const EMAIL = "youremail@gmail.com";
const CONTACT = "mailto:youremail@gmail.com?";
const SITE = "https://jasonmatias.comw";

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
        position={[2.49, 0.9, 4]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/FTLL.jpg`}
          framed
          frameWidth={0.75}
          size={1.2}
          position-x={-6.5}
        />
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
            link="https://jasonmatias.com"
            text="Exit to JasonMatias.com"
            position-y={-0.2}
          />
        </group>
        <Image
          src={`${CONTENT_FOLDER}/WanderingStar.jpg`}
          framed
          frameWidth={0.75}
          size={2}
          position-x={0.2}
        />
        <TitleCard
          position={[1.7, -0.3, 0.2]}
          rotation-x={-0.5}
          title="Wandering Star"
          contactUrl={CONTACT}
          visitUrl={SITE}
        />
        {/*<Info*/}
        {/*  position={[1.8, -0.3, 0.1]}*/}
        {/*  rotation={[0, 0, 0]}*/}
        {/*  email={EMAIL}*/}
        {/*  subject="subject"*/}
        {/*  body=""*/}
        {/*  title="Wandering Star"*/}
        {/*  fontSize={0.55}*/}
        {/*  textY={0.25}*/}
        {/*>*/}
        {/*  We turn ourselves into solitary objects hurtling through a space*/}
        {/*  widened by the perception of our isolation. All the time thinking*/}
        {/*  ourselves dull and cold and unseen while the universe observes us in*/}
        {/*  awe of the spectacle we continue to be. The more intimately I share*/}
        {/*  the traumas and trials of my past the more I discover how common some*/}
        {/*  of the most trying moments and experiences of my life have been. Where*/}
        {/*  I expected to be an outcast I discovered a community of souls drifting*/}
        {/*  past each other like dark stars in the night. A community of people*/}
        {/*  who are so focused on hiding their pains in fear that their light*/}
        {/*  might be too ugly that they hide their brilliance and miss the*/}
        {/*  brightness in others.*/}
        {/*</Info>*/}
        <Image
          src={`${CONTENT_FOLDER}/LanikaiSilence.jpg`}
          framed
          frameWidth={0.75}
          size={1.6}
          position-x={6.5}
        />
      </group>
      <group
        name="wall-top-left"
        position={[-1.25, 0.9, 0.62]}
        rotation-y={Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/Solitude.jpg`}
          framed
          frameWidth={0.75}
          position={[-0.275, 0, -0.125]}
        />
        <TitleCard
          position={[-0.27, -0.65, 0.075]}
          rotation-x={-0.5}
          title="Solitude"
          contactUrl={CONTACT}
          visitUrl={SITE}
        />
        {/*<Info*/}
        {/*  position={[-0.27, -0.65, 0.075]}*/}
        {/*  rotation={[-0.5, 0, 0]}*/}
        {/*  email={EMAIL}*/}
        {/*  subject="subject"*/}
        {/*  body=""*/}
        {/*  title="Solitude"*/}
        {/*  fontSize={0.55}*/}
        {/*  textY={0.25}*/}
        {/*>*/}
        {/*  There is something extremely calming about boats to me. At a lake*/}
        {/*  shrouded in fog in New York I really felt as though the world was only*/}
        {/*  as large as openings between the mist. Like covering your head with*/}
        {/*  the blankets and willing that dream back. The mist was my blanket. It*/}
        {/*  felt invigorating when I filled my chest with it. While waiting for*/}
        {/*  the small boat to turn in the current I imagined that the condensed*/}
        {/*  air I exhaled on the cool morning was adding to the morning’s misty*/}
        {/*  blanket; I was a part of the magic. That was just Nature allowing me*/}
        {/*  to play along the way she allows all of us from time to time, if we*/}
        {/*  pay attention to her.*/}
        {/*</Info>*/}
        <Image
          src={`${CONTENT_FOLDER}/CrescendoAndGale.jpg`}
          framed
          frameWidth={0.75}
          position={[1.25, 0, -0.125]}
        />
        <TitleCard
          position={[1.25, -0.65, 0.075]}
          rotation-x={-0.5}
          width={0.8}
          title="Crescendo And Gale"
          contactUrl={CONTACT}
          visitUrl={SITE}
        />
        {/*<Info*/}
        {/*  position={[0.475, -0.1, 0.1]}*/}
        {/*  rotation={[0, 0, 0]}*/}
        {/*  email={EMAIL}*/}
        {/*  subject="subject"*/}
        {/*  body=""*/}
        {/*  title="Crescendo And Gale"*/}
        {/*  fontSize={0.55}*/}
        {/*  textY={2.25}*/}
        {/*  textX={0.75}*/}
        {/*  contactPos={[3, 21, 0]}*/}
        {/*  boxWidth={-15}*/}
        {/*  boxHeight={35}*/}
        {/*>*/}
        {/*  This is a place where you can send your visions into the blind world.*/}
        {/*  {"\n"}*/}
        {/*  The way a gale can make the world quiet.*/}
        {/*  {"\n"}*/}
        {/*  Let the noise between your ears be deafening.*/}
        {/*  {"\n"}*/}
        {/*  The way a crescendo from a ninety piece orchestra bursts into silence.*/}
        {/*  {"\n"}*/}
        {/*  Let the heart be like the stillness of a mountain.*/}
        {/*  {"\n"}*/}
        {/*  The way a bullet in a barrel screams into freedom.*/}
        {/*  {"\n"}*/}
        {/*  Let the thought of an infinite-now be like a mind exploding into*/}
        {/*  awareness.*/}
        {/*  {"\n"}*/}
        {/*  You can let the world wash over you and send your visions on the wild*/}
        {/*  and free wind.*/}
        {/*  {"\n\n"}I photographed this tree almost one year ago in a field near a*/}
        {/*  friend's place. My tripod was set so low that I needed to lay on the*/}
        {/*  soft ground in order to manipulate the camera's controls. Why the long*/}
        {/*  wait for adding it to my portfolio? Despite the edit having been*/}
        {/*  completed, the piece remained unfinished. Sometimes when I photograph*/}
        {/*  a scene I know it is precious but I don’t know why, yet. The Why is*/}
        {/*  often what takes the most time. What held me in a holding pattern is*/}
        {/*  that I didn't know the tree's story. Rather, I didn't know how to*/}
        {/*  share the story that I wanted to share though the lens of this tree.*/}
        {/*  It wasn't until the end of last year that I connected this rendering*/}
        {/*  of black and white pixels with a piece of prose that I had written*/}
        {/*  years ago and continued to tweak over time. In the weird way a*/}
        {/*  lemniscate connects to itself at it's beginning, then the beginning*/}
        {/*  disappears entirely this evolving piece of writing didn't have a title*/}
        {/*  until it was united with the photograph. In a way, both pieces have*/}
        {/*  grown with me as I’ve developed as an artist and writer.*/}
        {/*</Info>*/}
      </group>
      <group
        name="wall-top-middle"
        position={[-1.39, 1.07, 4.1]}
        rotation-y={Math.PI / 2}
      >
        <Video
          src={`${CONTENT_FOLDER}/4.mp4`}
          framed
          frameWidth={0.75}
          size={1.5}
          position-y={0.4}
        />
        <Image
          src={`${CONTENT_FOLDER}/Portrait.jpg`}
          size={0.4}
          position={[-0.625, -0.31, 0]}
        />
        {/* @ts-ignore */}
        <Text
          position={[0.18, -0.11, 0]}
          color="black"
          fontSize={0.0375}
          maxWidth={1.225}
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
        <group position-y={0.5} name="asunstory">
          <Image
            src={`${CONTENT_FOLDER}/ASunStory.jpg`}
            framed
            frameWidth={0.75}
            size={1.25}
            position-x={-0.35}
          />
          <TitleCard
            title="A Sun Story"
            contactUrl="https://google.com"
            visitUrl="https://jasonmatias.com"
            position-x={0.745}
          />
        </group>
        <group name="edgeofsolace" position-y={-0.05}>
          <Image
            src={`${CONTENT_FOLDER}/EdgeOfSolace.jpg`}
            framed
            frameWidth={0.75}
            size={1.25}
            position-x={0.35}
          />
          <TitleCard
            title="Edge Of Solace"
            contactUrl="https://google.com"
            visitUrl="https://jasonmatias.com"
            position-x={-0.7}
          />
        </group>
        <group position-y={-0.6} name="avenadoraleaf">
          <Image
            src={`${CONTENT_FOLDER}/AvendasoraLeaf.jpg`}
            framed
            frameWidth={0.75}
            size={1.25}
            position-x={-0.35}
          />
          <TitleCard
            title="Avensadora Leaf"
            contactUrl="https://google.com"
            visitUrl="https://jasonmatias.com"
            position-x={0.7}
          />
        </group>
      </group>
      <group
        name="wall-bottom-left"
        position={[-1.63, 0.9, 0.15]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/IceCaveWithAView.jpg`}
          framed
          frameWidth={0.75}
          size={1.5}
          position-x={-0.05}
        />
        <TitleCard
          position={[0.3, -0.65, 0.1]}
          rotation-x={-0.5}
          width={0.8}
          title="Ice Cave With A View"
          contactUrl={CONTACT}
          visitUrl={SITE}
        />
        {/*<Info*/}
        {/*  position={[0.3, -0.65, 0.1]}*/}
        {/*  rotation={[-0.5, 0, 0]}*/}
        {/*  email={EMAIL}*/}
        {/*  subject="subject"*/}
        {/*  body=""*/}
        {/*  title="Ice Cave With A View"*/}
        {/*  fontSize={0.55}*/}
        {/*  textY={0.3}*/}
        {/*  textX={0.25}*/}
        {/*  boxWidth={-5}*/}
        {/*  boxHeight={5}*/}
        {/*  contactPos={[10, 0, 0]}*/}
        {/*>*/}
        {/*  I spent about an hour in the ice cave with my friend and my dog. At*/}
        {/*  the back of the cave is a waterfall with a skylight that remain among*/}
        {/*  the most surreal experiences of my life. As I was leaving I saw the*/}
        {/*  sky softening and the pink hues on lips of the clouds. I made it about*/}
        {/*  as far as the trees before turning back toward the cave. I had that*/}
        {/*  feeling that this was going to be special. So, I waited and counted,*/}
        {/*  with trepidation, the cave kisses dropping on me and my camera. Note***/}
        {/*  On December 27th, a day after I was here, an avalanche occurred in*/}
        {/*  this cave. Won Gold in International Pano Awards Published in National*/}
        {/*  Geographic Online and National Geographic Yourshot Finalist It's*/}
        {/*  Amazing Out There, The Weather Channel*/}
        {/*</Info>*/}
      </group>
      <group
        name="wall-bottom-middle"
        position={[-1.63, 0.9, 4.125]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/TreeOfFire.jpg`}
          framed
          frameWidth={0.75}
          size={1.5}
          position-x={-0.05}
        />
        <TitleCard
          position={[0.55, -0.65, 0.1]}
          rotation-x={-0.5}
          title="Tree of Fire"
          contactUrl={CONTACT}
          visitUrl={SITE}
        />
        {/*<Info*/}
        {/*  position={[0.55, -0.65, 0.1]}*/}
        {/*  rotation={[-0.5, 0, 0]}*/}
        {/*  email={EMAIL}*/}
        {/*  subject="subject"*/}
        {/*  body=""*/}
        {/*  title="Tree Of Fire"*/}
        {/*  fontSize={0.55}*/}
        {/*  textY={0.25}*/}
        {/*  textX={0.25}*/}
        {/*  boxWidth={-5}*/}
        {/*  contactPos={[10, 0, 0]}*/}
        {/*>*/}
        {/*  Tucked away in the back of a Kubota Japanese Garden, the “Tree of*/}
        {/*  Fire” was difficult to find. I found it as the sun set below the*/}
        {/*  trees. Ambient light seemed to fall on the leaves like dust from a*/}
        {/*  Disney movie. I was inspired by how the tree knew just how far to grow*/}
        {/*  to kiss the pond’s surface just so. I chose this composition to show*/}
        {/*  the balance the Tree of Fire has achieved with its environment.*/}
        {/*</Info>*/}
      </group>
      <group
        name="wall-bottom-right"
        position={[-1.63, 0.9, 8.1]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/FirstLightBW.jpg`}
          framed
          frameWidth={0.75}
          size={1.5}
          position-x={-0.05}
        />
        <TitleCard
          position={[0.55, -0.55, 0.1]}
          rotation-x={-0.5}
          title="First Light"
          contactUrl={CONTACT}
          visitUrl={SITE}
        />
        {/*<Info*/}
        {/*  position={[0.55, -0.65, 0.1]}*/}
        {/*  rotation={[-0.5, 0, 0]}*/}
        {/*  email={EMAIL}*/}
        {/*  subject="subject"*/}
        {/*  body=""*/}
        {/*  title="First Light"*/}
        {/*  fontSize={0.55}*/}
        {/*  textY={0.3}*/}
        {/*  textX={0.25}*/}
        {/*  boxWidth={-5}*/}
        {/*  boxHeight={5}*/}
        {/*  contactPos={[10, 0, 0]}*/}
        {/*>*/}
        {/*  After a full 36 hours awake through New Years night at Rialto Beach I*/}
        {/*  was ready for sunrise light. Ansel Adams said, "You don't take a great*/}
        {/*  photograph, you make one." I like to take it one step further, "You*/}
        {/*  don't make a great photograph, you create one." Standing a top a*/}
        {/*  gigantic fallen, 10’ off the ground and safe from the high tide, I*/}
        {/*  waited for more than than an hour between captures for the sun’s rays*/}
        {/*  to eclipse the wooded foot hills behind me and kiss this lonely tree.*/}
        {/*  I was freezing and constantly looking back at my camp fire smoldering*/}
        {/*  50 yards away but a well laid plan is worth the wait. This monolith or*/}
        {/*  seastack, along with the tree, fell in the heavy winter storms of*/}
        {/*  early 2016.*/}
        {/*</Info>*/}
      </group>
      <group
        name="wall-bottom"
        position={[-5.47, 0.9, 0.6]}
        rotation-y={Math.PI / 2}
      >
        <group position-y={-0.2} scale={[0.8, 0.8, 0.8]} name="skyraider">
          <Label
            text="Douglas EA-F1 Skyraider"
            size={0.65}
            position={[3.18, -0.56, 0.07]}
          />
          <Image
            src={`${CONTENT_FOLDER}/Skyraider.jpg`}
            framed
            frameWidth={0.75}
            size={1}
            position={[2.68, 0, 0]}
          />
          <Label
            text="Beechcraft Expeditor"
            size={0.65}
            position={[0.79, -0.56, 0.07]}
          />
          <Image
            src={`${CONTENT_FOLDER}/Expeditor.jpg`}
            framed
            frameWidth={0.75}
            size={1.3}
            position={[1.5, 0, 0]}
          />
          <Image
            src={`${CONTENT_FOLDER}/Superfortress.jpg`}
            framed
            frameWidth={0.75}
            size={2.2}
            position={[1.95, 1.025, 0]}
          />
        </group>
        <TitleCard
          position={[0.15, 0, 0.1]}
          rotation-x={0}
          title="Skyraider Collection"
          width={0.8}
          contactUrl={CONTACT}
          visitUrl={SITE}
        />
        {/*<Info*/}
        {/*  position={[0.15, 0, 0.1]}*/}
        {/*  rotation={[0, 0, 0]}*/}
        {/*  email={EMAIL}*/}
        {/*  subject="subject"*/}
        {/*  body=""*/}
        {/*  title="Skyraider Collection"*/}
        {/*  fontSize={0.55}*/}
        {/*  textY={2}*/}
        {/*  textX={0.25}*/}
        {/*  boxWidth={-5}*/}
        {/*  boxHeight={35}*/}
        {/*  contactPos={[10, 0, 0]}*/}
        {/*>*/}
        {/*  I always knew I was going to join the military. I'm a sixth generation*/}
        {/*  first son and all my fathers were in the military. No one ever said I*/}
        {/*  had to join, but I knew it would happen. As a child, if I was lucky*/}
        {/*  enough to get a window seat on long drives I'd stick a Sprite bottle*/}
        {/*  between my legs and pretend I were a pilot while I stared out the*/}
        {/*  window at the sky. The inside of the car would become my cockpit, the*/}
        {/*  bottle my control stick and I'd fly my fighter jet over the trees and*/}
        {/*  between cars.*/}
        {/*  {"\n\n"}*/}
        {/*  Instead of pilot or flight crew I ended up building and maintaining*/}
        {/*  the bombs and missiles that defend our country. I still got to work*/}
        {/*  around fighters and bombers I imagined as a kid and the wonder still*/}
        {/*  captivates me. Today, I can't afford to let my imagination venture so*/}
        {/*  far afield while I drive.Like all of my work, the collection is a*/}
        {/*  combination of what I saw there and what I imagined afterward. My love*/}
        {/*  for aircraft and my love for big skies are combined here to create the*/}
        {/*  three works in the Skyward collection.*/}
        {/*  {"\n\n"}*/}
        {/*  The Skyward collection is captured with the legendary Mamiya 645*/}
        {/*  Medium Format camera system and are available in incredible detail and*/}
        {/*  size. Skyward: Bomber is a panoramic combination of 6 individual MF*/}
        {/*  images, panned from left to right. As the B-50s began to be replaced*/}
        {/*  by other types of bombers they were modified for use as aerial*/}
        {/*  refueling tankers by the Tactical Air Command. The first modifications*/}
        {/*  involved removing all armament and installing extra fuel tanks in the*/}
        {/*  fuselage and under the wings.*/}
        {/*</Info>*/}
        <group position-x={-2.56}>
          <Image
            framed
            frameWidth={0.75}
            size={2}
            src={`${CONTENT_FOLDER}/HawaiiWave.jpg`}
            position-x={-2.4}
          />
          <Image
            framed
            frameWidth={0.75}
            size={2}
            src={`${CONTENT_FOLDER}/MolokaiPano.jpg`}
            position-x={0.4}
          />
        </group>
        <Image
          src={`${CONTENT_FOLDER}/LastLight.jpg`}
          framed
          frameWidth={0.75}
          size={2}
          position={[-9.5, 0, 0]}
        />
      </group>
      <Image
        name="outside-edgefsolace"
        src={`${CONTENT_FOLDER}/EdgeOfSolace.jpg`}
        framed
        frameWidth={0.75}
        size={10}
        rotation-y={Math.PI}
        position={[-1.4, 1.5, 19]}
      />
      <Image
        name="outside-eddie"
        src={`${CONTENT_FOLDER}/EddieWave.jpg`}
        framed
        frameWidth={0.75}
        size={12}
        rotation-y={0}
        position={[-1.4, 1.5, -12]}
      />
    </group>
  );
}

import { Image, Video } from "spacesvr";
import Slideshow from "themes/components/Slideshow";
import { Text } from "@react-three/drei";

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/violetsummer";

const links = [
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
];

const captions = [
  "Highground - Coolground!",
  "It just keeps getting better!",
  "Juggernaut - Let them feel the cool of your Blade!",
  "Supports return to the fight!",
  "Teamwork makes the Dreamwork 1 - Jug.mp4",
  "Teamwork makes the Dreamwork 2 - Jug",
  "Teamwork makes the Dreamwork 3 - Invoker",
];

const links2 = [
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
];

const captions2 = [
  "Highground - Coolground!",
  "It just keeps getting better!",
  "Juggernaut - Let them feel the cool of your Blade!",
  "Supports return to the fight!",
  "Teamwork makes the Dreamwork 1 - Jug.mp4",
  "Teamwork makes the Dreamwork 2 - Jug",
  "Teamwork makes the Dreamwork 3 - Invoker",
];

const links3 = [
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
  `${CONTENT_FOLDER}/1.jpg`,
];

const captions3 = [
  "Highground - Coolground!",
  "It just keeps getting better!",
  "Juggernaut - Let them feel the cool of your Blade!",
  "Supports return to the fight!",
  "Teamwork makes the Dreamwork 1 - Jug.mp4",
  "Teamwork makes the Dreamwork 2 - Jug",
  "Teamwork makes the Dreamwork 3 - Invoker",
];

export default function VSummer() {
  return (
    <group>
      <group
        name="left-pane-front"
        position={[-2.0, 1.5, -2.0]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/1.jpg`}
          framed
          size={0.7}
          position-x={1}
          position-y={0.1}
        />
      </group>
      <group
        name="left-pane-back"
        position={[-1.05, 1.07, -2.0]}
        rotation-y={Math.PI / 2}
      >
        <Slideshow
          links={links}
          captions={captions}
          size={1.0}
          position={[-1.05, 0.13, 0]}
        />
      </group>
      <group
        name="middle-block-north"
        position={[-1.95, 0.9, 3.325]}
        rotation-y={-Math.PI / 2}
      >
        {/* @ts-ignore */}
        <Slideshow
          links={links2}
          captions={captions2}
          size={1.0}
          position={[0.59, 0.13, 0.06]}
        />
      </group>
      <group
        name="middle-block-south"
        position={[-1.73, 0.905, 4.575]}
        rotation-y={Math.PI / 2}
      >
        {/* @ts-ignore */}
        <Image
          src={`${CONTENT_FOLDER}/1.jpg`}
          position={[0.23, 0.7, 0]}
          size={0.7}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/1.jpg`}
          position={[1.02, 0.7, 0]}
          size={0.7}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/1.jpg`}
          position={[0.23, -0.4, 0]}
          size={0.7}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/1.jpg`}
          position={[1.02, -0.4, 0]}
          size={0.7}
          framed
        />
      </group>
      <group
        name="middle-block-west"
        position={[-1.085, 0.385, 2.85]}
        rotation-y={Math.PI}
      >
        {/* @ts-ignore */}
        <Image
          src={`${CONTENT_FOLDER}/1.jpg`}
          position={[0.2, 0.705, 0]}
          size={0.7}
          framed
        />
      </group>
      <group
        name="right-pane-front"
        position={[-1.38, 0.95, 8.15]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/1.jpg`}
          framed
          size={1.5}
          position-x={0.6}
          position-y={0.1}
        />
      </group>
      <group
        name="right-pane-back"
        position={[-1.28, 1.07, 9.34]}
        rotation-y={Math.PI / 2}
      >
        <Slideshow
          links={links3}
          captions={captions3}
          size={1.0}
          position={[0.59, 0.13, 0.06]}
        />
      </group>
      <group
        name="right-block-east"
        position={[-2.08, 0.425, 9.83]}
        rotation-y={0}
      >
        {/* @ts-ignore */}
        <Image
          src={`${CONTENT_FOLDER}/1.jpg`}
          position={[0.2, 0.705, 0]}
          size={0.7}
          framed
        />
      </group>
    </group>
  );
}

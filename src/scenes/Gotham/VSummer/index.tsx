import { Image, Video } from "spacesvr";
import Slideshow from "themes/components/Slideshow";
import { Text } from "@react-three/drei";

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/violetsummer";

const links = [`${CONTENT_FOLDER}/vsz11.jpg`, `${CONTENT_FOLDER}/vsz115.jpg`];

const captions = ["", ""];

const links2 = [
  `${CONTENT_FOLDER}/vsz1162.jpg`,
  `${CONTENT_FOLDER}/vsz1164.jpg`,
  `${CONTENT_FOLDER}/vsz1165.jpg`,
  `${CONTENT_FOLDER}/vsz1166.jpg`,
  `${CONTENT_FOLDER}/vsz1167.jpg`,
];

const captions2 = ["", "", "", "", ""];

const links3 = [
  `${CONTENT_FOLDER}/vsz1110.jpg`,
  `${CONTENT_FOLDER}/vsz1112.jpg`,
  `${CONTENT_FOLDER}/vsz1126.jpg`,
  `${CONTENT_FOLDER}/vsz1147.jpg`,
];

const captions3 = ["", "", "", ""];

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
          size={1.5}
          position={[-1.05, -0.02, 0]}
          textColor="black"
          darkArrow={true}
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
          size={1.5}
          position={[0.59, 0.1, 0.06]}
          textColor="black"
          darkArrow={true}
        />
      </group>
      <group
        name="middle-block-south"
        position={[-1.73, 0.465, 4.225]}
        rotation-y={Math.PI / 2}
      >
        {/* @ts-ignore */}
        <Image
          src={`${CONTENT_FOLDER}/vsz1197.jpg`}
          position={[0.23, 0.6, 0]}
          size={2.25}
          framed
        />
        {/* @ts-ignore */}
      </group>
      <group
        name="middle-block-west"
        position={[-1.085, 0.385, 2.85]}
        rotation-y={Math.PI}
      >
        {/* @ts-ignore */}
        <Image
          src={`${CONTENT_FOLDER}/2.jpg`}
          position={[0.2, 0.705, 0]}
          size={0.7}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/vsz1198_720.jpg`}
          rotation-y={Math.PI}
          position={[0.2, 0.705, -0.3]}
          size={1.5}
          framed
        />
      </group>
      <group
        name="right-pane-front"
        position={[-1.38, 0.95, 8.15]}
        rotation-y={-Math.PI / 2}
      >
        <Video
          src={`${CONTENT_FOLDER}/LaPrairie.mp4`}
          framed
          size={2.2}
          position-x={0.6}
          position-y={0.2}
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
          size={1.5}
          position={[0.59, 0.13, 0.06]}
          textColor="black"
          darkArrow={true}
        />
      </group>
      <group
        name="right-block-east"
        position={[-2.08, 0.425, 9.83]}
        rotation-y={0}
      >
        {/* @ts-ignore */}
        <Image
          src={`${CONTENT_FOLDER}/5.jpg`}
          position={[0.2, 0.705, 0]}
          size={0.7}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/vsz1138.jpg`}
          rotation-y={Math.PI}
          position={[0.2, 0.705, -0.3]}
          size={1.6}
          framed
        />
      </group>
      <group
        name="front-wall-upper-right"
        position={[-5.61, 1.645, 0.83]}
        rotation-z={-0.75}
      >
        <Image
          src={`${CONTENT_FOLDER}/vsz0001.png`}
          rotation-y={Math.PI / 2}
          position={[0.2, 0.705, -0.3]}
          size={2.3}
          framed
        />
      </group>
      <group
        name="front-wall-upper-left"
        position={[-5.61, 1.645, 0.83]}
        rotation-z={-0.75}
      >
        <Image
          src={`${CONTENT_FOLDER}/vsz0002.jpg`}
          rotation-y={Math.PI / 2}
          position={[0.2, 0.705, 7.24]}
          size={2.3}
          framed
        />
      </group>
      <group
        name="front-wall-bottom-left"
        position={[-4.62, -0.225, 0.88]}
        rotation-z={0.75}
      >
        <Image
          src={`${CONTENT_FOLDER}/vsz0003.jpg`}
          rotation-y={Math.PI / 2}
          position={[0.2, 0.705, 7.24]}
          size={1.7}
          framed
        />
      </group>
      <group
        name="back-wall-upper"
        position={[2.25, 1.395, 11.5]}
        rotation={[-3.15, 0, -3.43]}
      >
        <Video
          src={`${CONTENT_FOLDER}/compost.mp4`}
          rotation-y={Math.PI / 2}
          position={[0.2, 0.705, 7.24]}
          size={1.7}
          framed
        />
      </group>
    </group>
  );
}

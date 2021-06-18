import { Image, Video } from "spacesvr";
import Slideshow from "themes/components/Slideshow";
import { Text } from "@react-three/drei";

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/violetsummer";

const links = [
  `${CONTENT_FOLDER}/vsz11.jpg`,
  `${CONTENT_FOLDER}/vsz115.jpg`,
  `${CONTENT_FOLDER}/vsz116.jpg`,
  `${CONTENT_FOLDER}/vsz117.jpg`,
];

const captions = ["", "", "", ""];

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
        <Video
          src={`${CONTENT_FOLDER}/LaPrairie.mp4`}
          position={[0.23, 0.6, 0]}
          size={2.25}
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
          src={`${CONTENT_FOLDER}/2.jpg`}
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
          src={`${CONTENT_FOLDER}/4.jpg`}
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
      </group>
    </group>
  );
}

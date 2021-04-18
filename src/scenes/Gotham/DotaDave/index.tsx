import Slideshow from "themes/components/Slideshow";
import { Text } from "@react-three/drei";

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/dotadave`;
const links = [
  `${url}/Highground - Coolground!.mp4`,
  `${url}/It just keeps getting better!.mp4`,
  `${url}/Juggernaut - Let them feel the cool of your Blade!.mp4`,
  `${url}/Supports return to the fight!.mp4`,
  `${url}/Teamwork makes the Dreamwork 1 - Jug.mp4`,
  `${url}/Teamwork makes the Dreamwork 2 - Jug.mp4`,
  `${url}/Teamwork makes the Dreamwork 3 - Invoker.mp4`,
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

export default function DotaDave() {
  return (
    <group name="dotadave">
      <Slideshow
        links={links}
        captions={captions}
        position={[-5.49, 1, 5]}
        size={1.6}
        rotation-y={Math.PI / 2}
      />
      <group
        position={[-5.8, 1.12, 3.5]}
        rotation={[0, Math.PI / 2, 0]}
        name="text"
      >
        {/* @ts-ignore */}
        <Text fontSize={0.5} position={[0, 0, 0.315]} anchorX="left">
          Dave Jackson
        </Text>
        {/* @ts-ignore */}
        <Text fontSize={0.2} position={[0.05, -0.4, 0.315]} anchorX="left">
          Master Dota Player
        </Text>
      </group>
    </group>
  );
}

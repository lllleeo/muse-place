import { Image } from "spacesvr";
import { Text } from "@react-three/drei";

const CONTENT =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/chadknight";
const INTRO_TOP =
  "As pioneers of the digital arts, Kaskade and Knight are shifting natures constant evolution into the digital domain where it can be immortalized and experienced by all. Each piece will be immune from the decay of time as the artists have reimagined natures cycles into a digital entity, catalyzing an immersive sonic and visual experience.";
const INTRO_BOT =
  "Seasons is a NFT experience by Knight x Kaskade, featuring four pieces inspired by Vivaldis legendary violin concerti series, Le Quattro Stagioni. For this collection, each season is conceived as a world in itself, ruled by the enduring forces of love and time. The changing of seasons communicates the passage of time and lifes ongoing cyclical rhythm. There is no more reliable change than the one reflected in our natural environment.";

export default function Tableaux() {
  return (
    <group name="tableaux" position={[0, -13, 62]}>
      <group name="left">
        <Image
          src={`${CONTENT}/kklogo1.jpg`}
          scale={3}
          position={[4.07, -0.25, -1.01]}
          rotation-y={-0.525}
        />
      </group>
      <group name="right" position={[-2.57, -0.05, -1.15]} rotation-y={0.525}>
        <Text
          font={`${CONTENT}/journey.ttf`}
          fontSize={0.6}
          color="black"
          position={[-0.25, 1.5, 0]}
        >
          Chad Knight
        </Text>
        <Text
          font={`${CONTENT}/journey.ttf`}
          fontSize={0.2}
          color="black"
          maxWidth={2.75}
          position={[-0.27, 0.5, 0]}
          textAlign="justify"
        >
          {INTRO_TOP}
        </Text>
        <Text
          font={`${CONTENT}/journey.ttf`}
          fontSize={0.2}
          color="black"
          maxWidth={2.75}
          textAlign="justify"
          position={[-0.27, -1.3, 0]}
        >
          {INTRO_BOT}
        </Text>
      </group>
    </group>
  );
}

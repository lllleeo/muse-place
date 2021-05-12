import { Interaction } from "../types/metaphysics";
import { Text } from "@react-three/drei";

const FONT_FILE =
  "https://d27rt3a60hh1lx.cloudfront.net/fonts/Quicksand_Bold.otf";

export default function VisualInteraction(props: Interaction) {
  const { text, decisions } = props;

  const textStyles: Partial<typeof Text.defaultProps> = {
    font: FONT_FILE,
    maxWidth: 0.8,
    textAlign: "center",
    fontSize: 0.06,
    outlineWidth: 0.0065,
  };

  if (!decisions) {
    return (
      <group name={`interaction-${text}`}>
        <Text {...textStyles}>{text}</Text>
      </group>
    );
  }

  return <group name={`interaction-${text}`}></group>;
}

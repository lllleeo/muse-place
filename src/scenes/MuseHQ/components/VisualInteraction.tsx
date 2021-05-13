import { Interaction } from "../types/metaphysics";
import { Text } from "@react-three/drei";
import { ReactNode, useContext } from "react";
import Button from "./Button";
import { DialogueContext } from "./Dialogue";
import { getDecisionIdea } from "../utils/metaphysics";
import FacePlayer from "../modifiers/FacePlayer";

const FONT_FILE =
  "https://d27rt3a60hh1lx.cloudfront.net/fonts/Quicksand_Bold.otf";

export default function VisualInteraction(
  props: Interaction & { children?: ReactNode }
) {
  const { text, decisions, children } = props;

  const { setIndex } = useContext(DialogueContext);

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

  return (
    <group name={`interaction-${text}`}>
      <Text {...textStyles}>{text}</Text>
      <group name="decisions" position-y={-0.35 / 2 - 0.1}>
        {decisions.map((decision, i) => {
          const perc = i / (decisions.length - 1);
          const width = decision.name.length * 0.28 + 0.25;
          const posY = -perc * 0.125;
          return (
            <FacePlayer>
              <Button
                width={width}
                onClick={() => decision.action(setIndex)}
                position-z={0.15}
                position-y={posY}
                idea={getDecisionIdea(decision)}
              >
                {decision.name}
              </Button>
            </FacePlayer>
          );
        })}
      </group>
      {children}
    </group>
  );
}

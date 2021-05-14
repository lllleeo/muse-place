import VisualInteraction from "./VisualInteraction";
import { useContext, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring/three";
import { Dialogue } from "../layers/basis";
import { DialogueContext } from "./VisualDialogueLogic";

export default function VisualDialogue(props: Dialogue & { enabled: boolean }) {
  const { effect, text, decisions, enabled } = props;

  const { setIndex } = useContext(DialogueContext);

  const { posZ, scaleY } = useSpring({
    posZ: enabled ? 0.001 : -0.003,
    scaleY: enabled ? 1 : 0,
  });

  const [prevEnabled, setPrevEnabled] = useState(false);

  useEffect(() => {
    if (prevEnabled !== enabled) {
      setPrevEnabled(enabled);
      if (enabled && effect) {
        effect(setIndex);
      }
    }
  }, [prevEnabled, enabled]);

  return (
    <animated.group name="slide" position-z={posZ} scale-y={scaleY}>
      <VisualInteraction text={text} decisions={decisions} />
    </animated.group>
  );
}

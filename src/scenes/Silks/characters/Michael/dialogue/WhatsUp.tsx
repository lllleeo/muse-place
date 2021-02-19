import { GroupProps } from "react-three-fiber";
import SpeechBubble from "../../../components/SpeechBubble";

const WhatsUp = (props: GroupProps) => {
  return (
    <group {...props}>
      <group position-y={1} position-z={0.2}>
        <SpeechBubble>i think there's only a few durags left...</SpeechBubble>
      </group>
    </group>
  );
};

export default WhatsUp;

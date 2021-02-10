import { GroupProps } from "react-three-fiber";
import SpeechBubble from "../../../components/SpeechBubble";

const GoBuy = (props: GroupProps) => {
  return (
    <group {...props}>
      <SpeechBubble position-y={1}>Go buy some shit bro</SpeechBubble>
    </group>
  );
};

export default GoBuy;

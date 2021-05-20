import { GroupProps } from "@react-three/fiber";
import SpeechBubble from "../../../components/SpeechBubble";

const GoBuy = (props: GroupProps) => {
  return (
    <group {...props}>
      <SpeechBubble position-y={1}>
        {"Go buy some shit bro\nDurags are on the wall"}
      </SpeechBubble>
    </group>
  );
};

export default GoBuy;

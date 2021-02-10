import { Interactable } from "spacesvr";
import { Text } from "@react-three/drei";
import { GroupProps } from "react-three-fiber";
import SpeechBubble from "../../../components/SpeechBubble";

const Checkout = (props: GroupProps) => {
  return (
    <group {...props}>
      <group position-y={1} position-z={0.2}>
        <SpeechBubble position-y={0.15}>
          Yo you ready to check out?
        </SpeechBubble>
        <group position-x={0.5}>
          <Interactable
            onClick={() => window.open("https://shopify.com", "_blank")}
          >
            <mesh position-z={0.05 / -2}>
              <boxBufferGeometry args={[0.5, 0.125, 0.05]} />
              <meshStandardMaterial color="white" />
            </mesh>
          </Interactable>
          {/* @ts-ignore */}
          <Text color="black" fontSize={0.05} position-z={0.05}>
            Go To Checkout
          </Text>
        </group>
      </group>
    </group>
  );
};

export default Checkout;

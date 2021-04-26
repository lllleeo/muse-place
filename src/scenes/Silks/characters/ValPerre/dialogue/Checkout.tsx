import { Interactable } from "spacesvr";
import { Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import SpeechBubble from "../../../components/SpeechBubble";
import { useContext } from "react";
import { ShopContext } from "../../../index";
import FacePlayer from "../../../modifiers/FacePlayer";

const Checkout = (props: GroupProps) => {
  const { cart } = useContext(ShopContext);

  return (
    <group {...props}>
      <group position-y={1} position-z={0.2}>
        <SpeechBubble position-y={0.15}>
          Yo you ready to check out?
        </SpeechBubble>
        <group position-x={0.5}>
          <FacePlayer>
            <Interactable
              onClick={() => cart.url && window.open(cart.url, "_blank")}
            >
              <mesh position-z={0.05 / -2}>
                <boxBufferGeometry args={[0.5, 0.125, 0.05]} />
                <meshStandardMaterial color="red" transparent opacity={0.7} />
              </mesh>
            </Interactable>
            {/* @ts-ignore */}
            <Text color="white" fontSize={0.05} position-z={0.01}>
              Go To Checkout
            </Text>
          </FacePlayer>
        </group>
      </group>
    </group>
  );
};

export default Checkout;

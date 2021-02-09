import Spinning from "../modifiers/Spinning";
import { Suspense, useState } from "react";
import ShoppingCart from "../models/ShoppingCart";
import { Tool } from "../modifiers/Tool";
import FacePlayer from "../modifiers/FacePlayer";
import { Text } from "@react-three/drei";

const Cart = () => {
  const [count, setCount] = useState(0);

  return (
    <Tool pos={[0.85, -0.75]} face={false}>
      <Spinning>
        <group position-y={8}>
          <FacePlayer>
            <mesh position-z={-0.2}>
              <circleBufferGeometry args={[1.25, 30]} />
              <meshStandardMaterial color="red" />
            </mesh>
            <Text fontSize={1}>{count.toString()}</Text>
          </FacePlayer>
        </group>
        <Suspense fallback={null}>
          <ShoppingCart />
        </Suspense>
      </Spinning>
    </Tool>
  );
};

export default Cart;

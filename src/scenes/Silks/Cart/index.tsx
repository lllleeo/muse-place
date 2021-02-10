import Spinning from "../modifiers/Spinning";
import { Suspense, useContext, useState } from "react";
import ShoppingCart from "../models/ShoppingCart";
import { Tool } from "../modifiers/Tool";
import FacePlayer from "../modifiers/FacePlayer";
import { Text } from "@react-three/drei";
import { isMobile } from "react-device-detect";
import { ShopContext } from "../index";

const Cart = () => {
  const { cart } = useContext(ShopContext);

  const posY = isMobile ? 0.65 : -0.75;
  const posX = isMobile ? -0.85 : 0.85;
  const scale = isMobile ? 0.6 : 0.8;

  return (
    <Tool pos={[posX, posY]} face={false}>
      <group position={[0, 4, 0]}>
        <FacePlayer>
          <mesh position-z={-0.2}>
            <circleBufferGeometry args={[1.25, 30]} />
            <meshStandardMaterial color="red" transparent opacity={0.8} />
          </mesh>
          {/* @ts-ignore */}
          <Text fontSize={1}>{cart.count.toString()}</Text>
        </FacePlayer>
      </group>
      <Spinning>
        <Suspense fallback={null}>
          <ShoppingCart scale={[scale, scale, scale]} />
        </Suspense>
      </Spinning>
    </Tool>
  );
};

export default Cart;

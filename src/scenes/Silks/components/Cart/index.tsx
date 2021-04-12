import Spinning from "../../modifiers/Spinning";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import ShoppingCart from "../../models/ShoppingCart";
import { Tool } from "../../modifiers/Tool";
import { isMobile } from "react-device-detect";
import { ShopContext } from "../../index";
import { Interactable } from "spacesvr";
import Control from "./components/Control";
// @ts-ignore
import { animated, useSpring } from "react-spring/three";
import { config } from "react-spring";
import { Preload } from "@react-three/drei";

const Cart = () => {
  const { cart } = useContext(ShopContext);

  const posY = isMobile ? 0.7 : -0.75;
  const posX = isMobile ? -0.75 : 0.8;
  const cartScale = isMobile ? 0.45 : 0.75;

  const [incr, setIncr] = useState(2);
  const prevCart = useRef(0);

  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === "c") {
      cart.clear();
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", onKeyPress);
    return () => {
      window.removeEventListener("keypress", onKeyPress);
    };
  }, [open]);

  // rotate cart when product is added
  const { rotY } = useSpring({
    rotY: Math.PI * 2 * incr,
    config: config.wobbly,
  });
  useEffect(() => {
    if (cart.count !== prevCart.current) {
      setIncr(incr + 1);
      prevCart.current = cart.count;
    }
  }, [incr, cart.count]);

  return (
    <Tool pos={[posX, posY]} face={false} pinY={isMobile}>
      <Interactable onClick={isMobile ? () => cart.clear() : undefined}>
        <Control />
        <Spinning>
          <animated.group rotation-y={rotY}>
            <Suspense fallback={null}>
              <Preload all />
              <ShoppingCart scale={[cartScale, cartScale, cartScale]} />
            </Suspense>
          </animated.group>
        </Spinning>
      </Interactable>
    </Tool>
  );
};

export default Cart;

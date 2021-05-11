import { Suspense, useContext, useEffect, useRef, useState } from "react";
import ShoppingCart from "../../models/ShoppingCart";
import { Tool } from "../../modifiers/Tool";
import { isMobile } from "react-device-detect";
import { ShopContext } from "../../index";
import { Interactable, Spinning } from "spacesvr";
// @ts-ignore
import { animated, useSpring } from "react-spring/three";
import { config } from "react-spring";
import { Preload } from "@react-three/drei";
import SpeechBubble from "../SpeechBubble";
import FacePlayer from "../../modifiers/FacePlayer";
import CartView from "./components/CartView";

const Cart = () => {
  const { cart } = useContext(ShopContext);

  const posY = isMobile ? 0.7 : -0.75;
  const posX = isMobile ? -0.75 : 0.8;
  const cartScale = isMobile ? 0.45 : 0.75;

  const [open, setOpen] = useState(false);
  const [incr, setIncr] = useState(0);
  const [speech, setSpeech] = useState(false);
  const prevCart = useRef(0);

  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === "c") {
      setOpen(!open);
      if (speech) setSpeech(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", onKeyPress);
    return () => {
      window.removeEventListener("keypress", onKeyPress);
    };
  }, [speech, open]);

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
    if (incr === 1 && cart.count === 1) {
      setSpeech(true);
    }
  }, [incr, cart.count]);

  return (
    <>
      <Tool
        pos={[open ? 0.8 : posX, open ? 0 : posY]}
        face={false}
        pinY={isMobile}
      >
        {speech && (
          <FacePlayer>
            <group
              scale={15}
              position={[isMobile ? 3 : -15, isMobile ? 2 : 3, 0]}
            >
              <SpeechBubble>
                {isMobile ? "tap to open" : "press c to view your cart"}
              </SpeechBubble>
            </group>
          </FacePlayer>
        )}
        <Interactable onClick={isMobile ? () => cart.clear() : undefined}>
          <mesh position-y={2.64} visible={false}>
            <boxBufferGeometry args={[5, 5, 5]} />
          </mesh>
        </Interactable>
        <Spinning ySpeed={open ? 0 : 0.6}>
          <animated.group rotation-y={rotY}>
            <Suspense fallback={null}>
              <Preload all />
              <ShoppingCart scale={cartScale} rotation-y={-Math.PI} />
            </Suspense>
          </animated.group>
        </Spinning>
      </Tool>
      {open && <CartView setOpen={setOpen} />}
    </>
  );
};

export default Cart;

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
import Product from "../Shop/Product";
import { RangeTool } from "../../modifiers/RangeTool";

const Cart = () => {
  const { cart } = useContext(ShopContext);

  const posY = isMobile ? 0.7 : -0.75;
  const posX = isMobile ? -0.75 : 0.8;
  const cartScale = isMobile ? 0.45 : 0.75;

  const [open, setOpen] = useState(false);
  const [incr, setIncr] = useState(2);
  const [speech, setSpeech] = useState(false);
  const prevCart = useRef(0);

  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === "c") {
      setOpen(!open);
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
    if (incr === 1) {
      setSpeech(true);
      setTimeout(() => setSpeech(false), 6000);
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
              scale={[12, 12, 12]}
              position={[isMobile ? 3 : -8, isMobile ? 2 : 10, 0]}
            >
              <SpeechBubble>
                {isMobile ? "tap to clear" : "press c to clear"}
              </SpeechBubble>
            </group>
          </FacePlayer>
        )}
        <Interactable onClick={isMobile ? () => cart.clear() : undefined}>
          <mesh position-y={2.64} visible={false}>
            <boxBufferGeometry args={[5, 5, 5]} />
          </mesh>
        </Interactable>
        <Spinning ySpeed={0.6}>
          <animated.group rotation-y={rotY}>
            <Suspense fallback={null}>
              <Preload all />
              <ShoppingCart scale={[cartScale, cartScale, cartScale]} />
            </Suspense>
          </animated.group>
        </Spinning>
      </Tool>
      {open && (
        <RangeTool pos={[0, 0]} distance={6} onExit={() => setOpen(false)}>
          <pointLight position={[0, 0, 4]} distance={0.4} />
          <mesh position-z={-4}>
            <planeBufferGeometry args={[20, 20]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
          {cart.items.map((item, i) => (
            <Product
              item={item}
              position-x={(-(cart.items.length - 1) / 2 + i) * 6.5}
            />
          ))}
        </RangeTool>
      )}
    </>
  );
};

export default Cart;

import Spinning from "../../modifiers/Spinning";
import { Suspense, useContext, useEffect } from "react";
import ShoppingCart from "../../models/ShoppingCart";
import { Tool } from "../../modifiers/Tool";
import FacePlayer from "../../modifiers/FacePlayer";
import { isMobile } from "react-device-detect";
import { ShopContext } from "../../index";
import { Interactable } from "spacesvr";
import Control from "./components/Control";

const Cart = () => {
  const { cart } = useContext(ShopContext);

  const posY = isMobile ? 0.7 : -0.75;
  const posX = isMobile ? -0.75 : 0.8;
  const cartScale = isMobile ? 0.45 : 0.75;

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

  return (
    <Tool pos={[posX, posY]} face={false} pinY={isMobile}>
      <Interactable onClick={isMobile ? () => cart.clear() : undefined}>
        <FacePlayer>
          <Control />
        </FacePlayer>
        <Spinning>
          <Suspense fallback={null}>
            <ShoppingCart scale={[cartScale, cartScale, cartScale]} />
          </Suspense>
        </Spinning>
      </Interactable>
    </Tool>
  );
};

export default Cart;

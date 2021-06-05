import Desk from "../../models/Desk";
import Register from "../../models/Register";
import Kiosk from "./Kiosk";
import { Suspense, useContext } from "react";
import Cart from "../Cart";
import { Image } from "spacesvr";
import { Preload } from "@react-three/drei";
import { ShopContext } from "../../index";

const KIOSK_GAP = 0.75,
  IMG_GAP = 0.9;
const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kkites";

export default function Shop() {
  const { products } = useContext(ShopContext);
  console.log(products);
  return (
    <group name="shop">
      <group
        position={[2.45, 1.3, 2.8]}
        rotation-y={-Math.PI / 2}
        name="productImages"
      >
        <Image
          src={`${CONTENT_FOLDER}/Cuban+Link+Necklace.jpg`}
          size={0.75}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/Large+Jesus+Piece.jpg`}
          size={0.75}
          position-x={IMG_GAP}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/Odin+Link+Necklace.jpg`}
          size={0.75}
          position-x={IMG_GAP * 2}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/Small+Jesus+Piece.jpg`}
          size={0.75}
          position-x={IMG_GAP * 3}
          framed
        />
      </group>
      <Cart />
      <group
        position={[2.25, 0.65, 2.8]}
        rotation-y={-Math.PI / 2}
        name="productLabels"
      >
        <Kiosk productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ5NjY0MzIyNzY1NTE=" />
        <Kiosk
          productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzE1MTI5ODc3MTk="
          position-x={KIOSK_GAP}
        />
        <Kiosk
          productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzE1MTg1MjU1MTE="
          position-x={KIOSK_GAP * 2}
        />
        <Kiosk
          productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzE1MTMwNTMyNTU="
          position-x={KIOSK_GAP * 3}
        />
      </group>
      <group name="desk-register">
        <Suspense fallback={null}>
          <Preload all />
          <Desk
            position={[2.04, -0.25, 4.25]}
            rotation-y={-Math.PI / 2}
            scale={[2.04, 0.8, 1.29]}
          />
          <Register />
        </Suspense>
      </group>
    </group>
  );
}

import Desk from "../../models/Desk";
import Register from "../../models/Register";
import Kiosk from "./Kiosk";
import { Suspense } from "react";
import Cart from "../Cart";
import { Image } from "spacesvr";

const KIOSK_GAP = 0.75,
  IMG_GAP = 0.9;
const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kkites";

export default function Shop() {
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
        <Kiosk />
        <Kiosk position-x={KIOSK_GAP} />
        <Kiosk position-x={KIOSK_GAP * 2} />
        <Kiosk position-x={KIOSK_GAP * 3} />
      </group>
      <group name="desk-register">
        <Suspense fallback={null}>
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

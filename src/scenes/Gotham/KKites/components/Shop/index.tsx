import Desk from "../../models/Desk";
import Register from "../../models/Register";
import Kiosk from "./Kiosk";
import { Suspense } from "react";
import Cart from "../Cart";
import { Image } from "spacesvr";
import { Preload } from "@react-three/drei";

const KIOSK_GAP = 0.9,
  IMG_GAP = 0.92;
const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kkites";

export default function Shop() {
  return (
    <group name="shop">
      <group
        position={[2.45, 1.3, 2.0]}
        rotation-y={-Math.PI / 2}
        name="productImages"
      >
        <Image src={`${CONTENT_FOLDER}/bbmjesus.jpg`} size={0.75} framed />
        <Image
          src={`${CONTENT_FOLDER}/smjesus.jpg`}
          size={0.75}
          position-x={IMG_GAP}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/bmodin.jpg`}
          size={0.75}
          position-x={IMG_GAP * 2}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/bmnecklace.jpg`}
          size={0.75}
          position-x={IMG_GAP * 3}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/bmbracelet.jpg`}
          size={0.75}
          position-x={IMG_GAP * 4}
          framed
        />
      </group>
      <Cart />
      <group
        position={[2.25, 0.65, 2.0]}
        rotation-y={-Math.PI / 2}
        name="productLabels"
      >
        <Kiosk productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzY3ODQ1MDY5NTE=" />
        <Kiosk
          productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzY3ODQ2MDUyNTU="
          position-x={KIOSK_GAP}
        />
        <Kiosk
          productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzY3ODQ5NjU3MDM="
          position-x={KIOSK_GAP * 2}
        />
        <Kiosk
          productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzY3ODUxOTUwNzk="
          position-x={KIOSK_GAP * 3}
        />
        <Kiosk
          productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzY3ODUzOTE2ODc="
          position-x={KIOSK_GAP * 4}
        />
      </group>
      <group name="desk-register">
        <Suspense fallback={null}>
          <Preload all />
          <Desk
            position={[2.04, -0.25, 4.25]}
            rotation-y={-Math.PI / 2}
            scale={[3.0, 0.8, 1.29]}
          />
          <Register position-z={6.5} />
        </Suspense>
      </group>
    </group>
  );
}

import Desk from "../../models/Desk";
import Register from "../../models/Register";
import Kiosk from "./Kiosk";
import { Suspense } from "react";
import Cart from "../Cart";
import Variants from "../Variants";
import { Image } from "spacesvr";
import { Preload } from "@react-three/drei";

const KIOSK_GAP = 0.75,
  IMG_GAP = 0.9;
const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kkites";

export default function Shop() {
  return (
    <group
      name="shop"
      position={[-5.83, -0.09, 7.42]}
      rotation={[0.0, 1.57, 0.0]}
    >
      <Cart />
      <Variants />
      <group
        position={[2.05, 0.65, 3.9]}
        rotation-y={-Math.PI / 2}
        name="productLabels"
      >
        <Kiosk productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NTc2NDg5NzgwMTc=" />
        {/*<Kiosk productId ="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI5OTQ4OTk1NTkzNw==" productName={"Size 6:"} />*/}
      </group>
      <group name="desk-register">
        <Suspense fallback={null}>
          <Preload all />
          <Desk
            position={[2.04, -0.25, 4.25]}
            rotation-y={-Math.PI / 2}
            scale={[1.04, 0.8, 1.29]}
          />
          <Register />
        </Suspense>
      </group>
    </group>
  );
}

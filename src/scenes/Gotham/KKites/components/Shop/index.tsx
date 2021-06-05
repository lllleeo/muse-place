import Desk from "../../models/Desk";
import Register from "../../models/Register";
import Kiosk from "./Kiosk";
import { Suspense } from "react";
import Cart from "../Cart";

const KIOSK_GAP = 0.75;

export default function Shop() {
  return (
    <group name="shop">
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

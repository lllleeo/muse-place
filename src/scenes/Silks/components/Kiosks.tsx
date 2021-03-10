import { Suspense } from "react";
import PinkWhiteDurag from "../models/PinkWhiteDurag";
import PinkGreenDurag from "../models/PinkGreenDurag";
import Spinning from "../modifiers/Spinning";
import Kiosk from "./Kiosk";

export default function Kiosks() {
  return (
    <group name="kiosks" position={[0, 0.6, -5.32]}>
      <Suspense fallback={null}>
        <Kiosk
          position-x={-0.5}
          productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ4MTQzMTA0NDEwMjI="
          name="pink-green-durag"
        >
          <Spinning>
            <PinkGreenDurag />
          </Spinning>
        </Kiosk>
      </Suspense>
      <Suspense fallback={null}>
        <Kiosk
          position-x={2.5}
          productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ4MTQzMTA3Njg3MDI="
          name="pink-white-durag"
        >
          <Spinning>
            <PinkWhiteDurag />
          </Spinning>
        </Kiosk>
      </Suspense>
    </group>
  );
}

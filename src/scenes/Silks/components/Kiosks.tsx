import { Suspense } from "react";
import PinkWhiteDurag from "../models/PinkWhiteDurag";
import PinkGreenDurag from "../models/PinkGreenDurag";
import Spinning from "../modifiers/Spinning";
import Kiosk from "./Kiosk";

const Kiosks = () => {
  return (
    <group name="kiosks" position={[0, 0.6, -5.32]}>
      <Kiosk
        position-x={-0.5}
        productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ4MTQzMTA0NDEwMjI="
        name="pink-green-durag"
      >
        <Suspense fallback={null}>
          <Spinning>
            <PinkGreenDurag />
          </Spinning>
        </Suspense>
      </Kiosk>
      <Kiosk
        position-x={2.5}
        productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ4MTQzMTA3Njg3MDI="
        name="pink-white-durag"
      >
        <Suspense fallback={null}>
          <Spinning>
            <PinkWhiteDurag />
          </Spinning>
        </Suspense>
      </Kiosk>
    </group>
  );
};

export default Kiosks;

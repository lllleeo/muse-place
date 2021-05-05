import { Suspense } from "react";
import Durag from "../models/Durag";
import Spinning from "../modifiers/Spinning";
import Kiosk from "./Kiosk";
import { Preload } from "@react-three/drei";

export default function Kiosks() {
  return (
    <group name="kiosks" position={[0, 0.6, -5.32]}>
      <Kiosk
        position-x={-0.5}
        productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NDU2MTQ3MzMzNzQ="
        name="pink-green-durag"
      >
        <Spinning>
          <Suspense fallback={null}>
            <Preload all />
            <Durag fabricColor="#f0dd33" stitchesColor="#e92907" />
          </Suspense>
        </Spinning>
      </Kiosk>
      <Kiosk
        position-x={2.5}
        productId="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NDU2MTUyOTA0MzA="
        name="pink-white-durag"
      >
        <Spinning>
          <Suspense fallback={null}>
            <Preload all />
            <Durag fabricColor="#d51010" stitchesColor="#dbdbdb" />
          </Suspense>
        </Spinning>
      </Kiosk>
    </group>
  );
}

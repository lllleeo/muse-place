import { Suspense } from "react";
import { HDRI, Spinning, StandardEnvironment } from "spacesvr";
import Artbox from "./models/Artbox";
import Artbox2 from "./models/Artbox2";
import Tribox from "./models/Tribox";
import Artwork from "./components/Artwork";
import { Preload } from "@react-three/drei";

export default function Artbocks() {
  return (
    <StandardEnvironment
      playerProps={{
        pos: [-10, 1, 10],
        rot: -Math.PI / 4,
        speed: 5,
        controls: { disableGyro: true },
      }}
      // dev
    >
      <ambientLight intensity={0.25} />
      <Suspense fallback={null}>
        <Preload all />
        <Artbox />
        <Artbox2 />
      </Suspense>
      <Artwork />
      <HDRI
        size={2048}
        src="https://d27rt3a60hh1lx.cloudfront.net/images/snow_mountains_la_oil_paint.hdr"
      />
      <mesh rotation-x={-Math.PI / 2} position-y={-0.05}>
        <planeBufferGeometry args={[500, 500]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <spotLight position-y={10} penumbra={0.21} intensity={1.5} />
      <group name="tribox" position={[-9.28, 4, 5.9]}>
        <Spinning ySpeed={0.5} zSpeed={0.7} xSpeed={0.3}>
          <Suspense fallback={null}>
            <Tribox scale={0.5} />
          </Suspense>
        </Spinning>
      </group>
    </StandardEnvironment>
  );
}

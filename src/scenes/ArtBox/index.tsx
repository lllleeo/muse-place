import { Suspense } from "react";
import { HDRI, Spinning, StandardEnvironment } from "spacesvr";
import Artbox from "./models/Artbox";
import Artbox1 from "./models/Artbox1";
import Tribox from "./models/Tribox";
import Artwork from "./components/Artwork";
import { Preload } from "@react-three/drei";
import Popup from "themes/components/Popup";

export default function Artbocks() {
  return (
    <StandardEnvironment
      playerProps={{
        pos: [-10, 1, 10],
        rot: -Math.PI / 4,
        speed: 5,
        controls: { disableGyro: true },
      }}
      signup="https://bit.ly/3wgMNGO"
    >
      <ambientLight intensity={0.25} />
      <Suspense fallback={null}>
        <Preload all />
        <Artbox />
        <Artbox1 />
        <Artwork />
      </Suspense>
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
      <Popup
        dialogue={{
          key: "1",
          text: "want your own 3D website?",
          decisions: [
            {
              name: "sure",
              action: () => window.open("https://bit.ly/3wgMNGO", "_blank"),
            },
            {
              name: "nah",
              // i need a function here, can't be null
              action: () => console.log(""),
            },
          ],
        }}
        timeout={15000}
      />
    </StandardEnvironment>
  );
}

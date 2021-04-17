import { Suspense } from "react";
import { StandardEnvironment } from "spacesvr";
import { Preload, Sky } from "@react-three/drei";
import Musehq from "./models/Musehq";
import AmbientParticles from "./components/AmbientParticles";
import { Bloom, EffectComposer } from "react-postprocessing";
import { Idea } from "./components/Idea";

export default function MuseHQ() {
  return (
    <StandardEnvironment
      playerProps={{ speed: 2.3, pos: [-9.5, 9, 1.2], rot: -Math.PI / 2 }}
      canvasProps={{
        camera: { far: 300 },
        pixelRatio: 1,
        gl: { antialias: false },
      }}
    >
      <Sky
        turbidity={20}
        rayleigh={4}
        mieCoefficient={0}
        mieDirectionalG={1}
        inclination={0.114}
        azimuth={0.32}
        sunPosition={[0, 1, 0]}
        distance={300}
      />
      <ambientLight intensity={2} />
      <AmbientParticles position={[-4, 6, -3]} />
      <Suspense fallback={null}>
        <Preload all />
        <Musehq />
      </Suspense>
      <Idea
        name="saas-0"
        size={0.4}
        position={[6.93, 6.55, -0.76]}
        perception={0.9}
      />
      <Idea
        name="saas-1"
        size={0.15}
        position={[11.82, 6.7, 1.61]}
        perception={0.1}
      />
      <Idea
        name="saas-2"
        size={0.6}
        position={[6.93, 6.55, 4]}
        perception={0.4}
      />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </StandardEnvironment>
  );
}

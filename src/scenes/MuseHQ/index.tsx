import { Suspense } from "react";
import { StandardEnvironment, Audio } from "spacesvr";
import { Preload } from "@react-three/drei";
import Musehq from "./models/Musehq";
import AmbientParticles from "./components/AmbientParticles";
import { VisualIdea } from "./layers/basis/visual/VisualIdea";
import Builder00 from "./characters/Builder00";
import Builder07 from "./characters/Builder07";
import Builder0102 from "./characters/Builder0102";
import { IdentityLayer } from "./layers/identity";
import { Vector3 } from "three";
import Onboarding from "./components/Onboarding";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
  Noise,
  ToneMapping,
} from "@react-three/postprocessing";
import WorldDirectory from "./components/WorldDirectory";

export default function MuseHQ() {
  return (
    <StandardEnvironment
      playerProps={{
        speed: 1.65,
        pos: [-19.748, 0, -2.1],
        rot: -Math.PI / 2,
        controls: { disableGyro: true },
      }}
      canvasProps={{
        camera: { far: 300 },
        dpr: 1.5,
        gl: { antialias: false },
      }}
      dev={process.env.NODE_ENV === "development"}
      simulationProps={{
        signalHost: "musehq.us-west-1.elasticbeanstalk.com",
        signalPort: 443,
        signalPath: "/signal",
        socketServer: "wss://musehq.us-west-1.elasticbeanstalk.com",
        frequency: 25,
      }}
    >
      <IdentityLayer>
        <Onboarding />
        <Preload all />
        <ambientLight intensity={2} />
        <AmbientParticles position={[-4 - 7.09, 0, -3 - 3.19]} />
        <Suspense fallback={null}>
          <Preload all />
          <Musehq />
        </Suspense>
        <WorldDirectory />
        <Builder00 />
        <Builder07 />
        <Builder0102 />
        {/*<EffectComposer autoClear multisampling={0}>*/}
        {/*  <Bloom*/}
        {/*    luminanceThreshold={0.25}*/}
        {/*    luminanceSmoothing={0.9}*/}
        {/*    intensity={0.15}*/}
        {/*    height={300}*/}
        {/*  />*/}
        {/*  <Noise opacity={0.165} />*/}
        {/*</EffectComposer>*/}
      </IdentityLayer>
    </StandardEnvironment>
  );
}

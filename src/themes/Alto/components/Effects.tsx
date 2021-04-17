import { Bloom, EffectComposer, SMAA } from "react-postprocessing";
import { Suspense } from "react";

const Effects = () => {
  return (
    <Suspense fallback={null}>
      <EffectComposer multisampling={0}>
        <SMAA />
        <Bloom
          intensity={0.15}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.6}
          height={200}
        />
      </EffectComposer>
    </Suspense>
  );
};

export default Effects;

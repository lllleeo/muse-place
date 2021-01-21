import { Background } from "spacesvr";
import { useState, Suspense } from "react";
import * as THREE from "three";
import Music from "./Music";
import ReactivePrimitive from "./ReactivePrimitive";

type AudioReactiveProps = {
  audio: string;
  img?: string;
  freqIndex?: number;
} & JSX.IntrinsicElements["group"];

const AudioReactive = (props: AudioReactiveProps) => {
  const { audio, img, freqIndex } = props;
  const [analyser, setAnalyser] = useState<THREE.AudioAnalyser>();

  return (
    <group {...props}>
      <Background color="white" />
      <Music url={audio} setAnalyser={setAnalyser} />
      {analyser && (
        <Suspense fallback={null}>
          <ReactivePrimitive url={img} aa={analyser} freq={freqIndex} />
        </Suspense>
      )}
    </group>
  );
};

export default AudioReactive;

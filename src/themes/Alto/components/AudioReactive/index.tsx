import { Background } from "spacesvr";
import { Suspense } from "react";
import { Audio } from "spacesvr";
import ReactivePrimitive from "./ReactivePrimitive";
import { AudioAnalyser } from "three";

type AudioReactiveProps = {
  audio: string;
  aa: AudioAnalyser;
  setAA: (aa: AudioAnalyser) => void;
  img?: string;
  freqIndex?: number;
} & JSX.IntrinsicElements["group"];

const AudioReactive = (props: AudioReactiveProps) => {
  const { audio, img, freqIndex, aa, setAA } = props;

  return (
    <group {...props}>
      <Background color="white" />
      <Audio url={audio} setAudioAnalyser={setAA} />
      {aa && (
        <Suspense fallback={null}>
          <ReactivePrimitive url={img} aa={aa} freq={freqIndex} />
        </Suspense>
      )}
    </group>
  );
};

export default AudioReactive;

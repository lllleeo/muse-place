import { Background } from "spacesvr";
import { useState } from "react";
import * as THREE from "three";
import Music from "./Music";
import ReactivePrimitive from "./ReactivePrimitive";

type AudioReactiveProps = {
  audio: string;
  img?: string;
} & JSX.IntrinsicElements["group"];

const AudioReactive = (props: AudioReactiveProps) => {
  const { audio, img } = props;
  const [analyser, setAnalyser] = useState<THREE.AudioAnalyser>();

  return (
    <group {...props}>
      <Background color="white" />
      <Music url={audio} setAnalyser={setAnalyser} />
      {analyser && (
        <ReactivePrimitive url={img ? img : undefined} aa={analyser} />
      )}
    </group>
  );
};

export default AudioReactive;

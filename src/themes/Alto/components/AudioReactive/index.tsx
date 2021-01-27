import { Suspense } from "react";
import { Audio } from "spacesvr";
import { AudioAnalyser, Vector3 } from "three";
import Distort from "../Distort";
import Monmon from "../../models/Monmon";
import AmongUs from "../../models/AmongUs";
import { Shadow } from "@react-three/drei";

type AudioReactiveProps = {
  audio: string;
  aa?: AudioAnalyser;
  setAA: (aa: AudioAnalyser) => void;
  img?: string;
  freqIndex?: number;
} & JSX.IntrinsicElements["group"];

const AudioReactive = (props: AudioReactiveProps) => {
  const { audio, img, freqIndex, aa, setAA } = props;

  return (
    <group {...props}>
      <Audio
        url={audio}
        setAudioAnalyser={setAA}
        position={new Vector3(0, 11, 0)}
      />
      <Suspense fallback={null}>
        <group position-y={-3}>
          <Distort aa={aa}>
            <AmongUs />
          </Distort>
        </group>
        <group position-y={-5.22} rotation-x={-Math.PI / 2} scale={[2, 2, 1]}>
          <Shadow opacity={0.5} />
        </group>
      </Suspense>
    </group>
  );
};

export default AudioReactive;

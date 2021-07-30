import React from "react";
import { Vector3 } from "three";
import Audio from "./components/Audio";
import { useLucidWorld } from "../../layers/LucidWorld";

export default function CarnivalAudio() {
  const { setAA } = useLucidWorld();

  return (
    <group name="carnival-audio">
      <Audio
        url="https://spaces-gallery-assets.s3-us-west-1.amazonaws.com/audio/LM025-Compiled.mp3"
        position={new Vector3(0, 10, 0)}
        dCone={new Vector3(360, 360, 0)}
        volume={1}
        rollOff={0.9}
        setAudioAnalyser={setAA}
        fftSize={256}
      />
    </group>
  );
}

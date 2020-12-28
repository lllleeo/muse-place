import * as THREE from "three";
import { useEffect, useMemo, useState } from "react";
import { useThree } from "react-three-fiber";

type MusicProps = JSX.IntrinsicElements["group"] & {
  url: string;
  muted?: boolean;
  setAnalyser: (aa: THREE.AudioAnalyser) => void;
};

const Music = (props: MusicProps) => {
  const { url, muted, setAnalyser } = props;

  const { camera } = useThree();

  const [speaker, setSpeaker] = useState<THREE.PositionalAudio>();
  const [audio, setAudio] = useState<HTMLAudioElement>();

  // audio
  useEffect(() => {
    if (audio && !speaker) {
      const listener = new THREE.AudioListener();
      camera.add(listener);

      const s = new THREE.PositionalAudio(listener);
      s.setMediaElementSource(audio);
      s.position.set(0, 10, 1);
      s.setRefDistance(0.5);
      s.setRolloffFactor(0.2);
      s.setVolume(10);

      //init audio analyser
      setAnalyser(new THREE.AudioAnalyser(s, 128));
      setSpeaker(s);
    }
  }, [camera, speaker, audio]);

  useEffect(() => {
    const onClick = () => {
      if (!audio) {
        const a = document.createElement("audio");
        a.src = url;
        a.autoplay = false;
        a.crossOrigin = "Anonymous";
        a.preload = "auto";
        a.loop = true;
        a.muted = !!muted;
        setAudio(a);

        if (!muted) {
          a.play();
        }
      }
      if (audio && !muted) {
        audio.play();
      }
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [audio, muted]);

  return <>{speaker && <primitive object={speaker} />}</>;
};

export default Music;

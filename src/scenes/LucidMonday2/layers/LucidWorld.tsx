import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { AudioAnalyser } from "three";
import { useLimiter } from "spacesvr";
import { useFrame } from "@react-three/fiber";

type LucidWorldState = {
  aa?: AudioAnalyser;
  setAA: (aa: AudioAnalyser) => void;
  audioData: RefObject<Uint8Array>;
  audioFloorData: number[];
};

export const LucidWorldContext = createContext({} as LucidWorldState);

export function useLucidWorld() {
  return useContext(LucidWorldContext);
}

export function LucidWorld(props: { children: ReactNode | ReactNode[] }) {
  const { children } = props;

  const [aa, setAA] = useState<AudioAnalyser>();
  const audioData = useRef<Uint8Array>(new Uint8Array());
  const audioFloorData = useMemo(() => [0, 0, 0, 0, 0], []);

  // update audio data
  const limiter = useLimiter(60);
  useFrame(({ clock }) => {
    if (!aa || !limiter.isReady(clock)) return;

    audioData.current = aa.getFrequencyData();
    const getAudioRangeMax = (start: number, amount: number) => {
      let val = 0;
      for (let i = 0; i < amount; i++) {
        if (audioData.current[start + i] > val)
          val = audioData.current[start + i];
      }
      return val / 255;
    };
    const count = Math.floor(128 / 6);
    audioFloorData[0] = getAudioRangeMax(0, count);
    audioFloorData[1] = getAudioRangeMax(count, count);
    audioFloorData[2] = getAudioRangeMax(count * 2, count);
    audioFloorData[3] = getAudioRangeMax(count * 3, count);
    audioFloorData[4] = getAudioRangeMax(count * 4, count);
  });

  return (
    <LucidWorldContext.Provider
      value={{ aa, setAA, audioData, audioFloorData }}
    >
      {children}
    </LucidWorldContext.Provider>
  );
}

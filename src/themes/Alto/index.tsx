import React, { Suspense, useState } from "react";
import AltoModel from "./models/AltoModel";
import { AudioAnalyser, default as THREE } from "three";
import Grass from "./components/Grass";
import Sun from "./components/Sun";
import Effects from "./components/Effects";
import Scrolls from "./components/Scrolls";
import Tablatures from "./components/Tablatures";
import Birds from "./components/Birds";
import AudioReactive from "./components/AudioReactive";
import { ScrollData } from "./types/scroll";

export type AltoProps = {
  socials: string[];
  scrollData: ScrollData[];
  model: {
    url: string;
    scale: number;
  };
  content: {
    name: string;
    landing: {
      title: string;
      body: string;
    };
  };
  audio?: string;
  font: string;
  fontSize: number;
  aa?: AudioAnalyser;
  setAA?: (aa: AudioAnalyser) => void;
};

export const AltoContext = React.createContext<AltoProps>({} as AltoProps);
const defaultContext: AltoProps = {
  socials: ["http://instagram.com/musehq"],
  font: "https://d27rt3a60hh1lx.cloudfront.net/content/alto/ohmightyisis.ttf",
  fontSize: 1,
  model: {
    url:
      "https://d27rt3a60hh1lx.cloudfront.net/models/amongus-1611130356/amongus.glb",
    scale: 1,
  },
  scrollData: [],
  content: {
    name: "Muse",
    landing: {
      title: "Welcome to Alto",
      body: `otherwise known as the music venue of the gods. For thousands of years, Alto has been only accessible to immortal beings, but you seem to have found us anyway.. At the top of those stairs, you'll be the first mortal to ever hear Lucid Monday's latest work`,
    },
  },
};

const Alto = (props: Partial<AltoProps>) => {
  const [scrollCount, setScrollCount] = useState(0);

  return (
    <AltoContext.Provider value={{ ...defaultContext, ...props }}>
      <Suspense fallback={null}>
        <AltoModel />
        <Grass />
      </Suspense>
      <Sun />
      <Effects />
      <Scrolls count={scrollCount} setCount={setScrollCount} />
      <Birds />
      <Tablatures scrolls={scrollCount} />
      <AudioReactive position={[0, 11, 0]} />
    </AltoContext.Provider>
  );
};

export default Alto;

import React, { Suspense, useState } from "react";
import AltoModel from "./models/AltoModel";
import { AudioAnalyser, Vector3 } from "three";
import Grass from "./components/Grass";
import Scrolls from "./components/Scrolls";
import Tablatures from "./components/Tablatures";
import Birds from "./components/Birds";
import { ScrollData } from "./types/scroll";
import { Preload } from "@react-three/drei";
import { AltoContext } from "./index";
import { Audio } from "spacesvr";

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

const defaultContext: AltoProps = {
  socials: ["http://instagram.com/musehq"],
  font: "https://d27rt3a60hh1lx.cloudfront.net/content/alto/ohmightyisis.ttf",
  fontSize: 1,
  model: {
    url:
      "https://d27rt3a60hh1lx.cloudfront.net/models/TheMuse-1614830089/themuse-pose.glb",
    scale: 1.4,
  },
  scrollData: [],
  content: {
    name: "Muse",
    landing: {
      title: "Welcome to Alto",
      body: `otherwise known as the music venue of the gods. For thousands of years, Alto has been only accessible to immortal beings, but you seem to have found us anyway.. At the top of those stairs, you'll be the first mortal to ever hear Kira-X23's latest work`,
    },
  },
};

const Alto = (props: Partial<AltoProps>) => {
  const [scrollCount, setScrollCount] = useState(0);
  const { audio = "" } = props;

  return (
    <AltoContext.Provider value={{ ...defaultContext, ...props }}>
      <Preload all />
      <Suspense fallback={null}>
        <Preload all />
        <AltoModel />
      </Suspense>
      <Scrolls count={scrollCount} setCount={setScrollCount} />
      <Birds />
      <Tablatures scrolls={scrollCount} />
      <Audio url={audio} position={new Vector3(0, 11, 0)} />
    </AltoContext.Provider>
  );
};

export default Alto;

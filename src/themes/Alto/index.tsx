import React, { Suspense, useState } from "react";
import Alto from "./models/Alto";
import { default as THREE } from "three";
import Grass from "./components/Grass";
import Sun from "./components/Sun";
import Effects from "./components/Effects";
import Scrolls from "./components/Scrolls";
import Tablatures from "./components/Tablatures";
import Birds from "../components/Birds";
import AudioReactive from "./components/AudioReactive";

export type ScrollDataProps = {
  text?: string;
  textColor?: string;
  textSize?: number;
  textY?: number;
  img?: string;
  position?: [number, number, number];
  rotationY?: number;
};

export type AltoProps = {
  name: string;
  socials: string[];
  removeWalls?: boolean;
  scrollData: ScrollDataProps[];
  audio?: string;
  img: string;
};

const Renaissance = (props: AltoProps) => {
  const { name, socials, scrollData, removeWalls, audio } = props;

  const [scrollCount, setScrollCount] = useState(0);
  const [aa, setAA] = useState<THREE.AudioAnalyser>();

  return (
    <group>
      <Suspense fallback={null}>
        <Alto />
        <Grass />
      </Suspense>
      <Sun />
      <Effects />
      <Scrolls
        scrollData={scrollData}
        count={scrollCount}
        setCount={setScrollCount}
      />
      <Birds aa={aa} />
      <Tablatures socials={socials} scrolls={scrollCount} />
      {audio && (
        <AudioReactive
          audio={audio}
          aa={aa}
          setAA={setAA}
          position={[0, 11, 0]}
        />
      )}
    </group>
  );
};

export default Renaissance;

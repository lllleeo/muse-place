import React, { Suspense, useState } from "react";
import Alto from "./models/Alto";
import { default as THREE } from "three";
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
  audio?: string;
};

const Renaissance = (props: AltoProps) => {
  const { socials, scrollData, audio } = props;

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

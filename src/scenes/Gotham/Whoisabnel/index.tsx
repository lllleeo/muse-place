import { Background } from "spacesvr";
import { useState } from "react";
import * as THREE from "three";
import Music from "./Music";
import ReactivePrimitive from "./ReactivePrimitive";

const Whoisabnel = () => {
  const [analyser, setAnalyser] = useState<THREE.AudioAnalyser>();

  return (
    <group>
      <Background color={"white"} />
      <Music
        url="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/whoisabnel/dark.mp3"
        setAnalyser={setAnalyser}
      />
      {analyser && (
        <ReactivePrimitive
          url="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/whoisabnel/ab.jpg"
          aa={analyser}
        />
      )}
    </group>
  );
};

export default Whoisabnel;

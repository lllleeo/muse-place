import VinylModel from "./models/Vinyl";
import { useSong } from "./hooks";
import { Text } from "@react-three/drei";
import Button from "../Button";
import { Audio } from "../Audio";
import { useMemo, useState } from "react";
import { AudioAnalyser } from "three";
import { animated, useSpring } from "react-spring/three";
import { Spinning } from "spacesvr";

export default function Vinyl() {
  const songManager = useSong();
  const [aa, setAA] = useState<AudioAnalyser>();

  const { cdColor } = useSpring({
    cdColor: songManager.color,
  });

  return (
    <group name="vinyl">
      <group position={[0.59, 0, -3.36]}>
        <Audio
          key={songManager.musicUrl}
          url={songManager.musicUrl}
          setAudioAnalyser={setAA}
        />
        <VinylModel aa={aa} />
        <group name="cd" position={[0.12, 0.7, 0]}>
          <Spinning>
            <mesh rotation-x={-Math.PI / 2}>
              <circleBufferGeometry args={[0.11, 80, 40]} />
              <animated.meshStandardMaterial color={cdColor} wireframe={true} />
            </mesh>
          </Spinning>
        </group>
        <group position={[-0.25, 0.835, 0.12]}>
          <Text
            color="black"
            fontSize={0.0175}
            position-z={0.01}
            maxWidth={0.2}
            textAlign="center"
          >
            {songManager.name}
          </Text>
          <Button
            width={1.5}
            scale={0.6}
            position={[0, -0.065, 0.05]}
            onClick={songManager.next}
          >
            next
          </Button>
          <Button
            width={1.5}
            scale={0.6}
            position={[0, -0.135, 0.05]}
            onClick={songManager.prev}
          >
            prev
          </Button>
          <mesh>
            <planeBufferGeometry args={[0.275, 0.45]} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

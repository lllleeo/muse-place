import { BackSide, ShaderMaterial, Vector3 } from "three";
import React, { useContext, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ChadAltoSceneState } from "../chad";
import Grass from "themes/Alto/components/Grass";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";
import SeasonHandler from "./components/SeasonHandler";
import GradientSky from "./components/GradientSky";
import Nature from "./components/Nature";

const ChadKnight = () => {
  const { aa } = useContext(ChadAltoSceneState);
  const [currentSeason, setCurrentSeason] = useState<
    "Winter" | "Summer" | "Spring" | "Fall"
  >("Spring");

  const treePlacementFunc = (r: number, theta: number) => {
    const r_gen = r * 60 + 10;
    const theta_gen = theta * 2 * Math.PI;
    const cartCoords = new Vector3(0, -2, 0).setFromSphericalCoords(
      r_gen,
      1.75,
      theta_gen
    );
    cartCoords.y -= 5;
    return cartCoords;
  };

  return (
    <group>
      <SeasonHandler setCurrentSeason={setCurrentSeason} />
      <mesh>
        <boxBufferGeometry args={[200, 100, 1]} />
        <meshStandardMaterial
          color="red"
          opacity={0.25}
          side={THREE.DoubleSide}
          transparent
        />
      </mesh>
      <mesh>
        <boxBufferGeometry args={[1, 100, 200]} />
        <meshStandardMaterial
          color="green"
          opacity={0.25}
          side={THREE.DoubleSide}
          transparent
        />
      </mesh>
      <Suspense fallback={null}>
        <Preload all />
        <Grass />
      </Suspense>
      <Nature density={1500} shape={treePlacementFunc} />
    </group>
  );
};

export default ChadKnight;

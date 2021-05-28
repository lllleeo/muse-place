import { BackSide, Color, ShaderMaterial, Vector3 } from "three";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ReactThreeFiber, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ChadAltoSceneState } from "../chad";
import Grass from "./components/Grass";
import Birds from "./components/Birds";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";
import Nature from "./components/Nature";
import Tableaux from "./components/Tableaux";
import NftScrolls from "./components/Scrolls/NftScrolls";
import GradientSky from "./components/GradientSky";
import Snow from "./components/Snow";

const ChadKnight = () => {
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
      <mesh>
        <boxBufferGeometry args={[300, 100, 1]} />
        <meshStandardMaterial
          color="red"
          opacity={0.1}
          side={THREE.DoubleSide}
          visible={false}
          transparent
        />
      </mesh>
      <mesh>
        <boxBufferGeometry args={[1, 100, 200]} />
        <meshStandardMaterial
          color="green"
          opacity={0.1}
          side={THREE.DoubleSide}
          transparent
          visible={false}
        />
      </mesh>
      <Tableaux />
      <Snow particleNum={2500} />
      <GradientSky radius={200} />
      <Suspense fallback={null}>
        <Preload all />
        <Grass altCache={true} maxRadius={90} />
        <NftScrolls />
        <Nature density={1500} shape={treePlacementFunc} />
        <Birds bounds={10} />
      </Suspense>
    </group>
  );
};

export default ChadKnight;

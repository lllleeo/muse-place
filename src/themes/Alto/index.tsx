import React, { Suspense, useMemo } from "react";
import Alto from "./models/Alto";
import { Text } from "@react-three/drei";
import { ArtworkProps } from "../components/Artwork";
import { MeshStandardMaterial } from "three";
import SocialLinks from "../components/SocialLinks";
import Grass from "./components/Grass";
import Sun from "./components/Sun";
import { Perf } from "r3f-perf";
import Effects from "./components/Effects";
import Scrolls from "./components/Scrolls";
import Tablatures from "./components/Tablatures";
import Birds from "../components/Birds";

export type AltoProps = {
  name: string;
  socials: string[];
  removeWalls?: boolean;
  artwork: ArtworkProps["artwork"];
};

const Renaissance = (props: AltoProps) => {
  const { name, socials, artwork, removeWalls } = props;

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.2,
        roughness: 0.1,
      }),
    []
  );

  return (
    <group>
      <Suspense fallback={null}>
        <Alto />
        <Grass />
      </Suspense>
      <Sun />
      <Effects />
      <Scrolls />
      <Birds />
      <Tablatures socials={socials} />
      <Suspense fallback={null}>
        <group position-y={2} scale={[5, 5, 5]}>
          {/*<Artwork artwork={artwork} linkPositions={linkPositions} />*/}
        </group>
      </Suspense>
    </group>
  );
};

export default Renaissance;

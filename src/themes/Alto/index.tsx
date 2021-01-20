import React, { Suspense, useMemo } from "react";
import Alto from "./models/Alto";
import { Text } from "spacesvr";
import Artwork from "../components/Artwork";
import { ArtworkProps } from "../components/Artwork";
import { MeshStandardMaterial } from "three";
import SocialLinks from "../components/SocialLinks";
import { linkPositions } from "./assets/constants";
import FBMFog from "./components/FMBFog";

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
      </Suspense>
      <FBMFog />
      <group
        position={[-1.8, -1.75, 11.75]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[3, 3, 3]}
      >
        <Text
          text={(name || "").toUpperCase()}
          size={0.75}
          material={material}
          position={[0, 1, -0.025]}
        />
        <SocialLinks socials={socials} position={[0, 1, -0.05]} />
      </group>
      <Suspense fallback={null}>
        <group position-y={2} scale={[5, 5, 5]}>
          <Artwork artwork={artwork} linkPositions={linkPositions} />
        </group>
      </Suspense>
    </group>
  );
};

export default Renaissance;

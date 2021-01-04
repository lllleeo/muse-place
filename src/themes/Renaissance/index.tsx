import React, { Suspense, useMemo } from "react";
import Alto_01 from "./models/Alto_01";
import AltoCollisions from "./models/AltoCollisions";
import { Text } from "spacesvr";
import Artwork from "../components/Artwork";
import { ArtworkProps } from "../components/Artwork";
import { MeshStandardMaterial } from "three";
import SocialLinks from "../components/SocialLinks";
import { linkPositions } from "../Renaissance/assets/constants";

export type RenaissanceProps = {
  name: string;
  socials: string[];
  removeWalls?: boolean;
  artwork: ArtworkProps["artwork"];
};

const Renaissance = (props: RenaissanceProps) => {
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
    <group scale={[5, 5, 5]}>
      <Suspense fallback={null}>
        <Alto_01
          position-y={0.5}
          scale={[0.5, 0.5, 0.5]}
          rotation-y={Math.PI}
        />
      </Suspense>
      <Suspense fallback={null}>
        <AltoCollisions />
      </Suspense>
      <group
        position={[0, -1.5, 2.75]}
        rotation={[0, Math.PI, 0]}
        scale={[1.5, 1.5, 1.5]}
      >
        <Text
          text={(name || "").toUpperCase()}
          size={1}
          material={material}
          position={[0, 1, 0]}
        />
        <SocialLinks socials={socials} position={[0, 1, 0]} />
      </group>
      <Suspense fallback={null}>
        <Artwork artwork={artwork} linkPositions={linkPositions} />
      </Suspense>
    </group>
  );
};

export default Renaissance;

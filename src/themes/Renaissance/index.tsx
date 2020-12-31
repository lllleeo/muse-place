import React, { Suspense, useMemo } from "react";
import Alto_00 from "./models/Alto_00";
import { Interactable, Text } from "spacesvr";
import Artwork from "../components/Artwork";
import { MeshStandardMaterial } from "three";
import SocialLinks from "../components/SocialLinks";
import Lighting from "./components/Lighting";

export type RenaissanceProps = {
  name: string;
  socials: string[];
  removeWalls?: boolean;
  artwork: {
    src: string;
    link?: string;
    audio?: boolean;
    size?: [number, number];
  }[];
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
        <Alto_00
          position-y={0.5}
          scale={[0.5, 0.5, 0.5]}
          rotation-y={Math.PI}
        />
      </Suspense>
      <group position={[-1.16, 0.3, 1]} rotation={[0, Math.PI / 2, 0]}>
        <Text
          text={(name || "").toUpperCase()}
          size={1.15}
          material={material}
          position={[0, 0, -0.019]}
        />
        <SocialLinks socials={socials} />
      </group>
      <group position-z={[7]} rotation={[0, -Math.PI / 2, 0]}>
        <Text
          vAlign="center"
          text={"MADE BY MUSE   |"}
          size={0.55}
          material={material}
        />
        <Interactable
          onClick={() =>
            (window.location.href = "https://musevr.typeform.com/to/QwGYwJH2")
          }
        >
          <group position-x={0.44} position-y={-0.003}>
            <Text
              vAlign="center"
              text="Want Your Own? Click Here"
              size={0.55}
              position-y={0}
              material={material}
            />
          </group>
        </Interactable>
      </group>
      <Lighting />
      <Suspense fallback={null}>
        <Artwork artwork={artwork} />
      </Suspense>
    </group>
  );
};

export default Renaissance;

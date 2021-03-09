import { Suspense, useMemo } from "react";
import Structure_00 from "./models/Structure_00";
import CodameCollisions from "./models/CodameCollisions";
import GothamColliderNowalls from "./models/GothamColliderNowalls";
import { Interactable } from "spacesvr";
import { Text } from "@react-three/drei";
import Artwork from "../components/Artwork";
import { ArtworkProps } from "../components/Artwork";
import { linkPositions } from "./assets/constants";
import { MeshStandardMaterial } from "three";
import SocialLinks from "../components/SocialLinks";

export type GothamProps = {
  name: string;
  socials: string[];
  removeWalls?: boolean;
  artwork: ArtworkProps["artwork"];
  night?: boolean;
};

const Gotham = (props: GothamProps) => {
  const { name, socials, artwork, removeWalls, night } = props;

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: night ? 0xffffff : 0x000000,
        metalness: 0.2,
        roughness: 0.1,
      }),
    [night]
  );

  return (
    <group>
      <Suspense fallback={null}>
        <Structure_00 removeWalls={removeWalls} night={night} />
      </Suspense>
      <Suspense fallback={null}>
        {removeWalls ? (
          <GothamColliderNowalls position-y={-0.1} />
        ) : (
          <CodameCollisions position-y={-0.1} />
        )}
      </Suspense>
      <group position={[-5.8, 1.5, 5]} rotation={[0, Math.PI / 2, 0]}>
        {/* @ts-ignore */}
        <Text fontSize={0.8} position={[0, 0, 0.315]} material={material}>
          {(name || "").toUpperCase()}
        </Text>
        <SocialLinks position={[0, -0.85, 0.31]} socials={socials} />
      </group>
      <group position={[2.49, 0.165, 3.2]} rotation={[0, -Math.PI / 2, 0]}>
        {/* @ts-ignore */}
        <Text anchorY="middle" fontSize={0.15} material={material}>
          MADE BY MUSE{"      "}|
        </Text>
        <Interactable
          onClick={() =>
            (window.location.href = "https://musevr.typeform.com/to/QwGYwJH2")
          }
        >
          <group position-x={1.8}>
            {/* @ts-ignore */}
            <Text anchorY="middle" fontSize={0.15} material={material}>
              Want Your Own? Click Here
            </Text>
          </group>
        </Interactable>
      </group>
      <Artwork artwork={artwork} linkPositions={linkPositions} />
    </group>
  );
};

export default Gotham;

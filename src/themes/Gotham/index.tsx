import { Suspense, useMemo } from "react";
import Structure_00 from "./models/Structure_00";
import CodameCollisions from "./models/CodameCollisions";
import GothamColliderNowalls from "./models/GothamColliderNowalls";
import { Interactable, Text } from "spacesvr";
import Artwork from "./components/Artwork";
import { MeshStandardMaterial } from "three";
import SocialLinks from "./components/SocialLinks";

export type GothamProps = {
  name: string;
  socials: string[];
  removeWalls?: boolean;
  artwork: {
    link?: string;
    src: string;
  }[];
};

const Gotham = (props: GothamProps) => {
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
        <Structure_00 position-y={0.1155} />
      </Suspense>
      <Suspense fallback={null}>
        {removeWalls ? (
          <GothamColliderNowalls position-y={-0.05} />
        ) : (
          <CodameCollisions position-y={-0.05} />
        )}
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
      <group position={[0.538, 0.08, 0.1]} rotation={[0, -Math.PI / 2, 0]}>
        <Text
          vAlign="center"
          text={"MADE BY MUSE   |   "}
          size={0.4}
          material={material}
        />
        <Interactable
          onClick={() =>
            (window.location.href =
              "https://l.instagram.com/?u=https%3A%2F%2Fmusevr.typeform.com%2Fto%2FQwGYwJH2&e=ATP6n0HL1bWIb7h6EexpyQg1QZKKWgW-CT4_rEHD_kSluA0ZMFnogSEpCyeNkyozCUG59zfYh1_Obiw2pRZtfA&s=1")
          }
        >
          <group>
            <Text
              vAlign="center"
              text="Want Your Own?"
              size={0.4}
              material={material}
            />
            <Text
              vAlign="center"
              text="Click Here"
              size={0.4}
              material={material}
            />
          </group>
        </Interactable>
      </group>
      <Artwork artwork={artwork} />
    </group>
  );
};

export default Gotham;

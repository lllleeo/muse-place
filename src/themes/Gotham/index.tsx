import { Suspense, useMemo } from "react";
import Structure_00 from "./models/Structure_00";
import CodameCollisions from "./models/CodameCollisions";
import { Text } from "spacesvr";
import Artwork from "./components/Artwork";
import { MeshStandardMaterial } from "three";
import SocialLinks from "./components/SocialLinks";

export type GothamProps = {
  name: string;
  socials: string[];
  artwork: {
    link?: string;
    src: string;
  }[];
};

const Gotham = (props: GothamProps) => {
  const { name, socials, artwork } = props;

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
        <CodameCollisions position-y={-0.05} />
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
      <Artwork artwork={artwork} />
    </group>
  );
};

export default Gotham;

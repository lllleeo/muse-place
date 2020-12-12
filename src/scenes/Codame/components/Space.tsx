import { Suspense, useMemo } from "react";
import Structure_00 from "../models/Structure_00";
import CodameCollisions from "../models/CodameCollisions";
import Social from "./Social";
import { Text } from "spacesvr";
import Links from "./Links";
import { MeshStandardMaterial } from "three";

type SpaceProps = {
  linkData: {
    link?: string;
    desc: string;
    src: string;
  }[];
  position?: [number, number, number];
  name?: string;
  socials?: {
    instagram?: string;
    twitter?: string;
    web?: string;
  };
};

const Space = (props: SpaceProps) => {
  const { position = [0, 0, 0], linkData, socials, name } = props;

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
    <group scale={[5, 5, 5]} position={position}>
      <Suspense fallback={null}>
        <Structure_00 position-y={0.1155} />
      </Suspense>
      <Suspense fallback={null}>
        <CodameCollisions />
      </Suspense>
      <group position={[-1.16, 0.3, 1]} rotation={[0, Math.PI / 2, 0]}>
        <Text
          text={(name || "").toUpperCase()}
          size={1.15}
          material={material}
          position={[0, 0, -0.01]}
        />
        {socials && (
          <group position={[0, -0.17, 0.075]} scale={[0.225, 0.225, 0.225]}>
            {socials.instagram && (
              <Social
                type="instagram"
                link={socials.instagram}
                position={[-0.75, 0, 0.075]}
              />
            )}
            {socials.twitter && (
              <Social type="twitter" link={socials.twitter} />
            )}
            {socials.web && (
              <Social type="web" link={socials.web} position={[0.75, 0, 0]} />
            )}
          </group>
        )}
      </group>
      <Links links={linkData} />
      <group
        position={[0.27, 0.195, -0.55]}
        rotation={[0, -Math.PI / 5, 0]}
        name="Muse & Codame"
      >
        <Text
          text="Muse"
          size={1.18}
          material={material}
          position={[-0.06, 0, 0]}
        />
        <Text
          text="&"
          size={1.4}
          material={material}
          position={[0.22, -0.01, 0]}
          rotation={[0, 0, Math.PI / 6.5]}
        />
        <Text
          text="Codame"
          size={1.18}
          position={[0, -0.12, 0]}
          material={material}
        />
      </group>
    </group>
  );
};

export default Space;

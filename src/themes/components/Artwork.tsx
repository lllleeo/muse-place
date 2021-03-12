import Link from "./Link";
import { Vector3 } from "three";

export type ArtworkProps = {
  artwork: {
    src: string;
    link?: string;
    audio?: boolean;
    size?: number;
  }[];
  linkPositions: {
    p: Vector3;
    r: number;
  }[];
};

const Artwork = (props: ArtworkProps) => {
  const { artwork, linkPositions } = props;

  return (
    <group>
      {artwork.map((piece, i) => (
        <Link
          position={linkPositions[i].p}
          rotY={linkPositions[i].r}
          audio={piece.audio}
          link={piece.link}
          size={piece.size}
          src={piece.src}
          key={i}
        />
      ))}
    </group>
  );
};

export default Artwork;

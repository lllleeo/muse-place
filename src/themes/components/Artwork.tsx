import Link from "./Link";
import { GothamProps } from "../Gotham";
import { Vector3 } from "three";

type ArtworkProps = {
  artwork: GothamProps["artwork"];
  linkPositions: {
    p: Vector3;
    r: number;
  }[];
};

const Artwork = (props: ArtworkProps) => {
  const { artwork, linkPositions } = props;

  return (
    <group scale={[1 / 20, 1 / 20, 1 / 20]}>
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

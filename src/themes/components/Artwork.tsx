import { Suspense } from "react";
import Link from "./Link";
import { linkPositions } from "../Gotham/assets/constants";
import { GothamProps } from "../Gotham";

type ArtworkProps = {
  artwork: GothamProps["artwork"];
};

const Artwork = (props: ArtworkProps) => {
  const { artwork } = props;

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

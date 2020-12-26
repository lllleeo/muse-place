import { Suspense } from "react";
import Link from "./Link";
import { linkPositions } from "../assets/constants";
import { GothamProps } from "../index";

type ArtworkProps = {
  artwork: GothamProps["artwork"];
};

const Artwork = (props: ArtworkProps) => {
  const { artwork } = props;

  return (
    <group scale={[1 / 20, 1 / 20, 1 / 20]}>
      {artwork.map((piece, i) => (
        <Suspense fallback={null}>
          <Link
            position={linkPositions[i].p}
            rotY={linkPositions[i].r}
            audio={piece.audio}
            link={piece.link}
            size={piece.size}
            src={piece.src}
            key={i}
          />
        </Suspense>
      ))}
    </group>
  );
};

export default Artwork;

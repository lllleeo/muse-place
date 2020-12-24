import { Suspense } from "react";
import Link from "./Link";
import { linkPositions } from "../assets/constants";

type ArtworkProps = {
  artwork: {
    link?: string;
    src: string;
    size?: [number, number];
  }[];
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

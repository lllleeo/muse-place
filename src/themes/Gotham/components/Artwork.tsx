import Link from "./Link";
import { linkPositions } from "../assets/constants";

type ArtworkProps = {
  artwork: {
    link?: string;
    src: string;
  }[];
};

const Artwork = (props: ArtworkProps) => {
  const { artwork } = props;

  return (
    <group scale={[1 / 20, 1 / 20, 1 / 20]}>
      {artwork.map((piece, i) => (
        <Link
          position={linkPositions[i].p}
          rotY={linkPositions[i].r}
          link={piece.link}
          src={piece.src}
          key={i}
        />
      ))}
    </group>
  );
};

export default Artwork;

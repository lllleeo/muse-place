import { Image } from "spacesvr";
const SILKS_CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/silksbyvp";

const SIZE = 1.5;

const Gallery = () => {
  return (
    <group name="gallery">
      <group
        name="back-wall"
        rotation-y={Math.PI}
        position={[0, SIZE * 0.75, 4.75]}
      >
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/bench.jpg`}
          size={[(1337 / 2000) * SIZE, SIZE]}
          framed
          position-x={-4}
        />
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/bike.jpg`}
          size={[(684 / 1024) * SIZE, SIZE]}
          framed
          position-x={-2}
        />
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/camo.jpg`}
          size={[(855 / 1280) * SIZE, SIZE]}
          framed
        />
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/eyes.jpg`}
          size={[(1334 / 2038) * SIZE, SIZE]}
          framed
          position-x={2}
        />
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/gold.jpg`}
          size={[(1672 / 2034) * SIZE, SIZE]}
          framed
          position-x={4}
        />
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/laker.jpg`}
          size={[(724 / 1086) * SIZE, SIZE]}
          framed
          position-x={6}
        />
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/mal.jpg`}
          size={[(1558 / 2036) * SIZE, SIZE]}
          framed
          position-x={8}
        />
      </group>
      <group name="front-wall" position={[0, SIZE * 0.75, 1.15]}>
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/pink.jpg`}
          size={[(1630 / 2038) * SIZE, SIZE]}
          framed
          position-x={-8}
        />
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/sleep.jpg`}
          size={[(1626 / 2042) * SIZE, SIZE]}
          framed
          position-x={-6}
        />
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/squat.jpg`}
          size={[(1337 / 2000) * SIZE, SIZE]}
          framed
          position-x={-4}
        />
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/stern.jpg`}
          size={[(724 / 1086) * SIZE, SIZE]}
          framed
          position-x={-2}
        />
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/sway.jpg`}
          size={[(603 / 746) * SIZE, SIZE]}
          framed
          position-x={2.25}
        />
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/tres.jpg`}
          size={[(1438 / 2038) * SIZE, SIZE]}
          framed
          position-x={4}
        />
      </group>
      <group
        name="left-wall"
        position={[5.04, SIZE * 0.75, 3]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${SILKS_CONTENT_FOLDER}/gallery/vp.jpg`}
          size={[(1584 / 2376) * 3, 3]}
        />
      </group>
    </group>
  );
};

export default Gallery;

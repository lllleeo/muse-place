import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Keyframe } from "spacesvr";
import { Vector3 } from "three";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const Pacemorenobongiovanni = dynamic(
  import("scenes/Gotham/Pacemorenobongiovanni"),
  { ssr: false }
);

const ARTIST = {
  name: "Pace Moreno Bongiovanni",
  socials: [
    "https://www.youtube.com/channel/UCE1PjJv7VvBKM9SISWexGIw/featured",
    "https://www.instagram.com/pachman77/",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/pachman77`;
const artwork = [
  {
    src: `${url}/1.jpg`,
  },
];

const keyframes: Keyframe[] = [
  { position: new Vector3(-4, 1, 5), label: "start" },
  { position: new Vector3(-2, 1, 5), label: "pedestal" },
  { position: new Vector3(1.1, 1, 7), label: "screen 1" },
  { position: new Vector3(-1.1, 1, 0), label: "screen 2" },
  { position: new Vector3(-2, 1, 5), label: "pedestal" },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pace Moreno Bongiovanni | Muse Place</title>
      </Head>
      <Gotham
        artwork={artwork}
        keyframes={keyframes}
        socials={ARTIST.socials}
        name={ARTIST.name}
        map="city"
        scenePos={[0, -20, 0]}
        fogNear={0}
        fogFar={150}
        fogColor={"#000000"}
        hMapScale={30}
        xzMapScale={100}
        floorColor="black"
        removeWalls
        night
      >
        <Pacemorenobongiovanni />
      </Gotham>
    </>
  );
};

export default LinkTree;

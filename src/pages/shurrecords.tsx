import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "13106 | Shur Records",
  socials: [
    "https://www.instagram.com/shurrecords/",
    "https://open.spotify.com/artist/4LEnorY6lMcW5JiwUOkeeo?si=gfyh-wwwQqmABcrTxmAX_Q",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/shurrecords`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.jpg`,
    audio: true,
    size: [1080, 1080],
  },
  {
    src: `${url}/2.mp4`,
    size: [640, 640],
  },
  {
    src: `${url}/3.jpg`,
    size: [1080, 1346],
  },
  {
    src: `${url}/4.jpg`,
    size: [1080, 1351],
  },
  {
    src: `${url}/5.jpg`,
    size: [1080, 1350],
  },
  {
    src: `${url}/6.jpg`,
    size: [1080, 1349],
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>13106 | Shur Records</title>
      </Head>
      <Gotham
        artwork={artwork}
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
        night
        stars
      />
    </>
  );
};

export default LinkTree;

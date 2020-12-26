import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "TDWAV",
  socials: [
    "https://www.instagram.com/tdwav/",
    "https://soundcloud.com/prodbytango/hold/",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/tdwav`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.mp4`,
    audio: true,
    size: [640, 720],
  },
  {
    src: `${url}/2.jpg`,
    size: [1030, 1080],
  },
  {
    src: `${url}/3.jpg`,
    size: [1080, 810],
  },
  {
    src: `${url}/4.jpg`,
    size: [1080, 722],
  },
  {
    src: `${url}/5.jpg`,
    size: [1080, 607],
  },
  {
    src: `${url}/6.jpg`,
    size: [692, 551],
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>tdwav | Muse Place</title>
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

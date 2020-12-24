import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Johnny Brown",
  socials: [
    "https://www.instagram.com/thatjonnybrown/",
    "https://open.spotify.com/album/4KBF9pDbPkrUwC7MGuWXkT?si=wzyD9XVQRTmHSyHVW6y8kQ",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/johnnybrown`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.jpg`,
  },
  {
    src: `${url}/2.jpg`,
    size: [2406, 1606],
  },
  {
    src: `${url}/6.mp4`,
  },
  {
    src: `${url}/4.jpg`,
    size: [1080, 1350],
  },
  {
    src: `${url}/3.jpg`,
    size: [1080, 1346],
  },
  {
    src: `${url}/5.mp4`,
    size: [1280, 720],
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Johnny Brown | Muse Place</title>
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

import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Antonio Brown",
  socials: [
    "https://www.instagram.com/shdwgxd/",
    "https://twitter.com/shdwgxd",
    "mailto:antoniollbrown@gmail.com",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/antoniobrown`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.jpg`,
    size: [1080, 692],
  },
  {
    src: `${url}/2.jpg`,
  },
  {
    src: `${url}/3.mp4`,
    size: [640, 800],
  },
  {
    src: `${url}/4.jpg`,
  },
  {
    src: `${url}/5.jpg`,
  },
  {
    src: `${url}/6.jpg`,
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Antonio Brown | Muse Place</title>
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
        night
        stars
      />
    </>
  );
};

export default LinkTree;

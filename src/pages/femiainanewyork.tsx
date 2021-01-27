import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Femi Aina New York",
  socials: [
    "https://www.instagram.com/femiainanewyork/",
    "https://femiainanewyork.com/",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/femiainanewyork`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.png`,
    audio: true,
    size: [720, 720],
  },
  {
    src: `${url}/2.png`,
    size: [720, 720],
  },
  {
    src: `${url}/3.png`,
    size: [720, 720],
  },
  {
    src: `${url}/4.jpg`,
    size: [720, 720],
  },
  {
    src: `${url}/5.png`,
    size: [720, 720],
  },
  {
    src: `${url}/6.jpg`,
    size: [720, 720],
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Femi Aina New York</title>
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
        stars
      />
    </>
  );
};

export default LinkTree;

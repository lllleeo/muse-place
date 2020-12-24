import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import DepthImage from "../themes/Gotham/components/DepthImage";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const Kr3wcial = dynamic(import("scenes/Gotham/Kr3wcial"), { ssr: false });

const ARTIST = {
  name: "Kr3wcial",
  socials: [
    "https://www.ikr3wcial.com",
    "https://twitter.com/iKr3wcial",
    "https://www.instagram.com/ikr3wcial/",
    "https://www.youtube.com/OutlanderMusic",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kr3wcial`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.jpg`,
  },
  {
    src: `${url}/2.jpg`,
    size: [2406, 1606],
  },
  {
    src: `${url}/3.jpg`,
    size: [1440, 960],
  },
  {
    src: `${url}/4.jpg`,
  },
  {
    src: `${url}/5.jpg`,
    size: [1040, 1396],
  },
  {
    src: `${url}/6.jpg`,
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kr3wcial | Muse Place</title>
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
      >
        <Kr3wcial />
      </Gotham>
    </>
  );
};

export default LinkTree;
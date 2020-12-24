import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const KiraX23 = dynamic(import("scenes/Gotham/KiraX23"), { ssr: false });

const ARTIST = {
  name: "KIRA-X23",
  socials: [
    "https://soundcloud.com/experiment23",
    "https://twitter.com/djkirax23",
    "https://www.instagram.com/djkirax23/",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kirax23`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.jpg`,
    size: [2000, 3000],
  },
  {
    src: `${url}/2.jpg`,
    size: [1125, 1414],
  },
  {
    src: `${url}/3.jpg`,
    size: [986, 1226],
  },
  {
    src: `${url}/4.jpg`,
    size: [2240, 2800],
  },
  {
    src: `${url}/5.jpg`,
    size: [1250, 1873],
  },
  {
    src: `${url}/6.jpg`,
    size: [1958, 2448],
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>KIRA-X23 | Muse Place</title>
      </Head>
      <Gotham
        artwork={artwork}
        socials={ARTIST.socials}
        name=""
        map="city"
        scenePos={[0, -20, 0]}
        fogNear={0}
        fogFar={150}
        fogColor={"#000000"}
        hMapScale={30}
        xzMapScale={100}
        floorColor="black"
        night
        audio={`${url}/hottopic-1.mp3`}
      >
        <KiraX23 />
      </Gotham>
    </>
  );
};

export default LinkTree;

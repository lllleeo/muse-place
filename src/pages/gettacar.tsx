import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Gettacar",
  socials: [
    "https://www.instagram.com/Gettacar",
    "https://www.gettacar.com/?utm_source=Instagram&utm_medium=bio%20link&utm_campaign=Instagram_bio_link",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/gettacar`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.jpg`,
    size: [1080, 1350],
  },
  {
    src: `${url}/2.jpg`,
    size: [640, 800],
  },
  {
    src: `${url}/3.jpg`,
    size: [1080, 1350],
  },
  {
    src: `${url}/4.jpg`,
    size: [640, 800],
    audio: true,
  },
  {
    src: `${url}/5.JPG`,
    size: [674, 843],
  },
  {
    src: `${url}/6.JPG`,
    size: [1080, 1349],
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gettacar | Muse Place</title>
      </Head>
      <Gotham
        artwork={artwork}
        socials={ARTIST.socials}
        name={ARTIST.name}
        map="city"
        scenePos={[0, -20, 0]}
        fogNear={50}
        fogFar={150}
        fogColor="#74c044"
        floorColor="black"
        hMapScale={30}
        xzMapScale={100}
        night
        stars
      />
    </>
  );
};

export default LinkTree;

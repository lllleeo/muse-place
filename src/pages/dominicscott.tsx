import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Domnic Scott",
  socials: [
    "https://www.instagram.com/dominic.scott/",
    "https://open.spotify.com/track/6oa53wMlVD2tNuMdEaXJLF?si=R816oYHnSku5IDOrIBZwZQ",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/dominicscott`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.mp4`,
    audio: true,
    size: [720, 406],
  },
  {
    src: `${url}/2.jpg`,
    size: [640, 798],
  },
  {
    src: `${url}/3.jpg`,
    size: [720, 406],
  },
  {
    src: `${url}/4.mp4`,
    size: [720, 720],
  },
  {
    src: `${url}/5.jpg`,
    size: [640, 334],
  },
  {
    src: `${url}/6.jpg`,
    size: [640, 800],
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Domnic Scott</title>
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

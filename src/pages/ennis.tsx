import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const ARTIST = {
  name: "Ennis",
  socials: [
    "https://www.instagram.com/onretaineragency/",
    "http://www.perspective.energy/",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/ennis`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.mp4`,
  },
  {
    src: `${url}/2.mp4`,
  },
  {
    src: `${url}/3.mp4`,
  },
  {
    src: `${url}/4.mp4`,
    audio: true,
  },
  {
    src: `${url}/5.mp4`,
  },
  {
    src: `${url}/6.mp4`,
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ennis</title>
        <title>Gallery</title>
      </Head>
      <Gotham
        artwork={artwork}
        socials={ARTIST.socials}
        name={ARTIST.name}
        map="city"
        scenePos={[0, -20, 0]}
        fogNear={0}
        fogFar={150}
        fogColor={"white"}
        hMapScale={30}
        xzMapScale={100}
        floorColor="white"
        lightColor="#ffffff"
      ></Gotham>
    </>
  );
};

export default LinkTree;

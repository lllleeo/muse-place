import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Your Brother Will",
  socials: ["https://www.instagram.com/yourbrotherwill"],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/yourbrotherwill`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.jpg`,
  },
  {
    src: `${url}/2.jpg`,
  },
  {
    src: `${url}/3.jpg`,
  },
  {
    src: `${url}/4.jpg`,
    audio: true,
  },
  {
    src: `${url}/5.mp4`,
  },
  {
    src: `${url}/6.JPG`,
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Brother Will | Muse Place</title>
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

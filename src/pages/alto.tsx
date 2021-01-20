import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { AltoSceneProps } from "scenes/Alto";

const Standard = dynamic(import("scenes/Alto"), { ssr: false });

const ARTIST = {
  name: "Alto",
  socialLinks: {
    instagram: "https://www.instagram.com/musehq/",
    twitter: "https://twitter.com/musehq_",
    web: "https://www.spaces.gallery/",
  },
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kr3wcial`;
const artwork: AltoSceneProps["artwork"] = [
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
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name} | Muse Place</title>
      </Head>
      <Standard
        socials={[]}
        artwork={artwork}
        socialLinks={ARTIST.socialLinks}
        name={ARTIST.name}
        map="canyon"
        fogColor="white"
        fogNear={15}
        fogFar={150}
        far={300}
        scenePos={[-15, -3, -10]}
        hMapScale={3}
        xzMapScale={200}
        floorColor="black"
        audio="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/whoisabnel/dark.mp3"
      />
    </>
  );
};

export default LinkTree;

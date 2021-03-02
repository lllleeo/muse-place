import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import DepthImage from "../themes/Gotham/components/DepthImage";
import { GothamProps } from "../themes/Gotham";
import { Audio, Image } from "spacesvr";
import { Vector3 } from "three";
const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Eriel Indigo",
  socials: [
    "https://www.erielindigo.com/",
    "https://twitter.com/erielindigo",
    "https://www.instagram.com/erielindigo/",
    "https://www.youtube.com/erielindigo",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/erielindigo`;
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
    src: `${url}/4.mp4`,
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
        <title>Eriel Indigo | Muse Place</title>
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
        <Audio
          url="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/erielindigo/eriel.mp3"
          position={new Vector3(1.9, 0, -3.2)}
          volume={1}
        />
      </Gotham>
    </>
  );
};

export default LinkTree;

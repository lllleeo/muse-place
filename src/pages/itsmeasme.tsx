import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Gotham, { GothamProps } from "../themes/Gotham";
const Codame = dynamic(import("../scenes/Gotham/Codame"), { ssr: false });

const ARTIST = {
  name: "Me As Me",
  socialLinks: {
    instagram: "https://www.instagram.com/itsmeasme",
    spotify:
      "https://open.spotify.com/artist/0whePKSPIr8YOevyI5hjpo?si=cmghAscfS9SjKtIp3kbG_w",
    web: "https://www.measme.me/shop",
  },
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/itsmeasme`;
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
        <title>{ARTIST.name} | Muse Place</title>
      </Head>
      <Codame
        socials={[]}
        artwork={artwork}
        socialLinks={ARTIST.socialLinks}
        name={ARTIST.name}
        map="city"
        far={100}
        scenePos={[0, -20, 0]}
        fogNear={0}
        fogFar={50}
        fogColor={"#000000"}
        hMapScale={30}
        xzMapScale={100}
        floorColor="black"
      />
    </>
  );
};

export default LinkTree;

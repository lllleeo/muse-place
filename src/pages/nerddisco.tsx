import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Codame = dynamic(import("scenes/Codame"), { ssr: false });

const ARTIST = {
  number: 34,
  name: "NERD DISCO",
  socialLinks: {
    instagram: "https://www.instagram.com/NERDDISCO/",
    twitter: "https://twitter.com/nerddisco",
    web: "https://nerddis.co/",
  },
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/codame/ARTISTS`;
const linkData = [
  {
    src: `${url}/${ARTIST.number}/1.jpg`,
  },
  {
    src: `${url}/${ARTIST.number}/2.jpg`,
  },
  {
    src: `${url}/${ARTIST.number}/3.jpg`,
  },
  {
    src: `${url}/${ARTIST.number}/4.jpg`,
  },
  {
    src: `${url}/${ARTIST.number}/5.jpg`,
  },
  {
    src: `${url}/${ARTIST.number}/6.jpg`,
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Codame</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Codame
        socials={[]}
        artwork={linkData}
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
        night
      />
    </>
  );
};

export default LinkTree;

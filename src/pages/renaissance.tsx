import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Standard = dynamic(import("scenes/Renaissance/Standard"), { ssr: false });

const ARTIST = {
  number: 45,
  name: "Renaissance",
  socialLinks: {
    instagram: "https://www.instagram.com/musehq/",
    twitter: "https://twitter.com/musehq_",
    web: "https://www.spaces.gallery/",
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
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name} | Muse Place</title>
      </Head>
      <Standard
        socials={[]}
        artwork={linkData}
        socialLinks={ARTIST.socialLinks}
        name={ARTIST.name}
        map="canyon"
        fogColor="white"
        fogNear={15}
        fogFar={100}
        far={300}
        scenePos={[-15, -3, -10]}
        hMapScale={3}
        xzMapScale={200}
        floorColor="black"
      />
    </>
  );
};

export default LinkTree;

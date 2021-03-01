import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham/index.tsx"), { ssr: false });

const ARTIST = {
  name: "Veltson",
  socialLinks: {
    instagram: "https://instagram.com/veltsonbastien",
    twitter: "https://twitter.com/veltsonbastien",
    web: "https://amberxmedia.com",
  },
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/veltsonbastien`;
const linkData = [
  {
    src: `${url}/1.JPG`,
  },
  {
    src: `${url}/2.JPG`,
  },
  {
    src: `${url}/3.JPG`,
  },
  {
    src: `${url}/4.JPG`,
  },
  {
    src: `${url}/5.JPG`,
  },
  {
    src: `${url}/6.JPG`,
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name} | Muse Place</title>
      </Head>
      <Gotham
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

import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Codame = dynamic(import("scenes/Gotham/Codame"), { ssr: false });

const ARTIST = {
  name: "Vindit",
  socialLinks: {
    instagram: "https://www.instagram.com/vind1t",
    spotify:
      "https://open.spotify.com/artist/7IMqmZRaebLWN3e0uxkrIP?si=6P0CJ5VoT1u4rHmAxkSO3A",
  },
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/vind1t`;
const linkData = [
  {
    src: `${url}/0.jpg`,
  },
  {
    src: `${url}/1.mp4`,
  },
  {
    src: `${url}/2.jpg`,
  },
  {
    src: `${url}/3.jpg`,
  },
  {
    src: `${url}/4.jpg`,
  },
  {
    src: `${url}/5.mp4`,
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

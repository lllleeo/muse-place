import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Rei the Imperial",
  socialLinks: [
    "https://www.instagram.com/reitheimperial",
    "https://open.spotify.com/track/398fpovo0TkrjangLLYgNH?si=ruzf4GEASum3BX0d-f-dHg",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/reitheimperial`;
const linkData = [
  {
    src: `${url}/1.jpg`,
  },
  {
    src: `${url}/2.mp4`,
  },
  {
    src: `${url}/3.mp4`,
  },
  {
    src: `${url}/4.jpg`,
  },
  {
    src: `${url}/5.jpg`,
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
      <Gotham
        artwork={linkData}
        socials={ARTIST.socialLinks}
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
        audio="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/reitheimperial/Super+Sunday.mp3"
        night
      />
    </>
  );
};

export default LinkTree;

import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import DepthImage from "../themes/Gotham/components/DepthImage";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Kr3wcial",
  socials: [
    "https://twitter.com/iKr3wcial",
    "https://open.spotify.com/artist/286zFnBdNwLtIC6Uo4l1t3?si=fv199_S8RZyQG1UVpCow5A",
    "https://www.instagram.com/ikr3wcial/",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kr3wcial`;
const artwork = [
  {
    src: `${url}/1.jpg`,
  },
  {
    src: `${url}/2.mp4`,
  },
  {
    src: `${url}/3.jpg`,
  },
  {
    src: `${url}/4.mp4`,
  },
  {
    src: `${url}/5.mp4`,
  },
  {
    src: `${url}/6.jpg`,
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kr3wcial's Muse Place</title>
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
        audio={
          "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kr3wcial/loveyou.mp3"
        }
      >
        <DepthImage
          position={[-6, 1, 2.5]}
          rotation-y={Math.PI / 2}
          img="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kr3wcial/3.jpg"
          depth="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kr3wcial/displace.png"
        />
      </Gotham>
    </>
  );
};

export default LinkTree;

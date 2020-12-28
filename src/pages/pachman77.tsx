import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const Pachman77 = dynamic(import("scenes/Gotham/Pachman77"), { ssr: false });

const ARTIST = {
  name: "Pachman77",
  socials: [
    "https://soundcloud.com/experiment23",
    "https://twitter.com/djkirax23",
    "https://www.instagram.com/djkirax23/",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/pachman77`;
const artwork = [
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
        <title>Pace Moreno Bongiovanni | Muse Place</title>
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
        removeWalls
        night
      >
        <Pachman77 />
      </Gotham>
    </>
  );
};

export default LinkTree;

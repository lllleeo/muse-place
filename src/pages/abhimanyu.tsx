import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Abhimanyu Bhadauria",
  socials: ["https://www.behance.net/mnayu", "https://dribbble.com/Mnayu"],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/abhimanyu`;
const artwork: GothamProps["artwork"] = [
  {
    src: `https://www.behance.net/gallery/107055845/Parallel-Dimensions-Submission`,
    size: [1080, 1350],
  },
  {
    src: `https://www.behance.net/gallery/110121293/Space-Podcast`,
    size: [640, 800],
  },
  {
    src: `${url}/3.png`,
    size: [1080, 1350],
  },
  {
    src: `https://www.behance.net/gallery/91568395/In-my-head`,
    size: [640, 800],
    audio: true,
  },
  {
    src: `${url}/5.png`,
    size: [674, 843],
  },
  {
    src: `${url}/6.png`,
    size: [1080, 1349],
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Abhimanyu Bhadauria | Muse Place</title>
      </Head>
      <Gotham
        artwork={artwork}
        socials={ARTIST.socials}
        name={ARTIST.name}
        map="city"
        scenePos={[0, -20, 0]}
        fogNear={50}
        fogFar={150}
        fogColor="#74c044"
        floorColor="black"
        hMapScale={30}
        xzMapScale={100}
        night
        stars
      />
    </>
  );
};

export default LinkTree;

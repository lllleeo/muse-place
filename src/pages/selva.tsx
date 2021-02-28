import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { ScrollData } from "../themes/Alto/types/scroll";

const Standard = dynamic(import("scenes/Alto"), { ssr: false });

const ARTIST = {
  name: "Selva",
  socialLinks: ["https://www.instagram.com/selva9442/"],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/selva`;

const scrollData: ScrollData[] = [
  {
    img: `${url}/1.JPG`,
    text: "Cyberjunk",
    position: [15, -0.61, 30],
  },
  {
    img: `${url}/2.mp4`,
    text: "A Smooth Sea never made a Skilled Sailor...",
    position: [-15, -0.61, 30],
  },
  {
    img: `${url}/3.mp4`,
    text: "BB8 goes Halloween mode 🎃🎃",
    position: [12.36, 1.21, -15.84],
  },
  {
    img: `${url}/4.mp4`,
    text: "Your wings already Exist all you have to do is Fly",
    position: [-15, -1.13, -30],
  },
  {
    img: `${url}/5.jpg`,
    text: "Gipsy Danger Made with Blender 2.91",
    position: [30.52, -0.39, 0.97],
  },
  {
    img: `${url}/6.jpg`,
    text: "Hey George...",
    position: [-12.04, 3.55, -5],
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name} | Muse Place</title>
      </Head>
      <Standard
        scrollData={scrollData}
        socials={ARTIST.socialLinks}
        audio="https://d27rt3a60hh1lx.cloudfront.net/audio/ini-bestmixever.mp3"
      />
    </>
  );
};

export default LinkTree;

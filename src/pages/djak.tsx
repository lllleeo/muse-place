import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Djak",
  socialLinks: [
    "https://www.instagram.com/dieanothernight/",
    "https://artistsourced.com/collections/djak",
    "https://twitter.com/almightyDJAK",
    "https://foundation.app/@djak",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/djak`;
const linkData = [
  {
    src: `${url}/1.jpeg`,
  },
  {
    src: `${url}/2.jpeg`,
  },
  {
    src: `${url}/3.jpg`,
  },
  {
    src: `${url}/4.mp4`,
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
        <title>{ARTIST.name} | Muse Place</title>
      </Head>
      <Gotham
        artwork={linkData}
        socials={ARTIST.socialLinks}
        name={ARTIST.name}
        night
      />
    </>
  );
};

export default LinkTree;

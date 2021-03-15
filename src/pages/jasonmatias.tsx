import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const ARTIST = {
  name: "Jason Matias",
  socials: [
    "https://www.instagram.com/realjasonmatias",
    "https://jasonmatias.com",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/jasonmatias`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.jpg`,
    size: 1.2,
  },
  {
    src: `${url}/2.jpg`,
    size: 1.2,
  },
  {
    src: `${url}/3.jpg`,
    size: 1.2,
  },
  {
    src: `${url}/4.mp4`,
    size: 1.2,
    audio: true,
  },
  {
    src: `${url}/5.jpg`,
    size: 1.2,
  },
  {
    src: `${url}/6.jpeg`,
    size: 1.2,
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jason Matias</title>
        <title>Gallery</title>
      </Head>
      <Gotham
        artwork={artwork}
        socials={ARTIST.socials}
        name={ARTIST.name}
        emailCollection
      />
    </>
  );
};

export default LinkTree;

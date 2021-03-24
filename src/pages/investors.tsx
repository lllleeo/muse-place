import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const Investors = dynamic(import("scenes/Gotham/Investors"), {
  ssr: false,
});
const ARTIST = {
  name: "Muse Investors",
  socials: [
    "https://app.slidebean.com/p/pm6sgokwzm/Pitch-Deck-V10-NGF",
    "https://muse.place/muse",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/investors`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.jpg`,
    size: 2.8,
  },
  {
    src: `${url}/2.jpg`,
    size: 2.8,
  },
  {
    src: `${url}/5.mp4`,
    size: 2.8,
    audio: true,
  },
  {
    src: `${url}/4.jpg`,
    size: 2.8,
  },
  {
    src: `${url}/3.jpg`,
    size: 2.8,
    audio: true,
  },
  {
    src: `${url}/6.jpg`,
    size: 2.8,
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Investors</title>
        <title>Gallery</title>
      </Head>
      <Gotham
        artwork={artwork}
        socials={ARTIST.socials}
        name={ARTIST.name}
        emailCollection
      >
        <Investors />
      </Gotham>
    </>
  );
};

export default LinkTree;

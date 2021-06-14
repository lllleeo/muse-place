import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { truncate } from "fs/promises";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Talk Time",
  socialLinks: [
    "https://open.spotify.com/artist/6SvlCVjpqyfgxpe4mu7IBb",
    "https://www.instagram.com/talktimeband/",
    "https://www.youtube.com/watch?v=8ATZmGX-3BI&feature=youtu.be",
    "https://talktimeband.square.site/",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/talktime`;
const linkData = [
  {
    src: `${url}/1.jpg`,
  },
  {
    src: `${url}/2.jpg`,
  },
  {
    src: `${url}/3.mp4`,
    audio: true,
  },
  {
    src: `${url}/4.mp4`,
    audio: true,
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
      />
    </>
  );
};

export default LinkTree;

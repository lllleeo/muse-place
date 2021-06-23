import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Lourdiz",
  socialLinks: [
    "https://open.spotify.com/album/6W1u60F5cZp3iK311nbEpq",
    "https://www.youtube.com/watch?v=9H603CdIarQ",
    "https://twitter.com/lourdiz",
    "https://lourdiz.ffm.to/shootmedown",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/lourdiz`;
const linkData = [
  {
    src: `${url}/1.jpg`,
  },
  {
    src: `${url}/2.mp4`,
    audio: true,
  },
  {
    src: `${url}/3.mp4`,
    audio: true,
  },
  {
    src: `${url}/4.jpg`,
  },
  {
    src: `${url}/5.jpg`,
  },
  {
    src: `${url}/6.mp4`,
    audio: true,
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

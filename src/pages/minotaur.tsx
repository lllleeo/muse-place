import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Minotaur",
  socialLinks: [
    "https://www.instagram.com/minotaur.666/",
    "https://twitter.com/onyxminotaur",
    "https://soundcloud.com/muraminotaur",
    "https://open.spotify.com/artist/38N4Ux1RK45sQjg7tOvnOz?si=ERqPd-qBQrG5fBk0ojMRCA&nd=1",
    "https://muraminotaur.bandcamp.com/music",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/minotaur`;
const linkData = [
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

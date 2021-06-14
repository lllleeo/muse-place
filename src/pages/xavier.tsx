import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Xavier | Cryptdoge",
  socialLinks: [
    "https://www.cryptdoge.io/",
    "https://twitter.com/crypt_doge",
    "https://www.instagram.com/xavisway/",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/xavier`;
const linkData = [
  {
    src: `${url}/1.png`,
  },
  {
    src: `${url}/2.png`,
  },
  {
    src: `${url}/3.png`,
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

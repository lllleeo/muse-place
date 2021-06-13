import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { truncate } from "fs/promises";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Benny Lichtner",
  socialLinks: [
    "https://github.com/bennlich?tab=overview&from=2021-04-01&to=2021-04-30",
    "https://soundcloud.com/bennlich",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/bennlich`;
const linkData = [
  {
    src: `${url}/1.png`,
  },
  {
    src: `${url}/2.jpeg`,
  },
  {
    src: `${url}/3.jpeg`,
  },
  {
    src: `${url}/4.jpeg`,
  },
  {
    src: `${url}/5.png`,
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

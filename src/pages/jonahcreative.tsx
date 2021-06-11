import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Jonah Cohn",
  socialLinks: [
    "https://www.instagram.com/jonahcreative",
    "https://foundation.app/@jonahcreative/hollow-mind-6049",
    "https://www.tiktok.com/@jonahcreative?",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/jonahcreative`;
const linkData = [
  {
    src: `${url}/1.mp4`,
    audio: true,
  },
  {
    src: `${url}/2.jpg`,
  },
  {
    src: `${url}/3.mp4`,
    audio: true,
  },
  {
    src: `${url}/4.jpeg`,
  },
  {
    src: `${url}/5.mp4`,
    audio: true,
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

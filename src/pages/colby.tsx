import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Colby",
  socialLinks: ["https://www.instagram.com/colby_lepore"],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/colby`;
const linkData = [
  {
    src: `${url}/1.jpeg`,
  },
  {
    src: `${url}/2.jpeg`,
  },
  {
    src: `${url}/3.jpeg`,
  },
  {
    src: `${url}/4.jpg`,
  },
  {
    src: `${url}/5.jpeg`,
  },
  {
    src: `${url}/6.png`,
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

import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Eytan Mizrahi",
  socialLinks: ["https://www.instagram.com/emizrahi13/"],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/eytan`;
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
    src: `${url}/4.jpeg`,
  },
  {
    src: `${url}/5.jpeg`,
  },
  {
    src: `${url}/6.jpeg`,
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

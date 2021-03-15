import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Nkem Odera",
  socialLinks: [
    "https://www.instagram.com/oderawrites",
    "https://www.oderawrites.com",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/oderawrites`;
const linkData = [
  {
    src: `${url}/0.jpg`,
  },
  {
    src: `${url}/1.mp4`,
  },
  {
    src: `${url}/2.mp4`,
  },
  {
    src: `${url}/3.mp4`,
  },
  {
    src: `${url}/4.mp4`,
  },
  {
    src: `${url}/5.mp4`,
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

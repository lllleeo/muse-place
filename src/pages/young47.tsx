import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Young47",
  socialLinks: [
    "https://www.instagram.com/young_47_",
    "https://readymag.com/u67675844/2008184/",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/young47`;
const linkData = [
  {
    src: `${url}/0.mp4`,
  },
  {
    src: `${url}/1.mp4`,
  },
  {
    src: `${url}/2.jpg`,
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

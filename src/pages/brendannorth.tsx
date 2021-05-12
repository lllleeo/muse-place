import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const BNorth = dynamic(import("scenes/Gotham/BNorth"), { ssr: false });

const ARTIST = {
  name: "Brendan North",
  socialLinks: ["https://www.instagram.com/brendannorth"],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/brendannorth`;
const linkData = [
  {
    src: `${url}/og/Ahextinction-1.mp4`,
  },
  {
    src: `${url}/og/Vparadise-1.mp4`,
  },
  {
    src: "",
    blank: true,
  },
  {
    src: `${url}/og/Vsummer-1.mp4`,
  },
  {
    src: `${url}/og/Ahsingularity-1.mp4`,
  },
  {
    src: `${url}/og/Vlove-1.mp4`,
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
        premium
      >
        <BNorth />
      </Gotham>
    </>
  );
};

export default LinkTree;

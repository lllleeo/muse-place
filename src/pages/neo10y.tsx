import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Neo 10Y",
  socialLinks: [
    "http://neo10y.space/nft",
    "https://open.spotify.com/artist/3G1V2jfTZO61Hs3dX7ilrA?si=c-SezDDJRTeWktOa7--Pug&nd=1",
    "https://www.youtube.com/c/neo10y",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/neo10y`;
const linkData = [
  {
    src: `${url}/1.mp4`,
  },
  {
    src: `${url}/2.jpg`,
  },
  {
    src: `${url}/3.jpg`,
  },
  {
    src: `${url}/4.mp4`,
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

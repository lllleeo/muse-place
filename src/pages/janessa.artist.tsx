import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Codame = dynamic(import("scenes/Gotham/Codame"), { ssr: false });

const ARTIST = {
  number: 18,
  name: "Janessa Robinson",
  socialLinks: {
    instagram: "https://www.instagram.com/janessa.artist/",
    twitter: "https://twitter.com/JanessaArtist",
  },
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/codame/ARTISTS`;
const linkData = [
  {
    src: `${url}/${ARTIST.number}/1.jpg`,
  },
  {
    src: `${url}/${ARTIST.number}/2.jpg`,
  },
  {
    src: `${url}/${ARTIST.number}/3.jpg`,
  },
  {
    src: `${url}/${ARTIST.number}/4.jpg`,
  },
  {
    src: `${url}/${ARTIST.number}/5.jpg`,
  },
  {
    src: `${url}/${ARTIST.number}/6.jpg`,
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name} | Muse Place</title>
      </Head>
      <Codame
        socials={[]}
        artwork={linkData}
        socialLinks={ARTIST.socialLinks}
        name={ARTIST.name}
        night
      />
    </>
  );
};

export default LinkTree;

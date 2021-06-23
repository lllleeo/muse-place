import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Chris B",
  socialLinks: [
    "https://chrisb.net/",
    "https://www.youtube.com/channel/UCONhsKirfVxo01MjCIpWtpQ?view_as=subscriber",
    "https://www.instagram.com/chrisbtv",
    "https://twitter.com/420chrisb",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/chrisbtv`;
const linkData = [
  {
    src: `${url}/1.jpg`,
  },
  {
    src: `${url}/2.jpg`,
  },
  {
    src: `${url}/3.mp4`,
    audio: true,
  },
  {
    src: `${url}/4.mp4`,
    audio: true,
  },
  {
    src: `${url}/5.mp4`,
    audio: true,
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
        night
      />
    </>
  );
};

export default LinkTree;

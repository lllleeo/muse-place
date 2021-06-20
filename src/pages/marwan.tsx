import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Marwan",
  socialLinks: [
    "https://www.instagram.com/marwan.abh/",
    "https://open.spotify.com/artist/2Zrosy5yg0AHEoWUit2ZgU?autoplay=true",
    "https://www.youtube.com/watch?v=jOJJdh0KLYs&list=PLvIA0h1frI8tOC5ngCl5N7Tv3OoI1c6PE&index=2",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/marwan`;
const linkData = [
  {
    src: `${url}/1.mp4`,
    audio: true,
  },
  {
    src: `${url}/2.mp4`,
    audio: true,
  },
  {
    src: `${url}/3.jpg`,
  },
  {
    src: `${url}/4.jpg`,
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

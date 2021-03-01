import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { ScrollData } from "../themes/Alto/types/scroll";

const Standard = dynamic(import("scenes/Alto"), { ssr: false });

const ARTIST = {
  name: "Siimbiie Selassiie",
  socialLinks: [
    "https://siimbiie.org/",
    "https://www.instagram.com/siimbiie/",
    "https://www.youtube.com/watch?app=desktop&v=yn3xf-sL99Q",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/siimbiieselassiie`;

const scrollData: ScrollData[] = [
  {
    img: `${url}/1.jpg`,
    text: "Tell me more about your flexing abilities...",
    position: [15, -0.61, 30],
  },
  {
    img: `${url}/2.mp4`,
    text:
      "Corona is Bad For the Soul.....and it took some courage to finally drop it....but VIICES is out on all platforms now....and that’s good for the soul.",
    position: [-15, -0.61, 30],
  },
  {
    img: `${url}/3.jpg`,
    text: "🦁 HAKUNA MATATA. 🦁",
    position: [12.36, 1.21, -15.84],
  },
  {
    img: `${url}/4.jpg`,
    text: "Missing Africa...",
    position: [-15, -1.13, -30],
  },
  {
    img: `${url}/5.JPG`,
    text: "Melkam Gana.",
    position: [30.52, -0.39, 0.97],
  },
  {
    img: `${url}/6.jpg`,
    text:
      "No this isn't a joke. VIICES out now. Corona can't stop us. Love you.",
    position: [-12.04, 3.55, -5],
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name} | Muse Place</title>
      </Head>
      <Standard
        scrollData={scrollData}
        socials={ARTIST.socialLinks}
        audio="https://d27rt3a60hh1lx.cloudfront.net/audio/ini-bestmixever.mp3"
        content={{
          name: "Siimbiie Selassiie",
          landing: {
            title: "Welcome to the World of Siimbiie Selassiie",
          },
        }}
      />
    </>
  );
};

export default LinkTree;

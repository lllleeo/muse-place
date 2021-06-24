import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const VSummer = dynamic(import("scenes/Gotham/VSummer"), { ssr: false });

const ARTIST = {
  name: "Violet Summer",
  socialLinks: [
    "https://www.instagram.com/violetsummerzine",
    "https://open.spotify.com/artist/7IMqmZRaebLWN3e0uxkrIP?si=6P0CJ5VoT1u4rHmAxkSO3A",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/violetsummer`;

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name} | Muse Place</title>
      </Head>
      <Gotham
        artwork={[]}
        socials={ARTIST.socialLinks}
        emailCollection={{
          title: "Sign up for my Newsletter!",
          link: "https://eepurl.com/hq1FYb",
        }}
        name={""}
        floorplan={5}
        night
      >
        <VSummer />
      </Gotham>
    </>
  );
};

export default LinkTree;

import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const Drew = dynamic(import("scenes/Gotham/Drew"), { ssr: false });

const ARTIST = {
  name: "Drew",
  socialLinks: [],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/drew`;

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name} | Muse Place</title>
      </Head>
      <Gotham
        artwork={[]}
        socials={ARTIST.socialLinks}
        name={ARTIST.name}
        night
      >
        <Drew />
      </Gotham>
    </>
  );
};

export default LinkTree;

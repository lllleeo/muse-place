import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const KKites = dynamic(import("scenes/Gotham/KKites"), { ssr: false });

const ARTIST = {
  name: "ifakemakeclothes.com",
  socialLinks: [
    "https://www.instagram.com/kristopher.kites/",
    "https://ifakemakeclothes.com/",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kkites`;

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
        floorplan={2}
        premium
        night
      >
        <KKites />
      </Gotham>
    </>
  );
};

export default LinkTree;

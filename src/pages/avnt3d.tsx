import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const Avnt = dynamic(import("scenes/Gotham/Avnt"), { ssr: false });

const ARTIST = {
  name: "avnt3d",
  socialLinks: ["https://www.instagram.com/avnt3d/", "https://avnt.space/#/"],
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
        name={""}
        floorplan={3}
        premium
        night
      >
        <Suspense fallback={null}>
          <Preload all />
          <Avnt />
        </Suspense>
      </Gotham>
    </>
  );
};

export default LinkTree;

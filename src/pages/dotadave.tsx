import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const DotaDave = dynamic(import("scenes/Gotham/DotaDave"), { ssr: false });

const ARTIST = {
  name: "",
  socialLinks: [],
};

const DavePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name} | Muse Place</title>
      </Head>
      <Gotham socials={ARTIST.socialLinks} name={ARTIST.name} night open>
        <DotaDave />
      </Gotham>
    </>
  );
};

export default DavePage;

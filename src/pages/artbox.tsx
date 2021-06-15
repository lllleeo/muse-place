import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const ArtBox = dynamic(import("scenes/ArtBox"), { ssr: false });

const ArtBoxPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Art Box | Muse Place</title>
      </Head>
      <ArtBox />
    </>
  );
};

export default ArtBoxPage;

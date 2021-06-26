import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const KKites = dynamic(import("scenes/Gotham/KKites/Landing"), { ssr: false });

const IFakeMake: NextPage = () => {
  return (
    <>
      <Head>
        <title>IFakeMakeClothes.com | Muse </title>
      </Head>
      <KKites />
    </>
  );
};

export default IFakeMake;

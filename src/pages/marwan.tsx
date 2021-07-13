import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Marwan = dynamic(import("scenes/Marwan"), { ssr: false });

const Scene: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marwan | Muse Place</title>
      </Head>
      <Marwan />
    </>
  );
};

export default Scene;

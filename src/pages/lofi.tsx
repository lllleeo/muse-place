import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Lofi = dynamic(import("scenes/Lofi"), { ssr: false });

const LofiPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>lofi cafe | Muse Place</title>
      </Head>
      <Lofi />
    </>
  );
};

export default LofiPage;

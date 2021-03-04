import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Silks = dynamic(import("scenes/Silks"), { ssr: false });

const SilksByVP: NextPage = () => {
  return (
    <>
      <Head>
        <title>Silks By VP</title>
      </Head>
      <Silks />
    </>
  );
};

export default SilksByVP;

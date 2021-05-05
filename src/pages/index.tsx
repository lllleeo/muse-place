import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const SilksLanding = dynamic(import("scenes/Silks/Landing"), { ssr: false });

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Silks By VP</title>
      </Head>
      <SilksLanding />
    </>
  );
};

export default Index;

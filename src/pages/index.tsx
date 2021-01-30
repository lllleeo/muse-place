import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Landing = dynamic(import("scenes/Landing"), { ssr: false });

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Muse</title>
      </Head>
      <Landing />
    </>
  );
};

export default Index;

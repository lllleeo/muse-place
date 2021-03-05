import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Landing = dynamic(import("scenes/ComingToAmerica/Landing"), {
  ssr: false,
});

const C2ALanding: NextPage = () => {
  return (
    <>
      <Head>
        <title>My T Sharp Experience</title>
      </Head>
      <Landing />
    </>
  );
};

export default C2ALanding;

import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Exterior = dynamic(import("scenes/ComingToAmerica/Exterior"), {
  ssr: false,
});

const C2AExterior: NextPage = () => {
  return (
    <>
      <Head>
        <title>Exterior | My T Sharp Experience</title>
      </Head>
      <Exterior />
    </>
  );
};

export default C2AExterior;

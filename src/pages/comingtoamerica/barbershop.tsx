import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Barbershop = dynamic(import("scenes/ComingToAmerica/Barbershop"), {
  ssr: false,
});

const C2ABarbershop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Barbershop | My T Sharp Experience</title>
      </Head>
      <Barbershop />
    </>
  );
};

export default C2ABarbershop;

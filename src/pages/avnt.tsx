import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const AVNT = dynamic(import("scenes/Gotham/AVNT"), {
  ssr: false,
});

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>AVNT | Muse Place</title>
      </Head>
      <Gotham socials={[]} name="" premium night>
        <AVNT />
      </Gotham>
    </>
  );
};

export default LinkTree;

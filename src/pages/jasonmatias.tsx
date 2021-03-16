import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const JasonMatias = dynamic(import("scenes/Gotham/JasonMatias"), {
  ssr: false,
});

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jason Matias</title>
        <title>Gallery</title>
      </Head>
      <Gotham socials={[]} name="" emailCollection premium>
        <JasonMatias />
      </Gotham>
    </>
  );
};

export default LinkTree;

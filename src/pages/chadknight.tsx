import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const ChadAlto = dynamic(import("scenes/Alto/chad"), { ssr: false });
const ChadKnight = dynamic(import("scenes/Alto/ChadKnight"), { ssr: false });

const FOLDER = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/homocosmico`;

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chad Knight | Muse Place</title>
      </Head>
      <ChadAlto
        font={undefined}
        fontSize={0.83}
        socials={["https://www.instagram.com/chadknight/"]}
        hdri={`${FOLDER}/space.hdr`}
        content={{
          name: "Chad Knight",
          landing: {
            title: "CHAD KNIGHT",
            body: "",
          },
        }}
        premium
        scrollData={[]}
      >
        <ChadKnight />
      </ChadAlto>
    </>
  );
};

export default LinkTree;

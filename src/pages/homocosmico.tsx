import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Alto = dynamic(import("scenes/Alto"), { ssr: false });
const Homocosmico = dynamic(import("scenes/Alto/Homocosmico"), { ssr: false });

const FOLDER = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/homocosmico`;

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homocosmico | Muse Place</title>
      </Head>
      <Alto
        font={undefined}
        fontSize={0.83}
        socials={["https://www.instagram.com/homocosmico/"]}
        hdri={`${FOLDER}/space.hdr`}
        content={{
          name: "homocosmico",
          landing: {
            title: "HOMOCOSMICO",
            body: "Escritor, evolucionista. Bienvenido a mi mundo.",
          },
        }}
        // emailCollection={{
        //   title:
        //     "Sign up to receive beautiful arts and new releases from the artist.",
        //   link: "http://eepurl.com/gfW1JP",
        // }}
        premium
      >
        <Homocosmico />
      </Alto>
    </>
  );
};

export default LinkTree;

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
        <title>VR Gallery | Jason Matias</title>
      </Head>
      <Gotham
        socials={[]}
        name=""
        premium
        emailCollection={{
          title:
            "Sign up to receive beautiful arts and new releases from the artist.",
          link: "http://eepurl.com/gfW1JP",
        }}
        fbPixel="1756555791243957"
        googleAnalytics="UA-178413400-1"
      >
        <JasonMatias />
      </Gotham>
    </>
  );
};

export default LinkTree;

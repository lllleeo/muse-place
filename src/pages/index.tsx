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
        <title>VR Gallery | Jason Matias x Muse</title>
        <meta
          property="og:description"
          content="VR Gallery | Jason Matias x Muse"
        />
        <meta
          property="og:image"
          content="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/jasonmatias/Signature-Logo.png"
        />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
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

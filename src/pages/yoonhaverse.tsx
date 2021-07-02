import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const YoonhaVerse = dynamic(import("scenes/Gotham/YoonhaVerse"), {
  ssr: false,
});

const ARTIST = {
  name: "Yoonha Verse",
};

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name}</title>
        <title>Yoonha Verse on Muse</title>
      </Head>
      <Gotham socials={[]} name={ARTIST.name} premium>
        <YoonhaVerse />
      </Gotham>
    </>
  );
};

export default LinkTree;

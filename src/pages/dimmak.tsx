import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const Dimmak = dynamic(import("scenes/Gotham/Dimmak"), {
  ssr: false,
});

const ARTIST = {
  name: "Dim Mak",
};

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name}</title>
        <title>Dim Mak on Muse</title>
      </Head>
      <Gotham socials={[]} name={ARTIST.name} premium>
        <Dimmak />
      </Gotham>
    </>
  );
};

export default LinkTree;

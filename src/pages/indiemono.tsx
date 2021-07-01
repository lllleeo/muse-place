import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const IndieMono = dynamic(import("scenes/Gotham/IndieMono"), {
  ssr: false,
});

const ARTIST = {
  name: "Indiemono",
};

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name}</title>
        <title>Indiemono on Muse</title>
      </Head>
      <Gotham socials={[]} name={ARTIST.name} premium>
        <IndieMono />
      </Gotham>
    </>
  );
};

export default LinkTree;

import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const DruLira = dynamic(import("scenes/Gotham/DruLira"), {
  ssr: false,
});

const ARTIST = {
  name: "Dru Lira",
};

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name}</title>
        <title>Dru Lira on Muse</title>
      </Head>
      <Gotham socials={[]} name={ARTIST.name} premium>
        <DruLira />
      </Gotham>
    </>
  );
};

export default LinkTree;

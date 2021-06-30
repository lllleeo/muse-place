import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const WheresMort = dynamic(import("scenes/Gotham/WheresMort"), {
  ssr: false,
});

const ARTIST = {
  name: "Where's Mort?",
};

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name}</title>
        <title>Gallery</title>
      </Head>
      <Gotham socials={[]} name={ARTIST.name} premium>
        <WheresMort />
      </Gotham>
    </>
  );
};

export default LinkTree;

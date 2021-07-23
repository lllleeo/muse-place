import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const LucidMonday = dynamic(import("scenes/LucidMonday2"), { ssr: false });

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/lucidmonday`;

const ChadPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lucid Monday | Spaces Gallery</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LucidMonday />
    </>
  );
};

export default ChadPage;

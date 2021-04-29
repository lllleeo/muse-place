import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const BlockchainQu33n = dynamic(import("scenes/Gotham/BlockchainQu33n"), {
  ssr: false,
});

const ARTIST = {
  name: "BlockchainQu33n",
  socialLinks: [
    "https://www.instagram.com/blockchain_qu33n/",
    "www.blockchainqueen.com",
  ],
};

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name}</title>
        <title>Gallery</title>
      </Head>
      <Gotham socials={ARTIST.socialLinks} name={ARTIST.name} premium>
        <BlockchainQu33n />
      </Gotham>
    </>
  );
};

export default LinkTree;

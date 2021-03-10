import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const Pacemorenobongiovanni = dynamic(
  import("scenes/Gotham/Pacemorenobongiovanni"),
  { ssr: false }
);

const ARTIST = {
  name: "Pace Moreno Bongiovanni",
  socials: [
    "https://www.youtube.com/channel/UCE1PjJv7VvBKM9SISWexGIw/featured",
    "https://www.instagram.com/pachman77/",
  ],
};

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pace Moreno Bongiovanni | Muse Place</title>
      </Head>
      <Gotham socials={ARTIST.socials} name={ARTIST.name} removeWalls night>
        <Pacemorenobongiovanni />
      </Gotham>
    </>
  );
};

export default LinkTree;

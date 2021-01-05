import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";
import { Keyframe } from "spacesvr";
import { Vector3 } from "three";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });
const Whoisabnel = dynamic(import("scenes/Gotham/Whoisabnel"), { ssr: false });

const ARTIST = {
  name: "whoisabnel",
  socials: [
    "https://www.instagram.com/whoisabnel/",
    "https://open.spotify.com/artist/5Hxu0qykbixWUDf2G5RgsW?si=TxBDOL-4Soar5dVnAFTrWw",
  ],
};

const artwork: GothamProps["artwork"] = [];

const keyframes: Keyframe[] = [
  { position: new Vector3(-4, 1, 5), label: "start" },
  { position: new Vector3(-1, 1, 2), label: "left" },
  { position: new Vector3(1.5, 1, 5), label: "back" },
  { position: new Vector3(-1, 1, 8), label: "right" },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>whoisabnel | Muse Place</title>
      </Head>
      <Gotham
        keyframes={keyframes}
        artwork={artwork}
        socials={ARTIST.socials}
        name={ARTIST.name}
        map="city"
        scenePos={[0, -20, 0]}
        fogNear={0}
        fogFar={150}
        fogColor={"white"}
        hMapScale={30}
        xzMapScale={100}
        floorColor="white"
        night
        stars
        removeWalls
      >
        <Whoisabnel />
      </Gotham>
    </>
  );
};

export default LinkTree;

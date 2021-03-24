import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GothamProps } from "../themes/Gotham";
import { Text } from "spacesvr";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "DJ Upgrade",
  socials: [
    "https://www.instagram.com/dj_upgrade/",
    "https://open.spotify.com/artist/46t8N3Le53lfIvlrVbjN3L?si=_3iEAWlMQsW6Ngp_FAq9Cw",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/djupgrade`;
const artwork: GothamProps["artwork"] = [
  {
    src: `${url}/1.mp4`,
    audio: true,
  },
  {
    src: `${url}/2.mp4`,
  },
  {
    src: `${url}/3.mp4`,
  },
  {
    src: `${url}/4.mp4`,
  },
  {
    src: `${url}/5.mp4`,
  },
  {
    src: `${url}/6.mp4`,
  },
];

const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>DJ Upgrade</title>
      </Head>
      <Gotham
        artwork={artwork}
        socials={ARTIST.socials}
        name={ARTIST.name}
        night
      >
        <group
          position={[2.49, 0.165, 2.2]}
          rotation={[0, -Math.PI / 2, 0]}
          name="coupon"
        >
          {/* @ts-ignore */}
          <Text
            anchorY="middle"
            fontSize={0.15}
            color="white"
            font={FONT}
            position-x={2}
          >
            Use coupon code djupgrade
          </Text>
        </group>
      </Gotham>
    </>
  );
};

export default LinkTree;

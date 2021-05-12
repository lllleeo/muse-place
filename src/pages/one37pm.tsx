import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "ONE37PM",
  socialLinks: [
    "https://www.instagram.com/one37pm",
    "https://twitter.com/137pm",
    "https://www.one37pm.com",
    "https://open.spotify.com/show/3sZF2HLbfmMiEyXj4BmMq4?si=7GXatau3TMGSuQi1eJvBCQ",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/one37pm`;
const linkData = [
  {
    src: `${url}/1.jpg`,
  },
  {
    src: `${url}/2.jpg`,
  },
  {
    src: `${url}/3.jpg`,
  },
  {
    src: `${url}/4.jpg`,
  },
  {
    src: `${url}/5.jpg`,
  },
  {
    src: `${url}/6.png`,
  },
];
const LinkTree: NextPage = () => {
  return (
    <>
      <Head>
        <title>{ARTIST.name} | Muse Place</title>
      </Head>
      <Gotham
        artwork={linkData}
        socials={ARTIST.socialLinks}
        name={ARTIST.name}
        night
      >
        <group>
          <mesh position={[-5.48, 1.25, 4.2]} rotation-y={Math.PI / 2}>
            <planeBufferGeometry args={[16.5, 3, 60, 30]} />
            <meshStandardMaterial
              color={0x00986f}
              wireframe
              transparent
              opacity={0.8}
            />
          </mesh>
          <mesh position={[2.49, 1.25, 4.2]} rotation-y={Math.PI / 2}>
            <planeBufferGeometry args={[16.5, 3, 60, 30]} />
            <meshStandardMaterial
              color={0x46c1d1}
              wireframe
              transparent
              opacity={0.8}
            />
          </mesh>
        </group>
      </Gotham>
    </>
  );
};

export default LinkTree;

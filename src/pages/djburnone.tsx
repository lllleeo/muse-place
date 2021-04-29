import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "DJ Burn One",
  socialLinks: [
    "https://www.instagram.com/djburnone",
    "https://twitter.com/djburnone",
    "https://www.thefivepointsbakery.com/",
    "https://open.spotify.com/playlist/37i9dQZF1DZ06evO397Cms?si=R9El2uIASnO9lW5LFKYL5g",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/djburnone`;
const linkData = [
  {
    src: `${url}/1.mp4`,
  },
  {
    src: `${url}/2.mp4`,
    audio: true,
  },
  {
    src: `${url}/3.mp4`,
  },
  {
    src: `${url}/4.JPG`,
  },
  {
    src: `${url}/5.JPG`,
  },
  {
    src: `${url}/6.JPG`,
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
              color={0x88aadd}
              wireframe
              transparent
              opacity={0.8}
            />
          </mesh>
          <mesh position={[2.49, 1.25, 4.2]} rotation-y={Math.PI / 2}>
            <planeBufferGeometry args={[16.5, 3, 60, 30]} />
            <meshStandardMaterial
              color={0x739acd}
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

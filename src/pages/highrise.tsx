import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Gotham = dynamic(import("scenes/Gotham"), { ssr: false });

const ARTIST = {
  name: "Highrise",
  socialLinks: [
    "https://www.instagram.com/highrise",
    "https://www.thehighriseco.com/",
    "https://www.youtube.com/channel/UCYTqaJiSntYj2RRMboybZ_g",
  ],
};

const url = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/highrise`;
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
    src: `${url}/4.jpeg`,
  },
  {
    src: `${url}/5.jpeg`,
  },
  {
    src: `${url}/6.jpeg`,
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
              color={0x228b22}
              wireframe
              transparent
              opacity={0.8}
            />
          </mesh>
          <mesh position={[2.49, 1.25, 4.2]} rotation-y={Math.PI / 2}>
            <planeBufferGeometry args={[16.5, 3, 60, 30]} />
            <meshStandardMaterial
              color={0x006400}
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

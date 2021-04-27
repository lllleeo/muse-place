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
  ],
};

const url = `https://edge.curalate.com/v1/img`;
const linkData = [
  {
    src: `${url}/WETAtWFMQ7D4P7A2maSf-Ta4P8qvJ7xmnHqYKPBKMw8=/w/500`,
  },
  {
    src: `${url}/PKryZ7MVFYbMsx8qmvDI3MOytRqL45tCwGBhLgLNoww=/w/500`,
  },
  {
    src: `${url}/Wr7KT8-1bw_QjUzlgY9bCmYYwaYLsRFRM5s08COlCz8=/w/500`,
  },
  {
    src: `${url}/avH0yW8kndRW_XmivcubiNcKCQXEAbylhRcDcerUmek=/w/500`,
  },
  {
    src: `${url}/ppLvdRsLiW0s6Hi1DPV3VALpCdSgX4VESKQ7l3BYyqM=/w/500`,
  },
  {
    src: `${url}/Mz2puY0nMhrECymIvOHm7ZaX21EHy8NHDMbK_yQxHC0=/w/500`,
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

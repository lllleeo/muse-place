import { Radiance } from "./Radiance";

const HDR_URL = `https://d27rt3a60hh1lx.cloudfront.net/content/silksbyvp/Hazy_Afternoon_HDR_full.hdr`;

const Lighting = () => {
  return (
    <>
      <Radiance src={HDR_URL} />
      <ambientLight intensity={0.8} />
      <pointLight intensity={0.2} position-y={2} />
    </>
  );
};

export default Lighting;

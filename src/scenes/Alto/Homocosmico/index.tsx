import { Floating, Image } from "spacesvr";
import { Text } from "@react-three/drei";
import Artwork from "./components/Artwork";
import TitleCard from "./components/TitleCard";
// @ts-ignore
import { texts } from "./constants/texts";

const RADIUS = 32;
const GAP = 0.2;
const FOLDER = `https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/homocosmico`;
const CONTACT = "mailto:carlosortizdelapena@gmail.com";
const VISIT = "http://homocosmico.com";

function getTitle(text: string) {
  const i = text.indexOf("\n");
  return text.substr(0, i);
}

// const insideUrls = [
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream1-1621460174/dream1.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream2-1621460193/dream2.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream3-1621460213/dream3.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream4-1621460217/dream4.ktx2"
// ]
// const middleUrls = [
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream5-1621460219/dream5.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream6-1621460221/dream6.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream7-1621460223/dream7.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream8-1621460225/dream8.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream9-1621460227/dream9.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream10-1621460176/dream10.ktx2",
// ]
// const outsideUrls = [
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream11-1621460178/dream11.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream12-1621460179/dream12.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream13-1621460182/dream13.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream14-1621460183/dream14.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream15-1621460185/dream15.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream16-1621460187/dream16.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream17-1621460188/dream17.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream18-1621460190/dream18.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream19-1621460192/dream19.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream20-1621460195/dream20.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream21-1621460197/dream21.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream22-1621460199/dream22.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream23-1621460200/dream23.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream24-1621460202/dream24.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream25-1621460204/dream25.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream26-1621460206/dream26.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream27-1621460208/dream27.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream28-1621460209/dream28.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream29-1621460211/dream29.ktx2",
//   "https://d27rt3a60hh1lx.cloudfront.net/textures/dream30-1621460215/dream30.ktx2",
// ]

function Images() {
  const insideUrls = new Array(4)
    .fill("")
    .map((_, ind) => `${FOLDER}/dreams2/Dream N°${ind + 1}-min.jpg`);
  const middleUrls = new Array(6)
    .fill("")
    .map((_, ind) => `${FOLDER}/dreams2/Dream N°${ind + 5}-min.jpg`);
  const outsideUrls = new Array(20)
    .fill("")
    .map((_, ind) => `${FOLDER}/dreams2/Dream N°${ind + 11}-min.jpg`);

  const insideRot = (ind: number) =>
    (Math.PI * 2 - GAP) * (ind / 5) - Math.PI + GAP;
  const middleRot = (ind: number) =>
    (Math.PI * 2 - GAP) * (ind / 7) - Math.PI + GAP;
  const outsideRot = (ind: number) =>
    (Math.PI * 2 - GAP) * (ind / 21) - Math.PI + GAP;

  return (
    <group>
      {insideUrls.map((url, ind) => (
        <group rotation-y={insideRot(ind + 1)} key={ind}>
          <group position={[0, 7.5, -3]}>
            <group position-x={1.35}>
              <Text
                anchorX="center"
                anchorY="middle"
                maxWidth={0.9}
                fontSize={0.075}
                color="black"
                animations={[]}
              >
                {texts[ind]}
              </Text>
              <TitleCard
                scale={1.5}
                position={[-0.05, -1.1, 0.15]}
                title={getTitle(texts[ind])}
                contactUrl={CONTACT}
                visitUrl={VISIT}
              />
            </group>
            {/*<Image src={url} size={2} />*/}
          </group>
        </group>
      ))}
      {middleUrls.map((url, ind) => (
        <group rotation-y={-middleRot(ind + 1)} key={ind + 4}>
          <group rotation-y={-Math.PI} position={[0, 5.5, -12]}>
            <group position-x={1.355}>
              <Text
                anchorX="center"
                anchorY="middle"
                maxWidth={0.9}
                fontSize={0.075}
                color="black"
                animations={[]}
              >
                {texts[ind + 4]}
              </Text>
              <TitleCard
                scale={1.5}
                position={[-0.05, -0.85, 0.15]}
                title={getTitle(texts[ind + 4])}
                contactUrl={CONTACT}
                visitUrl={VISIT}
              />
            </group>
            {/*<Image src={url} size={2} />*/}
          </group>
        </group>
      ))}
      {outsideUrls.map((url, ind) => (
        <group rotation-y={outsideRot(ind + 1)} key={ind + 10}>
          <group position={[0, 1.5, -RADIUS]}>
            <group position-x={1.35}>
              <Text
                anchorX="center"
                anchorY="middle"
                maxWidth={0.9}
                fontSize={0.075}
                color="black"
                animations={[]}
              >
                {texts[ind + 10]}
              </Text>
              <TitleCard
                scale={1.5}
                position={[-0.05, -0.85, 0.15]}
                title={getTitle(texts[ind + 10])}
                contactUrl={CONTACT}
                visitUrl={VISIT}
              />
            </group>
            {/*<Image src={url} size={2} />*/}
          </group>
        </group>
      ))}
      <group rotation-y={Math.PI / 2 - 0.105}>
        <Artwork count={20} />
      </group>
      <group rotation-y={Math.PI / 4 - 0.05}>
        <Artwork count={6} />
      </group>
      <group rotation-y={Math.PI / 6 - 0.075}>
        <Artwork count={4} />
      </group>
    </group>
  );
}

export default function Homocosmico() {
  return (
    <group name="homocosmico">
      <Images />
    </group>
  );
}

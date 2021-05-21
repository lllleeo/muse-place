import { Floating, Image } from "spacesvr";
import { Text } from "@react-three/drei";
import { Suspense } from "react";
import Artwork from "./components/Artwork";
import TitleCard from "./components/TitleCard";
import { KtxImage } from "./components/KtxImage";
// @ts-ignore
import { texts } from "./constants/texts";

const RADIUS = 32;
const GAP = 0.2;
const CONTACT = "mailto:carlosortizdelapena@gmail.com";
const VISIT = "http://homocosmico.com";

function getTitle(text: string) {
  const i = text.indexOf("\n");
  return text.substr(0, i);
}

const insideUrls = [
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream1-1621554154/dream1.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream2-1621554174/dream2.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream3-1621554195/dream3.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream4-1621554200/dream4.ktx2",
];
const middleUrls = [
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream5-1621554202/dream5.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream6-1621554203/dream6.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream7-1621554206/dream7.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream8-1621554207/dream8.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream9-1621554209/dream9.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream10-1621554156/dream10.ktx2",
];
const outsideUrls = [
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream11-1621554158/dream11.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream12-1621554160/dream12.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream13-1621554162/dream13.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream14-1621554163/dream14.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream15-1621554165/dream15.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream16-1621554167/dream16.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream17-1621554169/dream17.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream18-1621554171/dream18.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream19-1621554172/dream19.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream20-1621554176/dream20.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream21-1621554178/dream21.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream22-1621554180/dream22.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream23-1621554181/dream23.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream24-1621554183/dream24.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream25-1621558308/dream25.ktx",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream26-1621558312/dream26.ktx",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream27-1621558315/dream27.ktx",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream28-1621558318/dream28.ktx",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream29-1621558322/dream29.ktx",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/dream30-1621558326/dream30.ktx",
];

function Images() {
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
            <Suspense fallback={null}>
              <Image src={url} size={2} />
            </Suspense>
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
            <Suspense fallback={null}>
              <Image src={url} size={2} />
            </Suspense>
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
            <Suspense fallback={null}>
              <KtxImage src={url} size={2} />
            </Suspense>
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

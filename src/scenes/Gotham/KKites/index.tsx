import { Image, Video } from "spacesvr";
import { useShopifyShop } from "../Balloonski/utils/shopify";
import { createContext, Suspense } from "react";
import { ShopState } from "../Balloonski/types/shop";
import Shop from "./components/Shop";
import { Text } from "@react-three/drei";
import { KtxImage } from "./components/KtxImage";

const IMAGES = [
  "https://d27rt3a60hh1lx.cloudfront.net/textures/l1-1622934939/l1.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/l2-1622934943/l2.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/l3-1622934946/l3.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/l4-1622934948/l4.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/l5-1622934950/l5.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/l6-1622934952/l6.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/l7-1622934954/l7.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/l8-1622934956/l8.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/l9-1622934958/l9.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/l10-1622934941/l10.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/r1-1622934960/r1.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/r2-1622934964/r2.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/r3-1622934967/r3.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/r4-1622934968/r4.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/r5-1622934970/r5.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/r6-1622934972/r6.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/r7-1622934974/r7.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/r8-1622934976/r8.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/r9-1622934978/r9.ktx2",
  "https://d27rt3a60hh1lx.cloudfront.net/textures/r10-1622934963/r10.ktx2",
];

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kkites";
export const ShopContext = createContext<ShopState>({} as ShopState);

export default function KKites() {
  const shop = useShopifyShop({
    domain: "ifakemakeeclothes.myshopify.com",
    storefrontAccessToken: "f1d9e74c201bf95d868112be8b4c927d",
  });

  return (
    <ShopContext.Provider value={shop}>
      <Shop />
      <group
        position={[-1.36, 1.26, 0]}
        rotation-y={Math.PI / 2}
        name="left-pane-back"
      >
        <Image
          name="1"
          src={`${CONTENT_FOLDER}/1.jpg`}
          position-x={0.45}
          framed
        />
        <Image
          name="2"
          src={`${CONTENT_FOLDER}/2.jpg`}
          position-x={-0.65}
          framed
        />
        {/*<Video*/}
        {/*  src={`${CONTENT_FOLDER}/V1.mp4`}*/}
        {/*  position-z={-0.05}*/}
        {/*  size={1.2}*/}
        {/*  framed*/}
        {/*  muted*/}
        {/*/>*/}
      </group>
      <group
        position={[-1.6, 1.26, 0]}
        rotation-y={-Math.PI / 2}
        name="left-pane-front"
      >
        <Image
          name="3"
          src={`${CONTENT_FOLDER}/3.jpg`}
          position-x={0.55}
          framed
        />
        <Image
          name="4"
          src={`${CONTENT_FOLDER}/4.jpg`}
          position-x={-0.4}
          framed
        />
        {/*<Video*/}
        {/*  name="3"*/}
        {/*  src={`${CONTENT_FOLDER}/V2.mp4`}*/}
        {/*  position-x={0.55}*/}
        {/*  framed*/}
        {/*  muted*/}
        {/*/>*/}
        {/*<Video*/}
        {/*  name="4"*/}
        {/*  src={`${CONTENT_FOLDER}/V3.mp4`}*/}
        {/*  position-x={-0.4}*/}
        {/*  framed*/}
        {/*  muted*/}
        {/*/>*/}
      </group>
      <group
        position={[-1.64, 1.26, 4.05]}
        rotation-y={Math.PI}
        name="middle-pane-left"
      >
        <Image
          name="5"
          src={`${CONTENT_FOLDER}/5.jpg`}
          position-x={-0.6}
          framed
        />
        <Image
          name="6"
          src={`${CONTENT_FOLDER}/6.jpg`}
          position-x={0.45}
          framed
        />
        {/*<Video*/}
        {/*  name="5"*/}
        {/*  src={`${CONTENT_FOLDER}/Final+4.mp4`}*/}
        {/*  size={1.2}*/}
        {/*  framed*/}
        {/*  muted*/}
        {/*/>*/}
      </group>
      <group
        position={[-1.64, 1.26, 4.25]}
        rotation-y={2 * Math.PI}
        name="middle-pane-right"
      >
        <Image
          name="7"
          src={`${CONTENT_FOLDER}/7.jpg`}
          position-x={-0.45}
          framed
        />
        <Image
          name="8"
          src={`${CONTENT_FOLDER}/8.jpg`}
          position-x={0.6}
          framed
        />
        {/*<Video*/}
        {/*  name="7"*/}
        {/*  src={`${CONTENT_FOLDER}/Kk+Barbed+Chains.mp4`}*/}
        {/*  position-x={-0.45}*/}
        {/*  framed*/}
        {/*  muted*/}
        {/*/>*/}
        {/*<Video*/}
        {/*  name="8"*/}
        {/*  src={`${CONTENT_FOLDER}/Kk+Jesus+Piece.mp4`}*/}
        {/*  position-x={0.6}*/}
        {/*  framed*/}
        {/*  muted*/}
        {/*/>*/}
      </group>
      <group
        position={[-1.36, 1.26, 8.11]}
        rotation-y={Math.PI / 2}
        name="right-pane-back"
      >
        <Image
          name="9"
          src={`${CONTENT_FOLDER}/9.jpg`}
          position-x={0.45}
          framed
        />
        <Image
          name="10"
          src={`${CONTENT_FOLDER}/10.jpg`}
          position-x={-0.55}
          framed
        />
      </group>
      <group
        position={[-1.6, 1.26, 8.11]}
        rotation-y={-Math.PI / 2}
        name="right-pane-front"
      >
        <Image
          name="11"
          src={`${CONTENT_FOLDER}/11.jpg`}
          position-x={0.55}
          framed
        />
        <Image
          name="12"
          src={`${CONTENT_FOLDER}/12.jpg`}
          position-x={-0.45}
          framed
        />
        {/*<Video*/}
        {/*  name="11"*/}
        {/*  src={`${CONTENT_FOLDER}/kkchainpieces.mp4`}*/}
        {/*  size={1.2}*/}
        {/*  muted*/}
        {/*  framed*/}
        {/*/>*/}
      </group>
      <group
        position={[2.49, 1.25, 10.0]}
        rotation-y={-Math.PI / 2}
        name="back-wall-right"
      >
        <KtxImage
          name="r1"
          // src={`${CONTENT_FOLDER}/r1.jpg`}
          src={IMAGES[10]}
          position={[0.15, 0.5, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="r2"
          // src={`${CONTENT_FOLDER}/r2.jpg`}
          src={IMAGES[11]}
          position={[1.3, 0.5, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="r3"
          // src={`${CONTENT_FOLDER}/r3.jpg`}
          src={IMAGES[12]}
          position={[0.15, -0.75, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="r4"
          // src={`${CONTENT_FOLDER}/r4.jpg`}
          src={IMAGES[13]}
          position={[1.3, -0.75, 0]}
          size={1.15}
          framed
        />
      </group>
      <group
        position={[2.49, 1.25, -3.0]}
        rotation-y={-Math.PI / 2}
        name="back-wall-left"
      >
        <KtxImage
          name="l1"
          // src={`${CONTENT_FOLDER}/l1.jpg`}
          src={IMAGES[0]}
          position={[0.15, 0.5, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="l2"
          // src={`${CONTENT_FOLDER}/l2.jpg`}
          src={IMAGES[1]}
          position={[1.3, 0.5, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="l3"
          // src={`${CONTENT_FOLDER}/l3.jpg`}
          src={IMAGES[2]}
          position={[0.15, -0.75, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="l4"
          // src={`${CONTENT_FOLDER}/l4.jpg`}
          src={IMAGES[3]}
          position={[1.3, -0.75, 0]}
          size={1.15}
          framed
        />
      </group>
      <group
        position={[-5.47, 1.25, 0]}
        rotation-y={Math.PI / 2}
        name="front-wall-right"
      >
        <KtxImage
          name="l5"
          // src={`${CONTENT_FOLDER}/l5.jpg`}
          src={IMAGES[4]}
          position={[0.15, 0.5, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="l6"
          // src={`${CONTENT_FOLDER}/l6.jpg`}
          src={IMAGES[5]}
          position={[1.3, 0.5, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="l7"
          // src={`${CONTENT_FOLDER}/l7.jpg`}
          src={IMAGES[6]}
          position={[2.45, 0.5, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="l8"
          // src={`${CONTENT_FOLDER}/l8.jpg`}
          src={IMAGES[7]}
          position={[0.15, -0.75, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="l9"
          // src={`${CONTENT_FOLDER}/l9.jpg`}
          src={IMAGES[8]}
          position={[1.3, -0.75, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="l10"
          // src={`${CONTENT_FOLDER}/l10.jpg`}
          src={IMAGES[9]}
          position={[2.45, -0.75, 0]}
          size={1.15}
          framed
        />
      </group>
      <group
        position={[-5.47, 1.25, 11.7]}
        rotation-y={Math.PI / 2}
        name="front-wall-left"
      >
        <KtxImage
          name="r5"
          // src={`${CONTENT_FOLDER}/r5.jpg`}
          src={IMAGES[14]}
          position={[0.15, 0.5, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="r6"
          // src={`${CONTENT_FOLDER}/r6.jpg`}
          src={IMAGES[15]}
          position={[1.3, 0.5, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="r7"
          // src={`${CONTENT_FOLDER}/r7.jpg`}
          src={IMAGES[16]}
          position={[2.45, 0.5, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="r8"
          // src={`${CONTENT_FOLDER}/r8.jpg`}
          src={IMAGES[17]}
          position={[0.15, -0.75, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="r9"
          // src={`${CONTENT_FOLDER}/r9.jpg`}
          src={IMAGES[18]}
          position={[1.3, -0.75, 0]}
          size={1.15}
          framed
        />
        <KtxImage
          name="r10"
          // src={`${CONTENT_FOLDER}/r10.jpg`}
          src={IMAGES[19]}
          position={[2.45, -0.75, 0]}
          size={1.15}
          framed
        />
      </group>
      <group
        position={[-5.47, 1.25, 6.0]}
        rotation-y={Math.PI / 2}
        name="front-wall-middle"
      >
        <Text
          fontSize={0.6}
          color="white"
          anchorX="left"
          position={[-2.25, 0.0025, 0]}
        >
          IFAKEMAKECLOTHES.COM
        </Text>
      </group>
      <group name="outside-videos" position={[-1.82, 1, 0]}>
        {/*<Video*/}
        {/*  src={`${CONTENT_FOLDER}/jpiece.mp4`}*/}
        {/*  scale={10}*/}
        {/*  position-z={-9.5}*/}
        {/*  framed*/}
        {/*  muted*/}
        {/*/>*/}
        {/*<Video*/}
        {/*  src={`${CONTENT_FOLDER}/jpiece.mp4`}*/}
        {/*  scale={10}*/}
        {/*  rotation-y={Math.PI}*/}
        {/*  position-z={18}*/}
        {/*  framed*/}
        {/*  muted*/}
        {/*/>*/}
      </group>
      <group
        position={[-1.46, 3.7, 3.91]}
        rotation={[Math.PI / 2, 0, 0]}
        name="ceiling-video"
      >
        {/*<Video*/}
        {/*  src={`${CONTENT_FOLDER}/jpiece.mp4`}*/}
        {/*  scale={[11, 17, 11]}*/}
        {/*  muted*/}
        {/*/>*/}
      </group>
    </ShopContext.Provider>
  );
}

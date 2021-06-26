import { Image, Video } from "spacesvr";
import { useShopifyShop } from "../Balloonski/utils/shopify";
import { createContext } from "react";
import { ShopState } from "../Balloonski/types/shop";
import Shop from "./components/Shop";
import { Text } from "@react-three/drei";
import { isMobile } from "react-device-detect";

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
        <Video
          src={`${CONTENT_FOLDER}/kkchainpieces.mp4`}
          position-z={-0.05}
          size={1.2}
          framed
          muted
        />
      </group>
      <group
        position={[-1.6, 1.26, -0.51]}
        rotation-y={-Math.PI / 2}
        name="left-pane-front"
      >
        <Video
          name="3"
          src={`${CONTENT_FOLDER}/rainbowchain.mp4`}
          position-x={0.55}
          size={1.2}
          framed
          muted
        />
      </group>
      <group
        position={[-1.64, 1.26, 4.05]}
        rotation-y={Math.PI}
        name="middle-pane-left"
      >
        <Video
          name="5"
          src={`${CONTENT_FOLDER}/Kk Jesus Piece.mp4`}
          size={1.2}
          framed
          muted
        />
      </group>
      <group
        position={[-1.1, 1.26, 4.25]}
        rotation-y={2 * Math.PI}
        name="middle-pane-right"
      >
        <Video
          name="7"
          src={`${CONTENT_FOLDER}/Kk+Barbed+Chains.mp4`}
          position-x={-0.45}
          size={1.2}
          framed
          muted
        />
      </group>
      <group
        position={[-1.36, 1.26, 8.61]}
        rotation-y={Math.PI / 2}
        name="right-pane-back"
      >
        <Video
          name="9"
          src={`${CONTENT_FOLDER}/Final 4.mp4`}
          position-x={0.45}
          size={1.2}
          framed
          muted
        />
      </group>
      <group
        position={[-1.6, 1.25, 8.19]}
        rotation-y={-Math.PI / 2}
        name="right-pane-front"
      >
        <Video
          name="l5"
          src={`${CONTENT_FOLDER}/V3.mp4`}
          size={1.35}
          framed
          muted
        />
      </group>
      <group
        position={[-5.47, 1.2, 3.8]}
        rotation-y={Math.PI / 2}
        name="front-wall-middle"
      >
        <Text
          fontSize={0.18}
          color="white"
          anchorX="left"
          position={[-2.25, 0.0025, 0]}
        >
          IFAKEMAKECLOTHES.COM
        </Text>
      </group>
      <group>
        <group
          position={[2.49, 1.25, 10.0]}
          rotation-y={-Math.PI / 2}
          name="back-wall-right"
        >
          <Image
            name="r1"
            src={`${CONTENT_FOLDER}/r1new.jpg`}
            position={[0.15, 0.5, 0]}
            size={1.15}
            framed
          />
          <Image
            name="r2"
            src={`${CONTENT_FOLDER}/r2new.jpg`}
            position={[1.3, 0.5, 0]}
            size={1.15}
            framed
          />
          <Image
            name="r3"
            src={`${CONTENT_FOLDER}/r3new.jpg`}
            position={[0.15, -0.75, 0]}
            size={1.15}
            framed
          />
          <Image
            name="r4"
            src={`${CONTENT_FOLDER}/r4new.jpg`}
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
          <Image
            name="l1"
            src={`${CONTENT_FOLDER}/l1new.jpg`}
            position={[0.15, 0.5, 0]}
            size={1.15}
            framed
          />
          <Image
            name="l2"
            src={`${CONTENT_FOLDER}/l2new.jpg`}
            position={[1.3, 0.5, 0]}
            size={1.15}
            framed
          />
          <Image
            name="l3"
            src={`${CONTENT_FOLDER}/l3new.jpg`}
            position={[0.15, -0.75, 0]}
            size={1.15}
            framed
          />
          <Image
            name="l4"
            src={`${CONTENT_FOLDER}/l4new.jpg`}
            position={[1.3, -0.75, 0]}
            size={1.15}
            framed
          />
        </group>
        <group
          position={[-5.47, 1.25, 0.7]}
          rotation-y={Math.PI / 2}
          name="front-wall-right"
        >
          <Image
            name="8"
            src={`${CONTENT_FOLDER}/8.jpg`}
            position={[-2.15, -0.75, 0]}
            size={1.15}
            framed
          />

          <Image
            name="6"
            src={`${CONTENT_FOLDER}/6.jpg`}
            position={[-2.15, 0.5, 0]}
            size={1.15}
            framed
          />

          <Image
            name="16"
            src={`${CONTENT_FOLDER}/12.jpg`}
            position={[2.45, -0.75, 0]}
            size={1.15}
            framed
          />

          <Image
            name="13"
            src={`${CONTENT_FOLDER}/13.jpg`}
            position={[2.45, 0.5, 0]}
            size={1.15}
            framed
          />

          <Image
            name="11"
            src={`${CONTENT_FOLDER}/11.jpg`}
            position={[0.15, 0.5, 0]}
            size={1.15}
            framed
          />

          <Image
            name="14"
            src={`${CONTENT_FOLDER}/14.jpg`}
            position={[0.15, -0.75, 0]}
            size={1.15}
            framed
          />

          <Image
            name="15"
            src={`${CONTENT_FOLDER}/15.jpg`}
            position={[1.3, -0.75, 0]}
            size={1.15}
            framed
          />

          <Image
            name="12"
            src={`${CONTENT_FOLDER}/16.jpg`}
            position={[1.3, 0.5, 0]}
            size={1.15}
            framed
          />

          <Image
            name="5"
            src={`${CONTENT_FOLDER}/5.jpg`}
            position={[-1, 0.5, 0]}
            size={1.15}
            framed
          />

          <Image
            name="7"
            src={`${CONTENT_FOLDER}/7.jpg`}
            position={[-1, -0.75, 0]}
            size={1.15}
            framed
          />

          <Image
            name="9"
            src={`${CONTENT_FOLDER}/9.jpg`}
            position={[3.6, 0.5, 0]}
            size={1.15}
            framed
          />

          <Image
            name="10"
            src={`${CONTENT_FOLDER}/10.jpg`}
            position={[3.6, -0.75, 0]}
            size={1.15}
            framed
          />
        </group>
        <group
          position={[-5.47, 1.25, 10.66]}
          rotation-y={Math.PI / 2}
          name="front-wall-left"
        >
          <Image
            name="17"
            src={`${CONTENT_FOLDER}/17.jpg`}
            position={[-1, 0.5, 0]}
            size={1.15}
            framed
          />

          <Image
            name="27"
            src={`${CONTENT_FOLDER}/27.jpg`}
            position={[-1, -0.75, 0]}
            size={1.15}
            framed
          />

          <Image
            name="19"
            src={`${CONTENT_FOLDER}/19.jpg`}
            position={[0.15, 0.5, 0]}
            size={1.15}
            framed
          />

          <Image
            name="22"
            src={`${CONTENT_FOLDER}/22.jpg`}
            position={[0.25, -0.75, 0]}
            size={1.15}
            framed
          />

          <Image
            name="29"
            src={`${CONTENT_FOLDER}/29.jpg`}
            position={[1.3, 0.5, 0]}
            size={1.15}
            framed
          />

          <Image
            name="30"
            src={`${CONTENT_FOLDER}/30.jpg`}
            position={[1.48, -0.75, 0]}
            size={1.15}
            framed
          />
          <Image
            name="21"
            src={`${CONTENT_FOLDER}/21.jpg`}
            position={[2.5, 0.5, 0]}
            size={1.15}
            framed
          />

          <Image
            name="24"
            src={`${CONTENT_FOLDER}/24.jpg`}
            position={[2.6, -0.75, 0]}
            size={1.15}
            framed
          />

          <Image
            name="32"
            src={`${CONTENT_FOLDER}/32.jpg`}
            position={[3.7, 0.5, 0]}
            size={1.15}
            framed
          />

          <Image
            name="26"
            src={`${CONTENT_FOLDER}/26.jpg`}
            position={[3.78, -0.75, 0]}
            size={1.15}
            framed
          />
        </group>
      </group>
      {/* )} */}
      <group name="outside-videos" position={[-1.82, 1, 0]}>
        <Video
          src={`${CONTENT_FOLDER}/kkjesuspieceblack.mp4`}
          scale={15}
          position-z={-9.5}
          framed
          muted
        />

        <Video
          src={`${CONTENT_FOLDER}/kkjesuspieceblack.mp4`}
          scale={15}
          rotation-y={Math.PI}
          position-z={18}
          framed
          muted
        />
      </group>
      <group
        position={[-1.46, 2.5, 3.91]}
        rotation={[Math.PI / 2, 0, 0]}
        name="ceiling-video"
      >
        <Video
          src={`${CONTENT_FOLDER}/kkjesuspieceblack.mp4`}
          scale={[11, 17, 11]}
          muted
        />
      </group>
    </ShopContext.Provider>
  );
}

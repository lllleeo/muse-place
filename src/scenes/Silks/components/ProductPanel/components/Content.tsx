import { GroupProps } from "react-three-fiber";
import { Text } from "@react-three/drei";
import { Image } from "spacesvr";
import { HEIGHT, WIDTH } from "../index";

const TITLE_TEXT = {
  fontSize: 0.03,
  maxWidth: WIDTH / 2,
  anchorX: "left",
  anchorY: "top",
};

const DESC_TEXT = {
  fontSize: 0.02,
  maxWidth: TITLE_TEXT.maxWidth,
  anchorX: "left",
  anchorY: "top",
};

const PADDING = 0.1;
const IMG_SIZE = 0.3;

const Content = (props: GroupProps) => {
  const PRODUCT = {
    title: "22 neon green silk (green white)",
    img:
      "https://cdn.shopify.com/s/files/1/0249/8700/9086/products/IMG_1069_1024x1024.jpg",
    description: "Black stitching + brush included",
  };

  return (
    <group name="content" {...props}>
      {/* @ts-ignore */}
      <Text {...TITLE_TEXT} position-y={HEIGHT / 2 - PADDING}>
        {PRODUCT.title.toUpperCase()}
      </Text>
      {/* @ts-ignore */}
      <Text {...DESC_TEXT}>{PRODUCT.description}</Text>
      <Image
        src={PRODUCT.img}
        size={[(582 / 871) * IMG_SIZE, IMG_SIZE]}
        position-x={-WIDTH / 4}
      />
    </group>
  );
};

export default Content;

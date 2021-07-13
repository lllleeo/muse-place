import { RoundedBox, Text } from "@react-three/drei";
import VariantProduct from "./VariantProduct";
import { useContext } from "react";
import { ShopContext } from "../../../index";
import { useEnvironment } from "spacesvr";

const FONT_FILE =
  "https://d27rt3a60hh1lx.cloudfront.net/fonts/Quicksand_Bold.otf";

export default function VariantView() {
  const { device } = useEnvironment();

  const { variants } = useContext(ShopContext);

  return (
    <group name="variant-view">
      <pointLight position={[0, 0, 1]} distance={0.4} />
      <RoundedBox
        args={[20, 20, 0.5]}
        radius={0.25}
        smoothness={4}
        position-z={-4}
      >
        <meshStandardMaterial transparent opacity={0.95} />
      </RoundedBox>
      {variants.items.map((item, i) => (
        <VariantProduct
          item={item}
          position-x={(-(variants.items.length - 1) / 2 + i) * 6.5}
        />
      ))}
      {variants.items.length !== 0 && (
        <Text
          font={FONT_FILE}
          color="black"
          textAlign="center"
          maxWidth={18}
          fontSize={0.9}
          position-y={-7}
          position-z={-3}
        >
          {`Type: ${variants.items.toString()}`}
        </Text>
      )}
    </group>
  );
}

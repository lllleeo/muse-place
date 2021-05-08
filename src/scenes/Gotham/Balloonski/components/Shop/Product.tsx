import { Item } from "../../types/shop";
import { RoundedBox, Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useContext, useState } from "react";
import { ShopContext } from "../../index";
import { Image } from "spacesvr";
import { useSpring, animated, config } from "react-spring/three";
import Button from "../Button";

type ProductProps = {
  item: Item;
} & GroupProps;

export default function Product(props: ProductProps) {
  const { item, ...rest } = props;
  const { products, cart } = useContext(ShopContext);
  const product = products.find(
    (prod) =>
      prod.id === item.id ||
      prod.variants.find((variant) => variant.id === item.id) !== null
  );

  const [pressed, setPressed] = useState(false);

  const { color, scale } = useSpring({
    color: pressed ? "#aaa" : "#fff",
    scale: pressed ? 0.5 : 1,
    ...config.stiff,
  });

  if (!product) return null;

  const { images } = product;

  return (
    <group name={`product-${item.id}`} {...rest} scale={1}>
      {images[0] && <Image src={images[0]} size={5} framed position-y={2} />}
      <Text
        position-y={-3}
        fontSize={1.15}
        color="white"
        outlineColor="black"
        outlineWidth={0.1}
      >
        {item.quantity}
      </Text>
      <Text
        position-y={-1.5}
        position-z={0.05 + 0.001}
        fontSize={0.4}
        color="white"
        outlineColor="black"
        outlineWidth={0.05}
        maxWidth={4}
        textAlign="center"
      >
        {item.title}
      </Text>
      <RoundedBox
        args={[4, 1.25, 0.1]} // Width, Height and Depth of the box
        position-y={-1.5}
        radius={0.25} // Border-Radius of the box
        smoothness={4} // Optional, number of subdivisions
      >
        <animated.meshStandardMaterial color={color} />
      </RoundedBox>
      <Button
        position={[-1.25, -3, 0]}
        rounded
        onClick={() => cart.subtract(item.id)}
      >
        {item.quantity === 1 ? "x" : "-"}
      </Button>
      <Button
        position={[1.25, -3, 0]}
        rounded
        onClick={() => cart.add(item.variant.id)}
      >
        +
      </Button>
    </group>
  );
}

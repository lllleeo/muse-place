import { Item } from "../../types/shop";
import { Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useContext } from "react";
import { ShopContext } from "../../index";
import { Image } from "spacesvr";

type ProductProps = {
  item: Item;
} & GroupProps;

export default function Product(props: ProductProps) {
  const { item, ...rest } = props;
  const { products } = useContext(ShopContext);
  const product = products.find(
    (prod) =>
      prod.id === item.id ||
      prod.variants.find((variant) => variant.id === item.id) !== null
  );

  console.log(product);

  if (!product) return null;

  const { images } = product;

  return (
    <group name={`product-${item.id}`} {...rest} scale={1}>
      {images[0] && <Image src={images[0]} size={5} framed position-y={2} />}
      <Text
        position-y={-2.75}
        fontSize={1}
        color="white"
        outlineColor="black"
        outlineWidth={0.1}
      >
        {item.quantity}
      </Text>
      <mesh position-y={-1.5}>
        <boxBufferGeometry args={[4, 1, 0.1]} />
        <meshStandardMaterial color="#dad6a1" />
      </mesh>
    </group>
  );
}

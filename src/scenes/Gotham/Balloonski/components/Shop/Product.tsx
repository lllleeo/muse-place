import { Item } from "../../types/shop";
import { Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useContext } from "react";
import { ShopContext } from "../../index";
import { Image } from "spacesvr";
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

  if (!product) return null;

  const { images } = product;

  // @ts-ignore
  const subtotal = (item.quantity * product.variants[0].price).toString();
  // @ts-ignore
  const variantId = item.variant.id;

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
      <Button position-y={-1.5}>{`$${subtotal}`}</Button>
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
        onClick={() => cart.add(variantId)}
      >
        +
      </Button>
    </group>
  );
}

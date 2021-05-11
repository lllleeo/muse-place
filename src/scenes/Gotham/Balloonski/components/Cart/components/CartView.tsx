import { RoundedBox, Text } from "@react-three/drei";
import Product from "../../Shop/Product";
import { RangeTool } from "../../../modifiers/RangeTool";
import { useContext } from "react";
import { ShopContext } from "../../../index";
import { useEnvironment } from "spacesvr";

const FONT_FILE =
  "https://d27rt3a60hh1lx.cloudfront.net/fonts/Quicksand_Bold.otf";

type CartViewProps = {
  setOpen: (b: boolean) => void;
};

export default function CartView(props: CartViewProps) {
  const { setOpen } = props;
  const { device } = useEnvironment();

  const { cart } = useContext(ShopContext);

  const subtotal = cart.items.reduce(
    // @ts-ignore
    (acc, it) => acc + it.quantity * it.variant.price,
    0
  );

  return (
    <group name="cart-view">
      <RangeTool pos={[0, 0]} distance={6} onExit={() => setOpen(false)}>
        <pointLight position={[0, 0, 1]} distance={0.4} />
        <RoundedBox
          args={[20, 20, 0.5]}
          radius={0.25}
          smoothness={4}
          position-z={-4}
        />
        {cart.items.map((item, i) => (
          <Product
            item={item}
            position-x={(-(cart.items.length - 1) / 2 + i) * 6.5}
          />
        ))}
        {cart.count === 0 && (
          <Text
            font={FONT_FILE}
            color="black"
            textAlign="center"
            maxWidth={12}
            fontSize={1}
          >
            Your cart is empty
          </Text>
        )}
        {cart.count !== 0 && (
          <Text
            font={FONT_FILE}
            color="black"
            textAlign="center"
            maxWidth={18}
            fontSize={0.9}
            position-y={-8}
            position-z={-3}
          >
            {`Subtotal: $${subtotal.toString()}`}
          </Text>
        )}
        <Text
          font={FONT_FILE}
          color="gray"
          textAlign="center"
          maxWidth={18}
          fontSize={0.8}
          position-y={-9}
          position-z={-3}
        >
          {device.mobile
            ? "tap the cart to close"
            : "press c or look away to close"}
        </Text>
      </RangeTool>
    </group>
  );
}

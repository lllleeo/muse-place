import Gatorhead from "./models/Gatorhead";
import Ghost from "./models/Ghost1";
import Moneycat from "./models/Moneycat1";
import Desk from "./models/Desk";
import { Floating } from "spacesvr";
import Cart from "../../Silks/components/Cart";
import Renderer from "../../Silks/components/Renderer";
import { ShopState } from "../../Silks/types/shop";
import { createContext } from "react";
import Kiosks from "./components/Kiosks";
import { useShopifyShop } from "../../Silks/utils/shopify";

export const ShopContext = createContext<ShopState>({} as ShopState);

export default function Balloonski() {
  // const shop = useShopifyShop({
  //   domain: "silks-by-vp.myshopify.com",
  //   storefrontAccessToken: "0ee16eee5ad43db15eaf55d74aee5c98",
  // });

  return (
    // <ShopContext.Provider value={shop}>
    <group>
      <Desk />
      <Moneycat
        position={[-4.55, 0, 11.2]}
        rotation-y={2.34}
        scale={[4, 4, 4]}
        name="cat"
      />
      <Gatorhead
        position={[2, 1.38, 11.44]}
        rotation={[2.842, 0.308, 2.882]}
        scale={[7, 7, 7]}
        name="gator"
      />
      <Floating height={0.15} speed={3}>
        <Ghost
          name="ghost"
          position={[-4.5, 1.5, -3.3]}
          rotation-y={0.67}
          scale={[10, 10, 10]}
        />
      </Floating>
      <Cart />
      <Renderer />
      <Kiosks />
    </group>
    // </ShopContext.Provider>
  );
}

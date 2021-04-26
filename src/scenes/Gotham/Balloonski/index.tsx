import Gatorhead from "./models/Gator";
import Ghost from "./models/Ghost1";
import Moneycat from "./models/Moneycat";
import Desk from "./models/Desk";
import { Floating } from "spacesvr";
import Cart from "../../Silks/components/Cart";
import { ShopState } from "../../Silks/types/shop";
import { createContext } from "react";
import Kiosks from "./components/Shop/Kiosks";
import { useShopifyShop } from "../../Silks/utils/shopify";

export const ShopContext = createContext<ShopState>({} as ShopState);

export default function Balloonski() {
  const shop = useShopifyShop({
    domain: "balloonski.myshopify.com",
    storefrontAccessToken: "44672b19f332eb0a41bdd0e965bc4069",
  });

  console.log(shop);

  return (
    <ShopContext.Provider value={shop}>
      <group>
        <Desk />
        <Moneycat
          position={[-4.55, 0, 11.2]}
          rotation-y={-2.55}
          scale={[4, 4, 4]}
          name="cat"
        />
        <Gatorhead
          position={[1.6, 0.54, 11]}
          rotation={[0, -2.42, 0]}
          scale={[6, 6, 6]}
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
        <Kiosks />
      </group>
    </ShopContext.Provider>
  );
}

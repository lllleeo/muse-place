import { useEffect, useMemo, useState } from "react";
import ShopifyBuy, { AttributeInput } from "shopify-buy";
import { Cart, Item, Product, ShopState } from "../types/shop";

type ShopifyClient = {
  domain: string;
  storefrontAccessToken: string;
};

export const useShopifyShop = (props: ShopifyClient): ShopState => {
  const { domain, storefrontAccessToken } = props;

  const CART_ID = `muse-cart-${domain}`;

  const client = useMemo(
    () => ShopifyBuy.buildClient({ domain, storefrontAccessToken }),
    [domain, storefrontAccessToken]
  );
  const [products, setProducts] = useState<Product[]>([]);
  const items: Item[] = useMemo(() => {
    let its;
    try {
      its = JSON.parse(localStorage.getItem(CART_ID) || "[]");
    } catch (e) {
      its = [];
    }
    localStorage.setItem(CART_ID, JSON.stringify(its));
    return its;
  }, []);
  // hacky, but incremenet to cause a re-render
  const [incr, setIncr] = useState(0);

  const saveNewCart = () => {
    localStorage.setItem(CART_ID, JSON.stringify(items));
    console.log("saving cart to local storage....");
    console.log(items);
    setIncr(incr + 1);
  };

  useEffect(() => {
    // fetch fist 20 products, cast to Product type
    client.product
      .fetchAll()
      .then((shopifyProducts: any) =>
        setProducts(shopifyToProduct(shopifyProducts))
      );
  }, [client]);

  // create cart object
  const cart: Cart = {
    items,
    add: (id: string) => {
      const item = items.find((it) => it.id === id);
      if (item) {
        item.quantity++;
      } else {
        items.push({ id, quantity: 1 });
      }
      saveNewCart();
    },
    subtract: (id: string) => {
      const item = items.find((it) => it.id === id);
      if (!item) {
        return;
      } else if (item.quantity > 1) {
        item.quantity--;
      } else {
        const ind = items.indexOf(item);
        items.splice(ind, 1);
      }
      saveNewCart();
    },
    remove: (id: string) => {
      const item = items.find((it) => it.id === id);
      if (!item) {
        return;
      } else {
        const ind = items.indexOf(item);
        items.splice(ind, 1);
      }
      saveNewCart();
    },
    count: items.length,
    clear: () => {
      for (let i = items.length - 1; i >= 0; i--) {
        items.splice(i, 1);
      }
      saveNewCart();
    },
    checkout: () => {
      const itemsToAdd = items.map((it) => ({
        id: it.id,
        quantity: it.quantity,
      }));

      console.log(itemsToAdd);

      client.checkout.create().then((newCheckout) => {
        client.checkout
          .updateLineItems(newCheckout.id, itemsToAdd as AttributeInput[])
          .then((newnewCheckout) =>
            // @ts-ignore
            window.open(newnewCheckout.webUrl, "_blank")
          );
      });
    },
  };

  return {
    products,
    cart,
  };
};

const shopifyToProduct = (shopifyProducts: any) =>
  shopifyProducts.map((product: any) => ({
    id: product.id,
    title: product.title,
    available: product.availableForSale,
    handle: product.handle,
    description: product.description,
    images: product.images.map((image: any) => image.src),
    variants: product.variants.map((variant: any) => ({
      id: variant.id,
      available: variant.available,
      price: variant.price,
    })),
  }));

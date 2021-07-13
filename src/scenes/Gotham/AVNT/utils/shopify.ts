import { ReactNode, useEffect, useMemo, useState } from "react";
import ShopifyBuy, { Cart as ShopifyCart, LineItemToAdd } from "shopify-buy";
import {
  Cart,
  Item,
  Product,
  ShopState,
  Variant,
  Variants,
  VariantItem,
} from "../types/shop";

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
  const [variantItem, setVariantItem] = useState<VariantItem[]>([]);
  const [variantObject, setVariantObject] = useState<Variant[]>([]);
  const [variantID, setVariantID] = useState<string>("");
  const [checkout, setCheckout] = useState<ShopifyCart>();
  const visuals = useMemo(() => new Map<string, ReactNode>(), []);
  const [open, setOpen] = useState(false);

  const saveNewCart = (newCheckout: ShopifyCart) => {
    localStorage.setItem(CART_ID, newCheckout.id as string);
    setCheckout(newCheckout);
  };

  useEffect(() => {
    client.product
      .fetchAll()
      .then((shopifyProducts: any) =>
        setProducts(shopifyToProduct(shopifyProducts))
      );

    // fetch products, cast to Product type and add variant items
    client.product
      .fetchAll()
      .then((shopifyProducts: any) =>
        setVariantItem(shopifyToVariantItems(shopifyProducts).variants)
      );

    // fetch products, cast to Product type and add variants
    client.product
      .fetchAll()
      .then((shopifyProducts: any) =>
        setVariantObject(shopifyToVariants(shopifyProducts).variants)
      );

    // fetch products, cast to Product type and add variant ids
    client.product
      .fetchAll()
      .then((shopifyProducts: any) =>
        setVariantID(shopifyToVariantIDs(shopifyProducts).variants)
      );

    // fetch cart id from local storage or create a new one
    const id = localStorage.getItem(CART_ID);
    if (id) {
      client.checkout.fetch(id).then(saveNewCart);
    } else {
      client.checkout.create().then(saveNewCart);
    }
  }, [client]);

  // create cart object
  const cart: Cart = {
    items: checkout ? (checkout.lineItems as Item[]) : [],
    // @ts-ignore
    url: checkout?.webUrl,
    add: (id: string, visual?: ReactNode) => {
      // store visual in the map
      if (visual) visuals.set(id, visual);

      if (!checkout?.id) return;
      const lineItemsToAdd: LineItemToAdd = { variantId: id, quantity: 1 };
      client.checkout
        .addLineItems(checkout.id, [lineItemsToAdd])
        .then(saveNewCart);
    },
    subtract: (id: string) => {
      if (!checkout?.id) return;
      const prod = checkout.lineItems.find((prod: any) => prod.id === id);
      if (!prod) return;
      if (prod.quantity === 1) {
        client.checkout.removeLineItems(checkout.id, [id]).then(saveNewCart);
      } else {
        client.checkout
          .updateLineItems(checkout.id, [{ id, quantity: prod.quantity - 1 }])
          .then(saveNewCart);
      }
    },
    remove: (id: string) => {
      if (!checkout?.id) return;
      client.checkout.removeLineItems(checkout.id, [id]).then(saveNewCart);
    },
    count: checkout?.lineItems
      ? checkout.lineItems.reduce(
          (acc: number, cur: any) => acc + cur.quantity,
          0
        )
      : 0,
    clear: () => {
      client.checkout.create().then(saveNewCart);
    },
    visuals,
    isOpen: open,
    close: () => setOpen(false),
    open: () => setOpen(true),
  };

  const variants: Variants = {
    items: variantItem,
    isOpen: open,
    close: () => setOpen(false),
    open: () => setOpen(true),
    id: variantID,
  };

  //add more info to variants
  return {
    products,
    cart,
    variants,
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

const shopifyToVariantItems = (shopifyProducts: any) =>
  shopifyProducts.map((variants: any) => ({
    id: variants.id,
    quantity: variants.quantity,
  }));

const shopifyToVariants = (shopifyProducts: any) =>
  shopifyProducts.map((variants: any) => ({
    available: variants.available,
    price: variants.price,
    title: variants.title,
  }));

const shopifyToVariantIDs = (shopifyProducts: any) =>
  shopifyProducts.map((variants: any) => ({
    id: variants.id,
  }));

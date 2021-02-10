export type ShopState = {
  cart: CartState;
};

export type CartState = {
  count: number;
  setCount: (n: number) => void;
};

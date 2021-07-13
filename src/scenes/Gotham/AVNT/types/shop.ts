import { ReactNode } from "react";

export type ShopState = {
  cart: Cart;
  products: Product[];
  variants: Variants;
};

export type Item = {
  id: string;
  quantity: number;
};

export type VariantItem = {
  id: string;
  quantity: number;
  available: boolean;
  title: string;
  price: string;
};

export type Cart = {
  items: Item[];
  add: (id: string, visual: ReactNode) => void;
  subtract: (id: string) => void;
  remove: (id: string) => void;
  count: number;
  clear: () => void;
  url?: string;
  visuals: Map<string, ReactNode>;
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

export type Variants = {
  id: string;
  items: VariantItem[];
  title?: string;
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

export type Variant = {
  id: string;
  available: boolean;
  title: string;
  price: string;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  images: string[];
  available: boolean;
  variants: Variant[];
  visual?: ReactNode;
};

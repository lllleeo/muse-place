import { useState } from "react";
import { CartState } from "../types/shop";

export const useCart = (): CartState => {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount,
  };
};

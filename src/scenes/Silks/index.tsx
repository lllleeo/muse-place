import { StandardEnvironment } from "spacesvr";
import SilksModel from "./models/SilksModel";
import { Vector3 } from "three";
import Gallery from "./components/Gallery";
import Cart from "./Cart";
import { Perf } from "r3f-perf";
import Kiosks from "./components/Kiosks";
import Renderer from "./components/Renderer";
import ValPerre from "./characters/ValPerre";
import MusicVideo from "./components/MusicVideo";
import { createContext } from "react";
import { useCart } from "./utils/cart";
import Lighting from "./components/Lighting";
import { ShopState } from "./types/shop";
import { ResizeObserver } from "@juggle/resize-observer";

export const ShopContext = createContext<ShopState>({} as ShopState);

const Silks = () => {
  const cart = useCart();

  return (
    <StandardEnvironment
      player={{
        pos: new Vector3(4.6, 1, -1.9),
        rot: Math.PI,
        speed: 1.3,
        controls: { disableGyro: true },
      }}
      canvasProps={{ noEvents: true, resize: { polyfill: ResizeObserver } }}
    >
      <ShopContext.Provider value={{ cart }}>
        <Cart />
        <Gallery />
        <MusicVideo />
        <Lighting />
        <SilksModel />
        <ValPerre />
        {/*<Suspense fallback={null}>*/}
        {/*  <MichaelModel />*/}
        {/*</Suspense>*/}
        <Kiosks />
        <Renderer />
        {/*<Perf />*/}
      </ShopContext.Provider>
    </StandardEnvironment>
  );
};

export default Silks;

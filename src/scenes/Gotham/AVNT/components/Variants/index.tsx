import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { ShopContext } from "../../index";
import { Interactable, Spinning, useEnvironment } from "spacesvr";
// @ts-ignore
import { animated, useSpring } from "react-spring/three";
import VariantView from "./components/VariantView";

const Variants = () => {
  const { variants } = useContext(ShopContext);
  const { device } = useEnvironment();

  const onTap = () => {
    if (variants.isOpen) variants.close();
    else variants.open();
  };

  return (
    <>
      {/*<Interactable onClick={onTap}>*/}
      {/*  <mesh position-y={2.64} visible={true}>*/}
      {/*    <boxBufferGeometry args={[5, 5, 5]} />*/}
      {/*  </mesh>*/}
      {/*</Interactable>*/}
      {variants.isOpen && <VariantView />}
    </>
  );
};

export default Variants;

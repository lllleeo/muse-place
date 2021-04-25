import React, { useRef, useEffect } from "react";
import { Fog } from "spacesvr";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import Layout from "./components/Layout";
import UpdateCamera from "./components/UpdateCamera";
import Effects from "./components/Effects";
import Styles from "./components/Styles";

const state = {
  top: 0,
  pages: 4,
};

export default function App() {
  const scrollArea = useRef();
  const onScroll = (e) => (state.top = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
      <Styles />
      <Canvas
        concurrent
        colorManagement
        shadowMap
        onPointerMove={null}
        camera={{ position: [0, 0, 10] }}
        style={{ position: "fixed", top: 0 }}
      >
        <UpdateCamera />
        <Fog color="#02021f" near={30} far={150} />
        <pointLight position={[0, 100, 400]} intensity={0.1} />
        <ambientLight intensity={1} />
        <spotLight
          position={[100, 100, 100]}
          penumbra={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Effects />
        <Layout />
      </Canvas>
      <Loader />
      <div style={{ height: `${state.pages * 100}vh` }} />
    </div>
  );
}

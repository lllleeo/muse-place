import React, { Suspense, useMemo, useState } from "react";
import Alto from "./models/Alto";
import { MeshStandardMaterial } from "three";
import Grass from "./components/Grass";
import Sun from "./components/Sun";
import Effects from "./components/Effects";
import Scrolls from "./components/Scrolls";
import Tablatures from "./components/Tablatures";
import Birds from "../components/Birds";

export type ScrollDataProps = {
  text?: string;
  textColor?: string;
  textSize?: number;
  textY?: number;
  img?: string;
  position?: [number, number, number];
  rotationY?: number;
};

export type AltoProps = {
  name: string;
  socials: string[];
  removeWalls?: boolean;
  scrollData: ScrollDataProps[];
};

const Renaissance = (props: AltoProps) => {
  const { name, socials, scrollData, removeWalls } = props;
  const [scrollCount, setScrollCount] = useState<number>(0);

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.2,
        roughness: 0.1,
      }),
    []
  );

  return (
    <group>
      <Suspense fallback={null}>
        <Alto />
        <Grass />
      </Suspense>
      <Sun />
      <Effects />

      <Scrolls
        scrollData={scrollData}
        count={scrollCount}
        setCount={setScrollCount}
      />
      <Birds />
      <Tablatures socials={socials} scrolls={scrollCount} />
      <Suspense fallback={null}>
        <group position-y={2} scale={[5, 5, 5]}>
          {/*<Artwork artwork={artwork} linkPositions={linkPositions} />*/}
        </group>
      </Suspense>
    </group>
  );
};

export default Renaissance;

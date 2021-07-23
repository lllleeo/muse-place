import { Suspense, useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import ChadKnight from "scenes/LucidMonday2/models/Monmon_02";
import { useFrame } from "@react-three/fiber";

type ChadKnightProps = {
  isGallery: boolean;
  effects: {
    rotate: boolean;
    lok: boolean;
    color?: boolean;
  };
};

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "white",
  "#28FA92",
];

const ChadKnightPieces = (props: ChadKnightProps) => {
  const {
    isGallery,
    effects: { rotate, lok, color },
  } = props;

  const sphere = useRef<Mesh>();

  useFrame(({ clock }) => {
    if (sphere.current) {
      sphere.current.rotation.y = clock.getElapsedTime() / 10;
    }
  });

  const [realColor, setColor] = useState<string>("black");
  useEffect(() => {
    if (realColor === "black") {
      setColor("#28FA92");
    } else {
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    }
  }, [color]);

  const SCALE = isGallery ? 1.3 : 1.3 * 2;

  return (
    <group>
      <Suspense fallback={null}>
        <ChadKnight />
      </Suspense>
    </group>
  );
};

export default ChadKnightPieces;

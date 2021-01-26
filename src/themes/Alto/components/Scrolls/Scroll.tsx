import ScrollModel from "../../models/Scroll";
import { useFrame, useThree } from "react-three-fiber";
import { Image } from "spacesvr";
import { useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";
// @ts-ignore
import { animated, useSpring } from "react-spring/three";

export type ScrollProps = {
  text?: string;
  textColor?: string;
  textSize?: number;
  textY?: number;
  img?: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  position?: [number, number, number];
  rotationY?: number;
};

const Scroll = (props: JSX.IntrinsicElements["group"] & ScrollProps) => {
  const {
    text,
    textY,
    textSize,
    textColor = "black",
    img,
    count,
    setCount,
    position = [0, 0, 0],
    rotationY = 0,
  } = props;

  const { camera } = useThree();
  const outer = useRef<THREE.Group>();
  const inner = useRef<THREE.Group>();
  const [open, setOpen] = useState<boolean>(false);
  const [found, setFound] = useState<boolean>(false);

  const { scale } = useSpring({
    scale: open ? 1 : 0.1,
  });

  useFrame(({ clock }, delta) => {
    if (outer.current && inner.current) {
      if (camera.position.distanceTo(outer.current.position) < 5) {
        if (!found) {
          setCount(count + 1);
          setFound(true);
        }
        inner.current.position.y = Math.min(
          2,
          inner.current.position.y + delta * 2
        );
        inner.current.lookAt(camera.position);
        if (!open)
          setTimeout(() => {
            setOpen(true);
          }, 750);
      } else {
        inner.current.position.y = Math.max(
          -0.5,
          inner.current.position.y - delta * 2
        );
        if (open)
          setTimeout(() => {
            setOpen(false);
          }, 50);
      }
    }
  });

  return (
    <group position={position} rotation-y={rotationY} name={"scroll"}>
      <group ref={outer}>
        <group ref={inner} scale={[2, 2, 2]} position-y={[-0.25]}>
          <group position-y={0.475} name="innerscroll">
            <animated.group position-x={0.015} scale-y={scale} name="content">
              {img && (
                <Image
                  src={img}
                  size={[0.45, 0.45]}
                  position-y={text ? -0.3 : -0.45}
                />
              )}
              {text && (
                <Text
                  color={textColor}
                  maxWidth={0.45}
                  fontSize={textSize ? textSize / 100 : img ? 0.03 : 0.04}
                  anchorY="top"
                  position-x={0.005}
                  position-y={textY || img ? -0.55 : -0.05}
                >
                  {text}
                </Text>
              )}
            </animated.group>
            <Suspense fallback={null}>
              <ScrollModel open={open} />
            </Suspense>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Scroll;

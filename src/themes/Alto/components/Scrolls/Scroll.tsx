import ScrollModel from "../../models/Scroll";
import { useFrame, useThree } from "react-three-fiber";
import { Image } from "spacesvr";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";
// @ts-ignore
import { animated, useSpring } from "react-spring/three";

type ScrollProps = {
  text?: string;
  textColor?: string;
  img?: string;
};

const Scroll = (props: JSX.IntrinsicElements["group"] & ScrollProps) => {
  const { camera } = useThree();
  const { text, textColor = "black", img } = props;
  const outer = useRef<THREE.Group>();
  const inner = useRef<THREE.Group>();
  const [open, setOpen] = useState(false);

  const { scale } = useSpring({
    scale: open ? 1 : 0.1,
  });

  useFrame(({ clock }, delta) => {
    if (outer.current && inner.current) {
      if (camera.position.distanceTo(outer.current.position) < 3) {
        inner.current.position.y = Math.min(
          0.75,
          inner.current.position.y + delta * 2
        );
        inner.current.lookAt(camera.position);
        if (!open) setOpen(true);
      } else {
        inner.current.position.y = Math.max(
          -0.5,
          inner.current.position.y - delta * 2
        );
        if (open) setOpen(false);
      }
    }
  });

  return (
    <group ref={outer} {...props}>
      <group ref={inner} scale={[2, 2, 2]} position-y={[-0.25]}>
        <group position-y={0.475} name="scrollgroup">
          <animated.group position-x={0.015} scale-y={scale} name="content">
            {img && <Image src={img} size={[0.5, 0.5]} position-y={[-0.25]} />}
            {text && (
              <Text
                color={textColor}
                maxWidth={0.48}
                fontSize={img ? 0.03 : 0.04}
                anchorY="top"
                position-y={img ? -0.5 : 0}
              >
                {text}
              </Text>
            )}
          </animated.group>
          <ScrollModel open={open} />
        </group>
      </group>
    </group>
  );
};

export default Scroll;

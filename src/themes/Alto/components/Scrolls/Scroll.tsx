import ScrollModel from "../../models/Scroll";
import { useFrame, useThree } from "react-three-fiber";
import { useEnvironment } from "spacesvr";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";

type ScrollProps = {
  text: string;
  textColor?: string;
  img?: string;
};

const Scroll = (props: JSX.IntrinsicElements["group"] & ScrollProps) => {
  const { camera } = useThree();
  const { player } = useEnvironment();
  const { text, textColor = "black", img } = props;
  const outer = useRef<THREE.Group>();
  const inner = useRef<THREE.Group>();
  const [open, setOpen] = useState(false);

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
      <group ref={inner}>
        <group position-y={0.475} name="scrollgropu">
          <group position={[0, -0.05, 0]} name="content">
            <Text
              color={textColor}
              maxWidth={0.48}
              fontSize={0.04}
              anchorY="top"
            >
              {text}
            </Text>
          </group>
          <ScrollModel open={open} />
        </group>
      </group>
    </group>
  );
};

export default Scroll;

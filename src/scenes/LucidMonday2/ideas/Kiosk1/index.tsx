import SocialButton from "themes/components/SocialButton";
import Content from "./models/Content1";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { Floating, Interactable } from "spacesvr";
import { VisualWorld } from "./components/VisualWorld";
import { Text } from "@react-three/drei";

const FONT_FILE =
  "https://d27rt3a60hh1lx.cloudfront.net/fonts/Quicksand_Bold.otf";

export default function Kiosk3() {
  const group1 = useRef<THREE.Group>();

  useEffect(() => {
    if (group1.current) {
      const target = new Vector3(0, group1.current.position.y, 0);
      const v = new Vector3();
      v.subVectors(group1.current.position, target).add(
        group1.current.position
      );
      group1.current.lookAt(v);
    }
  }, [group1]);

  return (
    <group>
      <group ref={group1} position={[-11, 0, -0]}>
        <Content />
        <group position={[1.4, 1.15, -0.65]} scale={0.75}>
          <Floating height={0.02} speed={2}>
            <Interactable
              onClick={() => {
                window.open("https://muse.place/", "_blank");
              }}
            >
              <VisualWorld size={0.5} color="purple" />
            </Interactable>
            <Text
              fontSize={0.5}
              font={FONT_FILE}
              color="white"
              position={[-2, -0.15, 0.75]}
            >
              MUSE
            </Text>
          </Floating>
          <Text
            fontSize={0.1}
            font={FONT_FILE}
            maxWidth={1}
            textAlign="center"
            color="white"
            position={[0.05, -0.5, 0]}
          >
            click here to create your own space
          </Text>
        </group>
      </group>
    </group>
  );
}

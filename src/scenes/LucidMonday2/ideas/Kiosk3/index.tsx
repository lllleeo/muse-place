import SocialButton from "themes/components/SocialButton";
import Content from "./models/Content3";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { Floating } from "spacesvr";

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
      <group ref={group1} position={[11, 15, -0]}>
        <Content />
        <Floating height={0.02} speed={2}>
          <group position={[0, 0.75, 0.1]} scale={0.75}>
            <SocialButton link="https://discord.com/invite/xQspThf" />
          </group>
        </Floating>
      </group>
    </group>
  );
}

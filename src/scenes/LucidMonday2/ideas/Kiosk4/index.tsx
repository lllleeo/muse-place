import SocialButton from "themes/components/SocialButton";
import Content from "./models/Content4";
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
    <group name="kiosk4">
      <group ref={group1} position={[0, 10, -12]}>
        <Content />
        <Floating height={0.02} speed={2}>
          <group position={[0, 0.85, 0.2]} scale={0.75}>
            <SocialButton link="https://www.instagram.com/lucidmonday" />
            <SocialButton
              link="https://twitter.com/LucidMonday"
              position-x={1}
            />
            <SocialButton
              link="https://soundcloud.com/lucidmonday"
              position-x={2}
            />
            <SocialButton
              link="https://www.youtube.com/channel/UCyzAwg6jela6dNhe38Rwp7Q"
              position={[-1.25, 0, -1]}
              rotation-y={-Math.PI / 2}
            />
            <SocialButton
              link="https://open.spotify.com/artist/7dhK4qWq1jEEFjXCD5z5xr"
              position={[-1.175, 0, -2]}
              rotation-y={-Math.PI / 2}
            />
          </group>
        </Floating>
      </group>
      <group name="excessLinks">
        <SocialButton
          link="https://www.youtube.com/channel/UCyzAwg6jela6dNhe38Rwp7Q"
          position={[11, 10.85, 0.06]}
          rotation-y={1.609}
        />
        <SocialButton
          link="https://www.instagram.com/lucidmonday"
          position={[-8.95, 10.85, 6.45]}
          rotation-y={-2.133}
        />
        <SocialButton
          link="https://soundcloud.com/lucidmonday"
          position={[-1.23, 10.85, 11.04]}
          position-x={2}
        />
      </group>
    </group>
  );
}

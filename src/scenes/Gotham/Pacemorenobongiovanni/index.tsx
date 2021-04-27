import { useCallback, useMemo, useRef, useState } from "react";
import { MeshStandardMaterial } from "three";
import { Image, Floating, Interactable } from "spacesvr";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import CrazyMaterial from "themes/Gotham/shaders/crazy";
import Pedestal from "./Pedestal";
import Walls from "./Walls";
import Content from "./Content";
import BlankAudio from "themes/Gotham/components/BlankAudio";

const Pachman77 = () => {
  const tab = useRef<Group>();

  const [drugTaken, setDrugTaken] = useState(false);

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.2,
        roughness: 0.1,
        transparent: true,
      }),
    []
  );
  const crazyMaterial = useMemo(() => new CrazyMaterial(), []);

  useFrame(({ clock }, delta) => {
    if (tab.current) {
      tab.current.rotation.y = clock.getElapsedTime();
    }

    if (crazyMaterial) {
      // @ts-ignore
      crazyMaterial.time += delta;
    }

    if (drugTaken) {
      material.opacity = Math.max(0, material.opacity - delta * 0.5);
    } else {
      material.opacity = Math.min(1, material.opacity + delta * 0.5);
    }
  });

  const toggleSwitch = useCallback(() => setDrugTaken(!drugTaken), [drugTaken]);

  return (
    <group>
      <BlankAudio />
      <Walls crazyMaterial={crazyMaterial} drugTaken={drugTaken} />
      <Content drugTaken={drugTaken} />
      <group position={[-1.5, 0, 5]}>
        <Pedestal
          material={material}
          crazyMaterial={crazyMaterial}
          drugTaken={drugTaken}
        />
        {/* tab */}
        <group position-y={0.75} ref={tab}>
          <Floating height={0.04}>
            <Interactable onClick={toggleSwitch}>
              <Image
                src="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/pachman77/profile.jpg"
                size={0.15}
              />
            </Interactable>
          </Floating>
        </group>
      </group>
    </group>
  );
};

export default Pachman77;

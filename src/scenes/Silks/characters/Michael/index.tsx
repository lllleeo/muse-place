import { Suspense, useRef, useState } from "react";
import MichaelModel from "../../models/MichaelModel";
import { Group } from "three";
import { useFrame } from "react-three-fiber";
import WhatsUp from "./dialogue/WhatsUp";

const Michael = () => {
  const group = useRef<Group>();

  const [talk, setTalk] = useState(false);

  useFrame(({ camera }) => {
    if (!group.current) return;

    const dist = camera.position.distanceTo(group.current.position);

    if (dist < 2.75) {
      if (!talk) setTalk(true);
    } else if (talk) {
      setTalk(false);
    }
  });

  return (
    <group
      ref={group}
      name="michael"
      position={[-9.25, 0, 5.12]}
      rotation-y={Math.PI}
    >
      <Suspense fallback={null}>
        <MichaelModel />
      </Suspense>
      {talk && <WhatsUp position={[0.5, 0, 0.1]} rotation-y={-Math.PI / 4} />}
    </group>
  );
};

export default Michael;

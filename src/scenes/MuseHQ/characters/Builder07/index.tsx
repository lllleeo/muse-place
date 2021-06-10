import Builder from "../../models/Builder";
import LookAtPlayer from "../../modifiers/LookAtPlayer";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group, Vector3 } from "three";
import { useLimiter } from "spacesvr";
import { useBuilder00Logic, useDialogue } from "./logic";
import VisualDialogue from "../../layers/communication/visual/VisualDialogue";

export default function Builder00() {
  const limiter = useLimiter(20);
  const group = useRef<Group>();
  const dummy = useMemo(() => new Vector3(), []);

  const dialogue = useDialogue();
  const [state, send] = useBuilder00Logic();

  useFrame(({ camera, clock }) => {
    if (!group.current || !limiter.isReady(clock)) return;

    const worldPos = group.current.getWorldPosition(dummy);
    const dist = camera.position.distanceTo(worldPos);
    if (dist < 2.25) send("SPEAK");
    if (dist < 2.75) send("INRANGE");
    if (dist > 2.75) send("OUTRANGE");
  });

  const LOOKING = state.value === "seeyou" || state.value === "welcome";
  const TALKING = state.value === "welcome";

  return (
    <group name="builder-technician" position={[-5.1, 0.23, -3]}>
      <LookAtPlayer enabled={LOOKING}>
        <group ref={group}>
          <Builder
            rotation-x={-1.74}
            rotation-y={-1.26}
            rotation-z={-1.87}
            animation="trophycase"
          />
        </group>
        <VisualDialogue
          enabled={TALKING}
          position={[-0.7, 0.9, 0.1]}
          source={[-0.05, -0.1, -0.55]}
          rotation-y={Math.PI + 1.3}
          dialogue={dialogue}
        />
      </LookAtPlayer>
    </group>
  );
}

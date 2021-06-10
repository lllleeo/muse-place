import Builder from "../../models/Builder";
import LookAtPlayer from "../../modifiers/LookAtPlayer";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group, Vector3 } from "three";
import { useLimiter } from "spacesvr";
import { useBuilder00Logic, useDialogue } from "./dialogue";
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
    <group
      name="builder-mort"
      position={[-11.78, 0, -3.07]}
      rotation-y={-Math.PI / 2}
    >
      <LookAtPlayer enabled={LOOKING}>
        <group ref={group}>
          <Builder animation="idle" />
        </group>
        <group>
          <VisualDialogue
            enabled={TALKING}
            position={[0.15, 1.1, 0.25]}
            rotation-y={0}
            dialogue={dialogue}
          />
        </group>
      </LookAtPlayer>
    </group>
  );
}

import Builder from "../../models/Builder";
import LookAtPlayer from "../../modifiers/LookAtPlayer";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group, Vector3 } from "three";
import { useLimiter } from "spacesvr";
import Dialogue from "../../components/Dialogue";
import { useBuilder00Logic } from "./logic";
import VisualInteraction from "../../components/VisualInteraction";

export default function Builder00() {
  const limiter = useLimiter(20);
  const group = useRef<Group>();
  const dummy = useMemo(() => new Vector3(), []);

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
    <group name="builder-mort" position={[-11.78, 5.89, -3.07]}>
      <LookAtPlayer enabled={LOOKING}>
        <group ref={group}>
          <Builder rotation-y={-Math.PI / 2} />
        </group>
        <Dialogue
          enabled={TALKING}
          position={[-0.15, 1.1, 0.28]}
          source={[-0.25, -0.1, -0.05]}
          rotation-y={Math.PI + 0.9}
        >
          <VisualInteraction text="welcome to the musehq beta! sorry for the mess, we just opened up" />
          <VisualInteraction text="would you like to log in?" />
        </Dialogue>
      </LookAtPlayer>
    </group>
  );
}

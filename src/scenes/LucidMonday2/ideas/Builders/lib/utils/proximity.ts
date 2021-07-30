import useStateMachine from "@cassiozen/usestatemachine";
import { useFrame } from "@react-three/fiber";
import { RefObject, useMemo } from "react";
import { Group, Vector3 } from "three";
import { useLimiter } from "spacesvr";

type ProximityState = {
  idle: boolean;
  visible: boolean;
  speaking: boolean;
};

export const useProximity = (
  group: RefObject<Group | undefined>
): ProximityState => {
  const dummy = useMemo(() => new Vector3(), []);

  const [state, send] = useStateMachine()({
    initial: "idle",
    states: {
      idle: {
        on: { INRANGE: "visible", SPEAK: "speaking" },
        effect() {
          console.log("entered idle");
        },
      },
      visible: {
        on: { OUTRANGE: "idle", SPEAK: "speaking" },
        effect() {
          console.log("entered visible");
        },
      },
      speaking: {
        on: { OUTRANGE: "idle" },
        effect() {
          console.log("entered speaking");
        },
      },
    },
  });

  const limiter = useLimiter(20);
  useFrame(({ camera, clock }) => {
    if (!group.current || !limiter.isReady(clock)) return;

    const worldPos = group.current.getWorldPosition(dummy);
    const dist = camera.position.distanceTo(worldPos);
    if (dist < 1.75) send("SPEAK");
    if (dist < 2) send("INRANGE");
    if (dist > 2) send("OUTRANGE");
  });

  return {
    idle: state.value === "idle",
    visible: state.value === "visible",
    speaking: state.value === "speaking",
  };
};

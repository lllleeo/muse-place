import { useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { TABLE_THETA } from "../assets/constants";
import { useLimiter } from "spacesvr";
import { Vector2 } from "three";

export const useActiveWorld = () => {
  const limiter = useLimiter(20);
  const dummy2 = useMemo(() => new Vector2(), []);

  const [active, setActive] = useState(-1);
  const [focus, setFocus] = useState(-1);

  useFrame(({ clock, camera }) => {
    if (!limiter.isReady(clock)) return;

    dummy2.set(camera.position.x, camera.position.z);
    dummy2.x -= -2.51;
    dummy2.y -= -1.87;

    const radius = dummy2.length();

    if (radius > 4.5) {
      if (active !== -1) {
        setActive(-1);
        setFocus(-1);
      }
      return;
    }

    let angle = dummy2.angle();
    angle += Math.PI;
    if (angle > Math.PI * 2) angle -= Math.PI * 2;
    if (angle < Math.PI) angle += Math.PI * 2;
    angle += TABLE_THETA;

    let curr = Math.floor(angle / TABLE_THETA);
    curr = 13 - curr;
    if (curr != active) {
      setActive(curr);
      if (focus !== -1 && focus !== curr) {
        setFocus(-1);
      }
    }
  });

  return { active, focus, setFocus };
};

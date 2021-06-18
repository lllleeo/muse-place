import { useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { TABLE_THETA } from "../assets/constants";
import { useLimiter } from "spacesvr";
import { Vector2 } from "three";

export const useActiveWorld = () => {
  const limiter = useLimiter(10);
  const dummy2 = useMemo(() => new Vector2(), []);

  const [active, setActive] = useState(-1);
  const [focus, setFocus] = useState(-1);

  useFrame(({ clock, camera }) => {
    if (!limiter.isReady(clock)) return;

    dummy2.set(camera.position.x, camera.position.z);
    // builder table center
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

    // convert angle around the table to index of thing
    let angle = dummy2.angle();
    angle -= TABLE_THETA / 2;
    angle *= -1;
    if (angle < 0) angle += Math.PI * 2;
    angle += Math.PI;
    if (angle > Math.PI * 2) angle -= Math.PI * 2;

    let curr = Math.floor(angle / TABLE_THETA);
    if (curr != active) {
      setActive(curr);
    }
  });

  return { active, focus, setFocus };
};

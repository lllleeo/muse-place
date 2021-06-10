import { World } from "../../../layers/basis";
import { useSpring, config } from "react-spring/three";
import { useEffect, useMemo, useRef, useState } from "react";
import { Group, QuadraticBezierCurve3, Vector3 } from "three";
import { useLimiter } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import { VisualWorld } from "../../../layers/basis/visual/VisualWorld";
import { RADIUS, TABLE_HEIGHT } from "../assets/constants";

const START = new Vector3(0, 4, 0);
const CONTROL = new Vector3(0, TABLE_HEIGHT, 0);
const SHOW_TIME = 500;

type EmergingWorldProps = {
  world: World;
  index: number;
};

export default function EmergingWorld(props: EmergingWorldProps) {
  const { world, index } = props;

  const [show, setShow] = useState(false);
  const group = useRef<Group>();
  const curve = useMemo(() => {
    const END = new Vector3().setFromSphericalCoords(
      RADIUS,
      Math.PI / 2,
      -Math.PI / 2 + index * 0.5
    );
    END.y = TABLE_HEIGHT;
    return new QuadraticBezierCurve3(START, CONTROL, END);
  }, [index]);

  const limiter = useLimiter(45);
  const { pos } = useSpring({
    pos: show ? 1 : 0,
    config: { tension: 160, friction: 200 },
  });

  useEffect(() => {
    setTimeout(() => setShow(true), SHOW_TIME * index);
  }, []);

  useFrame(({ clock }) => {
    if (!limiter.isReady(clock) || !group.current) return;

    group.current.position.copy(curve.getPoint(pos.get()));
  });

  return (
    <group name="emerging-world" ref={group}>
      <VisualWorld size={0.2} />
    </group>
  );
}

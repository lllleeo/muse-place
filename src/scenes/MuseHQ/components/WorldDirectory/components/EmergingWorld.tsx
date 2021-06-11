import { World } from "../../../layers/basis";
import { useSpring, animated } from "react-spring/three";
import { useEffect, useMemo, useRef, useState } from "react";
import { CatmullRomCurve3, Group, Vector3 } from "three";
import { Interactable, Spinning, useLimiter } from "spacesvr";
import { useFrame } from "@react-three/fiber";
import { VisualWorld } from "../../../layers/basis/visual/VisualWorld";
import {
  RADIUS,
  TABLE_HEIGHT,
  TABLE_THETA,
  SPHERE_HEIGHT,
} from "../assets/constants";
import { Shadow, Text } from "@react-three/drei";
import FacePlayer from "../../../modifiers/FacePlayer";

const START = new Vector3(0, 4, 0);
const SHOW_TIME = 500;
const FONT = "https://d27rt3a60hh1lx.cloudfront.net/fonts/AcuminProMedium.otf";

type EmergingWorldProps = {
  world: World;
  index: number;
  active: boolean;
  focus: boolean;
  setFocus: (n: number) => void;
};

export default function EmergingWorld(props: EmergingWorldProps) {
  const { world, index, active, focus, setFocus } = props;

  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);
  const group = useRef<Group>();
  const curve = useMemo(() => {
    const REST = new Vector3().setFromSphericalCoords(
      RADIUS,
      Math.PI / 2,
      -Math.PI / 2 + index * TABLE_THETA
    );
    REST.y = TABLE_HEIGHT + SPHERE_HEIGHT;
    const FOCUS = new Vector3(0, 1.6, 0);
    return new CatmullRomCurve3([START, REST, FOCUS]);
  }, [index]);

  const limiter = useLimiter(45);

  const { textScale, hoverScale } = useSpring({
    textScale: show && active && !focus ? 1 : 0,
    hoverScale: hover && !focus ? 1.15 : 1,
  });
  const { pos, focusScale } = useSpring({
    pos: show ? (focus ? 1 : 0.5) : 0,
    focusScale: focus ? 4 : 1,
    config: { tension: 160, friction: 170 },
  });

  useEffect(() => {
    setTimeout(() => setShow(true), SHOW_TIME * index);
  }, []);

  useFrame(({ clock }) => {
    if (!limiter.isReady(clock) || !group.current) return;

    group.current.position.copy(curve.getPoint(pos.get()));
  });

  return (
    <group name={`emerging-world-${index}`} ref={group}>
      <animated.group scale={focusScale}>
        <animated.group scale={hoverScale}>
          <Spinning ySpeed={0.02}>
            <VisualWorld size={0.2} world={world} />
          </Spinning>
          <Interactable
            onHover={() => setHover(true)}
            onUnHover={() => setHover(false)}
            onClick={() => setFocus(index)}
          >
            <mesh visible={false}>
              <boxBufferGeometry args={[0.3, 0.3, 0.3]} />
            </mesh>
          </Interactable>
        </animated.group>
      </animated.group>
      <animated.group scale-y={textScale} position-y={-0.1}>
        <FacePlayer>
          <Text
            font={FONT}
            textAlign="center"
            fontSize={0.05}
            position-z={0.3}
            color="black"
          >
            {world.name}
          </Text>
        </FacePlayer>
      </animated.group>
    </group>
  );
}

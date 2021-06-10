import { useMemo, useRef } from "react";
import { Floating, Spinning } from "spacesvr";
import { VisualIdea } from "../../../../basis/visual/VisualIdea";
import { animated, useSpring } from "react-spring/three";
import { Idea } from "../../../../basis";
import { GroupProps, useFrame } from "@react-three/fiber";
import { Group, Vector2, Vector3 } from "three";

const AXIS = new Vector3(0, 1, 0);

type Bubble = {
  idea: Idea;
  size: number;
  pos: [number, number, number];
};

type BubbleProps = {
  i: number;
  num: number;
  enabled: boolean;
} & Bubble;

function Bubble(props: BubbleProps) {
  const { i, num, enabled, pos, size, idea } = props;

  const { scale } = useSpring({ scale: enabled ? 1 : 0 });

  return (
    <group name={`bubble-${i}`} position={pos}>
      <Floating height={size * 0.25}>
        <Spinning xSpeed={0.1} ySpeed={0.1} zSpeed={0.1}>
          <animated.group scale={scale}>
            <VisualIdea idea={idea} size={size} />
          </animated.group>
        </Spinning>
      </Floating>
    </group>
  );
}

type BubblesProps = {
  numStops: number;
  idea: Idea;
  enabled: boolean;
  trailEnd: Vector3;
} & GroupProps;

export default function Bubbles(props: BubblesProps) {
  const { numStops, idea, enabled, trailEnd, ...rest } = props;

  const source = [0, 0, 0];
  const group = useRef<Group>();

  const bubbles: Bubble[] = useMemo(() => {
    const arr: Bubble[] = [];
    for (let i = 0; i < numStops; i++) {
      const perc = i / (numStops - 1);
      arr.push({
        idea: new Idea({
          m: idea.mediation,
          u: idea.utility * perc,
          s: idea.specificity * perc,
        }),
        size: 0.01 + perc * 0.05,
        pos: [
          source[0] * (1 - perc),
          source[1] * (1 - perc),
          source[2] * (1 - perc),
        ],
      });
    }
    return arr;
  }, [numStops, source]);

  useFrame(() => {
    if (!group.current) return;

    for (let i = 0; i < numStops; i++) {
      const perc = i / (numStops - 1);
      const child = group.current.children[i];
      child.position.copy(trailEnd).multiplyScalar(perc);
    }
  });

  return (
    <group name="bubbles" {...rest} ref={group}>
      {bubbles.map((bubble, i) => (
        <Bubble
          key={i}
          i={i}
          num={bubbles.length}
          enabled={enabled}
          {...bubble}
        />
      ))}
    </group>
  );
}

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
          <Builder rotation-y={-Math.PI / 2} animation="dance1" />
        </group>
        <Dialogue
          enabled={TALKING}
          position={[-0.15, 1.1, 0.28]}
          source={[-0.25, -0.1, -0.05]}
          rotation-y={Math.PI + 0.9}
        >
          <VisualInteraction
            key={0}
            text="welcome to the musehq beta! sorry for the mess, we just opened up"
            decisions={[
              {
                name: "it's ok, what's going on?",
                action: (setIndex) => setIndex(1),
              },
              {
                name: "just check me in",
                action: (setIndex) => setIndex(5),
              },
            ]}
          />
          <VisualInteraction
            key={1}
            text="we're building people's realities! it's a fun process that immerses your audience in your brand"
            decisions={[
              {
                name: "that sounds awesome!",
                action: (setIndex) => setIndex(5),
              },
              {
                name: "that sounds lame",
                action: (setIndex) => setIndex(2),
              },
            ]}
          />
          <VisualInteraction
            key={2}
            text="that was fucking rude. go explore the site. or don't."
            decisions={[
              {
                name: "i'm sorry",
                action: (setIndex) => setIndex(3),
              },
              {
                name: "aight bye",
                action: (setIndex) => setIndex(10),
              },
            ]}
          />
          <VisualInteraction
            key={3}
            text="it's ok, I know this is a lot to take in at once. want to get started making a site?"
            decisions={[
              {
                name: "sure!",
                action: (setIndex) => setIndex(5),
              },
              {
                name: "not now",
                action: (setIndex) => setIndex(4),
              },
            ]}
          />
          <VisualInteraction
            key={4}
            text="all good, i'll be here in case you want to talk"
            decisions={[
              {
                name: "actually, i want to get checked in",
                action: (setIndex) => setIndex(5),
              },
            ]}
          />
          <VisualInteraction
            key={5}
            text="ok awesome, do you already have an account or should I make you one?"
            decisions={[
              {
                name: "log in",
                action: (setIndex) => setIndex(6),
              },
              {
                name: "sign up",
                action: (setIndex) => setIndex(7),
              },
            ]}
          />
          <VisualInteraction
            key={6}
            text="logging in..."
            decisions={[
              {
                name: "done",
                action: (setIndex) => setIndex(8),
              },
            ]}
          />
          <VisualInteraction
            key={7}
            text="signing up..."
            decisions={[
              {
                name: "done",
                action: (setIndex) => setIndex(8),
              },
            ]}
          />
          <VisualInteraction
            key={8}
            text="all done! welcome to muse hq, alex. feel free to explore!"
          />
          <VisualInteraction
            key={9}
            text="not even lying, it's better than it sounds. want to check in to get full access?"
            decisions={[
              {
                name: "sure!",
                action: (setIndex) => setIndex(5),
              },
              {
                name: "maybe later",
                action: (setIndex) => setIndex(4),
              },
            ]}
          />
          <VisualInteraction
            key={10}
            text="01000110 01010101 01000011 01001011 01011001 01001111 01010101 00100001 (that's fuck you in binary)"
          />
        </Dialogue>
      </LookAtPlayer>
    </group>
  );
}

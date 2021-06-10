import { Audio, useLimiter } from "spacesvr";
import { Vector2, Vector3 } from "three";
import { useEffect, useMemo, useState } from "react";
import { World } from "../../layers/basis";
import EmergingWorld from "./components/EmergingWorld";
import WorldPedestals from "./components/WorldPedestals";
import { useIdentityWorlds } from "./utils/worlds";
import { useFrame } from "@react-three/fiber";
import { TABLE_THETA } from "./assets/constants";
import { useActiveWorld } from "./utils/active";

export default function WorldDirectory() {
  const { worlds, error } = useIdentityWorlds();
  const { active, focus, setFocus } = useActiveWorld();

  return (
    <group name="world-directory" position={[-2.51, 0, -1.87]}>
      {/*<Floating height={0.075}>*/}
      {/*  <VisualIdea*/}
      {/*    position-y={2.75}*/}
      {/*    name="saas-1"*/}
      {/*    size={0.35}*/}
      {/*    utility={0.69}*/}
      {/*    mediation={0.4}*/}
      {/*    specificity={0.2}*/}
      {/*  />*/}
      {/*</Floating>*/}
      <Audio
        position-y={1.5}
        url="https://d27rt3a60hh1lx.cloudfront.net/audio/nocopyright-lofi-muse.mp3"
        rollOff={0.7}
        volume={1.6}
        dCone={new Vector3(360, 360, 0)}
      />
      <WorldPedestals num={7} />
      {worlds &&
        worlds.map((world, i) => (
          <EmergingWorld
            world={world}
            index={i}
            active={i === active}
            focus={i === focus}
            setFocus={setFocus}
          />
        ))}
    </group>
  );
}

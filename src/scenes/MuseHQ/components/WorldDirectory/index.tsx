import { Audio } from "spacesvr";
import { Vector3 } from "three";
import EmergingWorld from "./components/EmergingWorld";
import WorldPedestals from "./components/WorldPedestals";
import { useIdentityWorlds } from "./utils/worlds";
import { useActiveWorld } from "./utils/active";
import Settings from "./components/Settings";

export default function WorldDirectory() {
  const { worlds, error } = useIdentityWorlds();
  const { active, focus, setFocus } = useActiveWorld();

  return (
    <group name="world-directory" position={[-2.51, 0, -1.87]}>
      <Audio
        position-y={1.5}
        url="https://d27rt3a60hh1lx.cloudfront.net/audio/nocopyright-lofi-muse.mp3"
        rollOff={0.7}
        volume={1.6}
        dCone={new Vector3(360, 360, 0)}
      />
      <WorldPedestals num={9} />
      <Settings index={focus} worlds={worlds} />
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

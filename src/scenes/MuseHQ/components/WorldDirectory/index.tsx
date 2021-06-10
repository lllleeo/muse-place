import { VisualIdea } from "../../layers/basis/visual/VisualIdea";
import { Audio, Floating } from "spacesvr";
import { Vector3 } from "three";
import { useIdentity, useIdentitySnapshot } from "../../layers/identity";
import { useEffect, useState } from "react";
import { World } from "../../layers/basis";
import EmergingWorld from "./components/EmergingWorld";
import WorldPedestals from "./components/WorldPedestals";

export default function WorldDirectory() {
  const identity = useIdentity();
  const idSnapshot = useIdentitySnapshot();

  const [prevExists, setPrevExists] = useState(false);
  const [worlds, setWorlds] = useState<World[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const updateWorlds = async () => {
      const response = await identity.fetchWorlds();
      if (!response.success) {
        setError(response.message);
      } else {
        setWorlds(response.body);
      }
    };

    if (idSnapshot.exists && idSnapshot.exists !== prevExists) {
      setPrevExists(true);
      updateWorlds();
    }
  }, [prevExists, idSnapshot.exists]);

  console.log("===========");
  console.log(worlds);
  console.log(error);

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
      <WorldPedestals angle={0.5} num={8} />
      {worlds &&
        worlds.map((world, i) => <EmergingWorld world={world} index={i} />)}
    </group>
  );
}

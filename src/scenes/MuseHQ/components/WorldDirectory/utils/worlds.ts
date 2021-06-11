import { useIdentity, useIdentitySnapshot } from "../../../layers/identity";
import { useEffect, useState } from "react";
import { World } from "../../../layers/basis";

export const useIdentityWorlds = () => {
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
        const locWorlds = response.body.map(
          (world: any) =>
            new World({
              name: world.name,
              slug: world.slug,
              userId: world.user_id,
              rootIdea: world.root_idea,
              rootIdeaVersion: world.root_idea_version,
            })
        );
        setWorlds(locWorlds);
      }
    };

    if (idSnapshot.exists && idSnapshot.exists !== prevExists) {
      setPrevExists(true);
      updateWorlds();
    }
  }, [prevExists, idSnapshot.exists]);

  return { worlds, error };
};

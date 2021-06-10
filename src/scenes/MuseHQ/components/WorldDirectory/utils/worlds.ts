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
        setWorlds(response.body);
      }
    };

    if (idSnapshot.exists && idSnapshot.exists !== prevExists) {
      setPrevExists(true);
      updateWorlds();
    }
  }, [prevExists, idSnapshot.exists]);

  return { worlds, error };
};

import { useIdentitySnapshot } from "../../../layers/identity";
import { Dialogue } from "../../../layers/communication";

export const useLearnLogic = (): Dialogue => {
  const identity = useIdentitySnapshot();

  const NUM_WORLDS = identity?.worlds?.length || 0;
  const WORLD_STRING = NUM_WORLDS == 1 ? "world" : "worlds";

  return [
    {
      key: "learn",
      text: `this is the builder table, where us builders help you build your world`,
      decisions: [{ name: `cool`, nextKey: "learn-2", utility: 0.6 }],
    },
    {
      key: "learn-2",
      text: `each blob is one of your worlds. looks like you have ${NUM_WORLDS} ${WORLD_STRING}`,
      decisions: [{ name: `i see`, nextKey: "learn-3", utility: 0.6 }],
    },
    {
      key: "learn-3",
      text: `we just recently opened shop, so functionality is limited. keep checking back to see our progress!`,
      decisions: [{ name: `wow`, nextKey: "learn-4", utility: 0.6 }],
    },
    {
      key: "learn-4",
      text: `pretty soon, you'll be able to design every last idea for your world! are you hyped??`,
      decisions: [
        { name: `yeah!`, nextKey: "init", utility: 0.6 },
        { name: `meh`, nextKey: "init", utility: 0.6 },
      ],
    },
  ];
};

import { Dialogue } from "../../../layers/communication";

export const usePersonalLogic = (): Dialogue => {
  return [
    {
      key: "personal",
      text: `well my wife left me.`,
      decisions: [{ name: `oh no`, nextKey: "personal-2", utility: 0.6 }],
    },
    {
      key: "personal-2",
      text: `but work has never been more fun! i saw one of one of the muses come in last week - it was truly a sight to see`,
      decisions: [{ name: `cool`, nextKey: "init", utility: 0.6 }],
    },
  ];
};

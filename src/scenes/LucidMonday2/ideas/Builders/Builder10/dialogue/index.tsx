import { Dialogue } from "../../../../../MuseHQ/layers/communication";

export const useBuilder08Dialogue = (): Dialogue => {
  return [
    {
      key: "init",
      text: "ay make sure to join the discord here if you haven't already",
      decisions: [{ name: "for sure", nextKey: "idle" }],
    },
  ];
};

import { Dialogue } from "../../../../../MuseHQ/layers/communication";
import { useState } from "react";

export const useBuilder08Dialogue = (): Dialogue => {
  const [ct, setCt] = useState(0);

  return [
    {
      key: "init",
      effect: async () => setCt(ct + 1),
      text: "this place is the shit! nothing like some soothing psychedelics after a long day of building",
      decisions: [{ name: "you can say that again", nextKey: "next" }],
    },
    {
      key: "next",
      effect: async () => setCt(ct + 1),
      text: "this place is the shit! nothing like some soothing psychedelics after a long day of building",
      decisions: [
        { name: "you can say that again", nextKey: ct > 10 ? "mad" : "init" },
      ],
    },
    {
      key: "mad",
      text: "alright fuckwad, make like a tree and leaf me alone",
      decisions: [{ name: "sorry", nextKey: "sorry" }],
    },
    {
      key: "sorry",
      text: "it's ok, i forgive you. let's dance!",
    },
  ];
};

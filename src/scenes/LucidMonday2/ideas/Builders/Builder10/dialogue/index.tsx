import { Dialogue } from "../../../../../MuseHQ/layers/communication";
import { useState } from "react";

export const useBuilder08Dialogue = (): Dialogue => {
  return [
    {
      key: "init",
      text: "ay make sure to join the discord here if you haven't already",
      decisions: [{ name: "for sure", nextKey: "idle" }],
    },
    {
      key: "question",
      text: "you can't prove anything. what's real and whats not?",
      decisions: [{ name: "huh?", nextKey: "giveup" }],
    },
    {
      key: "hegot",
      text: "we got pure bangers, certified by the man Kanye himself",
      decisions: [{ name: "really?", nextKey: "lie" }],
    },
    {
      key: "giveup",
      text: "idk bro i'm exhausted from these shifts. just go look at some stuff",
      decisions: [{ name: "will do", nextKey: "idle" }],
    },
    {
      key: "lie",
      text: "nah just playing. but we do have some fire beats",
      decisions: [{ name: "i'll check it out", nextKey: "idle" }],
    },
    {
      key: "idle",
      text: "",
    },
  ];
};

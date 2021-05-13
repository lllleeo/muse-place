import useStateMachine from "@cassiozen/usestatemachine";
import { Decision } from "../../types/metaphysics";

export const useBuilder00Logic = () =>
  useStateMachine()({
    initial: "waiting",
    states: {
      waiting: {
        on: { INRANGE: "seeyou", SPEAK: "welcome" },
        effect() {
          console.log("entered waiting");
        },
      },
      seeyou: {
        on: { OUTRANGE: "waiting", SPEAK: "welcome" },
        effect() {
          console.log("entered seeyou");
        },
      },
      welcome: {
        on: { OUTRANGE: "waiting" },
        effect() {
          console.log("entered welcome");
        },
      },
    },
  });

type DialogueLogic = {
  key: string;
  text: string;
  decisions?: Decision[];
};

export const dialogueLogic: DialogueLogic[] = [
  {
    key: "0",
    text: "welcome to the musehq beta! sorry for the mess, we just opened up",
    decisions: [
      {
        name: "it's ok, what's going on?",
        action: (setIndex) => setIndex(1),
      },
      {
        name: "just check me in",
        action: (setIndex) => setIndex(5),
      },
    ],
  },
  {
    key: "1",
    text:
      "we're building people's realities! it's a fun process that immerses your audience in your brand",
    decisions: [
      {
        name: "that sounds awesome!",
        action: (setIndex) => setIndex(5),
      },
      {
        name: "that sounds lame",
        action: (setIndex) => setIndex(2),
      },
    ],
  },
  {
    key: "2",
    text: "that was fucking rude. go explore the site. or don't.",
    decisions: [
      {
        name: "i'm sorry",
        action: (setIndex) => setIndex(3),
      },
      {
        name: "aight bye",
        action: (setIndex) => setIndex(10),
      },
    ],
  },
  {
    key: "3",
    text:
      "it's ok, I know this is a lot to take in at once. want to get started making a site?",
    decisions: [
      {
        name: "sure!",
        action: (setIndex) => setIndex(5),
      },
      {
        name: "not now",
        action: (setIndex) => setIndex(4),
      },
    ],
  },
  {
    key: "4",
    text: "all good, i'll be here in case you want to talk",
    decisions: [
      {
        name: "actually, i want to get checked in",
        action: (setIndex) => setIndex(5),
      },
    ],
  },
  {
    key: "5",
    text:
      "ok awesome, do you already have an account or should I make you one?",
    decisions: [
      {
        name: "log in",
        action: (setIndex) => setIndex(6),
      },
      {
        name: "sign up",
        action: (setIndex) => setIndex(7),
      },
    ],
  },
  {
    key: "6",
    text: "logging in...",
    decisions: [
      {
        name: "wait go back",
        action: (setIndex) => setIndex(5),
      },
      {
        name: "done",
        action: (setIndex) => setIndex(8),
      },
    ],
  },
  {
    key: "7",
    text: "signing up...",
    decisions: [
      {
        name: "wait go back",
        action: (setIndex) => setIndex(5),
      },
      {
        name: "done",
        action: (setIndex) => setIndex(8),
      },
    ],
  },
  {
    key: "8",
    text: "all done! welcome to muse hq, alex. feel free to explore!",
  },
  {
    key: "9",
    text:
      "not even lying, it's better than it sounds. want to check in to get full access?",
    decisions: [
      {
        name: "sure!",
        action: (setIndex) => setIndex(5),
      },
      {
        name: "maybe later",
        action: (setIndex) => setIndex(4),
      },
    ],
  },
  {
    key: "10",
    text:
      "01000110 01010101 01000011 01001011 01011001 01001111 01010101 00100001 (that's fuck you in binary)",
  },
  {
    key: "11",
    text:
      "right? right? we're just now launching our beta, do you want to be one of our first testers?",
    decisions: [
      {
        name: "sure!",
        action: (setIndex) => setIndex(5),
      },
      {
        name: "nah",
        action: (setIndex) => setIndex(4),
      },
    ],
  },
];

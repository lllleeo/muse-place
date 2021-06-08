import useStateMachine from "@cassiozen/usestatemachine";
import { useIdentitySnapshot } from "../../../layers/identity";
import { useLoginLogic } from "../../../dialogue/login";
import { useSignupLogic } from "../../../dialogue/signup";
import { useState } from "react";
import { useGreeterLogic } from "./greeter";
import { useLogoutLogic } from "../../../dialogue/logout";
import { Dialogue } from "../../../layers/communication";

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

const FACTS = [
  "the mitochondria is the powerhouse of the cell",
  "this website is build with three.js!",
  "this website uses our Muse's custom framework called spacesvr, check it out on npm",
  "before we called ourselves Muse, we called ourselves spaces",
];

export const useDialogue = (): Dialogue => {
  const identity = useIdentitySnapshot();

  const loginLogic = useLoginLogic("init", "init");
  const logoutLogic = useLogoutLogic("init", "init");
  const signupLogic = useSignupLogic("init", "init");
  const greeterLogic = useGreeterLogic();

  const [fact, setFact] = useState(
    "the mitochondria is the powerhouse of the cell"
  );

  return [
    greeterLogic,
    {
      key: "edit",
      text:
        "let's do it! book a calendly link with us and we'll update your site as soon as possible",
      decisions: [
        {
          name: "book a calendly",
          nextKey: "init",
          onClick: () =>
            window.open(
              "https://calendly.com/muse-3muse/muse-demo-call",
              "_blank"
            ),
        },
        { name: "nevermind", nextKey: "init" },
      ],
    },
    {
      key: "explain",
      text:
        "here, we can provide you with the tools needed to bring your digital identity to life.\nwhat do you want to do?",
      decisions: [
        { name: "edit my 3d site", nextKey: "login" },
        { name: "build my first 3d site", nextKey: "signup" },
        { name: "explore", nextKey: "educate" },
      ],
    },
    {
      key: "liar",
      text: "liar",
      decisions: [{ name: "wait what", nextKey: "explain" }],
    },
    {
      key: "educate",
      text:
        "great, walk over to the trophy cases to explore other sites we've built! it's inside and to the left",
      decisions: [{ name: "thank you kind sir", nextKey: "init" }],
    },
    {
      key: "guidance",
      text:
        "awesome, my friend at the builder table will be able to help you get started building your world",
      decisions: [
        { name: "actually, log me in", nextKey: "login" },
        { name: "ok sounds good", nextKey: "init" },
      ],
    },
    {
      key: "fact",
      text: fact,
      effect: async () => {
        setFact(FACTS[Math.floor(Math.random() * FACTS.length)]);
      },
      decisions: [{ name: "thanks for that", nextKey: "init" }],
    },
    {
      key: "done",
      text: `all done! welcome again to muse hq, ${identity.name}! feel free to explore`,
      decisions: [{ name: "thanks", nextKey: "init" }],
    },
    ...logoutLogic,
    ...loginLogic,
    ...signupLogic,
  ];
};

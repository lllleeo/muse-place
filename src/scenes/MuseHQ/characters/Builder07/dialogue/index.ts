import useStateMachine from "@cassiozen/usestatemachine";
import { useLoginLogic } from "../../../dialogue/login";
import { useSignupLogic } from "../../../dialogue/signup";
import { Dialogue } from "../../../layers/communication";
import { useGreeterLogic } from "./greeting";
import { useLearnLogic } from "./learn";
import { usePersonalLogic } from "./personal";

export const useBuilder07Logic = () =>
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

export const useDialogue = (): Dialogue => {
  const loginLogic = useLoginLogic("init", "init");
  const signupLogic = useSignupLogic("init", "init");

  const greetingLogic = useGreeterLogic();
  const learnLogic = useLearnLogic();
  const personalLogic = usePersonalLogic();

  return [
    greetingLogic,
    ...learnLogic,
    ...personalLogic,
    ...loginLogic,
    ...signupLogic,
  ];
};

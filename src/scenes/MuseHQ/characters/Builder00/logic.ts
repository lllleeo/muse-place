import useStateMachine from "@cassiozen/usestatemachine";

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

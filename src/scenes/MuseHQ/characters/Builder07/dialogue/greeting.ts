import { useIdentitySnapshot } from "../../../layers/identity";
import { Interaction } from "../../../layers/communication";

export const useGreeterLogic = (): Interaction => {
  const identity = useIdentitySnapshot();

  const SIGNED_IN = identity.exists;
  const NUM_WORLDS = identity?.worlds?.length || 0;
  const HAS_WORLD_UNDER_CONSTRUCTION =
    identity?.worlds?.find((world) => world.rootIdea === undefined) || false;

  if (SIGNED_IN) {
    if (NUM_WORLDS === 0) {
      return {
        key: "init",
        text: `i see you haven't made any worlds yet. you feeling crafty?`,
        decisions: [{ name: "what is this?", nextKey: "learn" }],
      };
    }

    if (NUM_WORLDS === 1 && HAS_WORLD_UNDER_CONSTRUCTION) {
      return {
        key: "init",
        text: `your world is being hand crafted by some talented builders. check back soon!`,
        decisions: [{ name: "what is this?", nextKey: "learn" }],
      };
    }

    return {
      key: "init",
      text: `look who it is! can't wait to see what you're cooking up, ${identity.name}`,
      decisions: [
        { name: "how do you use this?", nextKey: "learn" },
        { name: `how have you been?`, nextKey: "personal" },
      ],
    };
  } else
    return {
      key: "init",
      text: `what's up good lookin' – can i get to know you before we start building your world?`,
      decisions: [
        {
          name: "log in",
          nextKey: "login",
          utility: 0.6,
        },
        {
          name: "sign up",
          nextKey: "signup",
          utility: 0.95,
        },
      ],
    };
};

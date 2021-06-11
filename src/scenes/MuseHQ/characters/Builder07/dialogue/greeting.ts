import { useIdentitySnapshot } from "../../../layers/identity";
import { Interaction } from "../../../layers/communication";

export const useGreeterLogic = (): Interaction => {
  const identity = useIdentitySnapshot();

  const SIGNED_IN = identity.exists;
  const NUM_WORLDS = identity?.worlds?.length || 0;

  if (SIGNED_IN) {
    if (NUM_WORLDS === 0) {
      return {
        key: "init",
        text: `i see you haven't made any worlds yet. you feeling crafty?`,
        decisions: [{ name: "what is this?", nextKey: "learn", utility: 0.95 }],
      };
    }

    return {
      key: "init",
      text: `look who it is! can't wait to see what you're cooking up, ${identity.name}`,
      decisions: [
        { name: "how do you use this?", nextKey: "learn", utility: 0.95 },
        { name: `how have you been?`, nextKey: "personal", utility: 0.6 },
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

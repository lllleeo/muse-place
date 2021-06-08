import { useIdentitySnapshot } from "../../../layers/identity";
import { Interaction } from "../../../layers/communication";

export const useGreeterLogic = (): Interaction => {
  const identity = useIdentitySnapshot();

  const SIGNED_IN = identity.exists;

  if (SIGNED_IN)
    return {
      key: "init",
      text: `yo what's up ${identity.name}, how can I help?`,
      decisions: [
        { name: `i'm not ${identity.name}`, nextKey: "logout", utility: 0.6 },
        { name: "help me edit my site", nextKey: "edit", utility: 0.95 },
        { name: "what's on your mind?", nextKey: "fact", utility: 0.95 },
      ],
    };
  else
    return {
      key: "init",
      text: `welcome to muse hq! I bet you've never seen such an immersive website!`,
      decisions: [
        { name: `no, what's it all about?`, nextKey: "explain", utility: 0.6 },
        { name: `pshh, I've seen plenty`, nextKey: "liar", utility: 0.6 },
      ],
    };
};

import { useIdentity } from "../layers/identity";
import { Dialogue } from "../layers/communication";

export const useLogoutLogic = (inKey: string, outKey: string): Dialogue => {
  const identity = useIdentity();

  return [
    {
      key: "logout",
      text: `my bad, you sure you want to log out?`,
      decisions: [
        {
          name: "yeah",
          nextKey: "login-action",
        },
        {
          name: "nevermind",
          nextKey: inKey,
        },
      ],
    },
    {
      key: "login-action",
      text: "i'll never forget you...",
      effect: async () => {
        await identity.logout();
        return outKey;
      },
    },
  ];
};

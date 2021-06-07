import { useIdentity } from "../layers/identity";
import { DialogueLogic } from "../layers/communication/visual/VisualDialogueLogic";

export const useLogoutLogic = (
  inKey: string,
  outKey: string
): DialogueLogic => {
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

import { useState } from "react";
import { DialogueLogic } from "../layers/communication/visual/VisualDialogueLogic";
import { useIdentity, useIdentitySnapshot } from "../layers/identity";

export const useSignupLogic = (
  inKey: string,
  outKey: string
): DialogueLogic => {
  const identity = useIdentity();
  const idSnapshot = useIdentitySnapshot();

  const [error, setError] = useState<string>();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [siteName, setSiteName] = useState("");
  const [generate, setGenerate] = useState("");
  const [username, setUsername] = useState("");

  return [
    {
      key: "signup",
      text: "let's get you signed up. what's your first name?",
      input: { value: name, setValue: setName },
      decisions: [
        { name: "submit", nextKey: "signup-email" },
        { name: "cancel", nextKey: inKey },
      ],
    },
    {
      key: "signup-email",
      text: "what email do you check most often?",
      input: { value: email, setValue: setEmail },
      decisions: [
        { name: "submit", nextKey: "signup-password" },
        { name: "cancel", nextKey: inKey },
      ],
    },
    {
      key: "signup-password",
      text: "put in a password. i won't look, i promise",
      input: { value: password, setValue: setPassword, type: "password" },
      decisions: [
        { name: "submit", nextKey: "signup-password-2" },
        { name: "cancel", nextKey: inKey },
      ],
    },
    {
      key: "signup-password-2",
      text: "enter it again to double check",
      input: { value: password2, setValue: setPassword2, type: "password" },
      decisions: [
        ...(password !== "" && password === password2
          ? [
              {
                name: "submit",
                nextKey: "signup-sitename",
              },
            ]
          : []),
        { name: "go back", nextKey: "signup-password" },
      ],
    },
    {
      key: "signup-sitename",
      text: "what do you want your world to be called?\nmuse.place/______",
      input: { value: siteName, setValue: setSiteName },
      decisions: [
        ...(password !== "" && password === password2
          ? [
              {
                name: "submit",
                nextKey: "signup-generate",
              },
            ]
          : []),
        { name: "cancel", nextKey: inKey },
      ],
    },
    {
      key: "signup-generate",
      text: "how do you want to populate your site?",
      decisions: [
        {
          name: "instagram",
          nextKey: "signup-username",
          onClick: () => setGenerate("instagram"),
        },
        {
          name: "twitter",
          nextKey: "signup-username",
          onClick: () => setGenerate("twitter"),
        },
        {
          name: "opensea",
          nextKey: "signup-username",
          onClick: () => setGenerate("opensea"),
        },
        { name: "go back", nextKey: "signup-sitename" },
      ],
    },
    {
      key: "signup-username",
      text: `what's your username on ${generate}?`,
      input: {
        value: username,
        setValue: setUsername,
      },
      decisions: [
        { name: "finish sign up", nextKey: "signup-signup" },
        { name: "go back", nextKey: "signup-generate" },
        { name: "cancel", nextKey: inKey },
      ],
    },
    {
      key: "signup-signup",
      text: "signing up...",
      effect: async () => {
        if (!idSnapshot.exists) {
          setError(undefined);
          const result = await identity.signup(name, email, password);
          if (result.success) {
            return "signup-login";
          } else {
            setError(result.message);
            return "signup-error";
          }
        }
      },
    },
    {
      key: "signup-login",
      text: "logging in...",
      effect: async () => {
        if (!idSnapshot.exists) {
          setError(undefined);
          const result = await identity.login(email, password);
          if (result.success) {
            return "signup-background";
          } else {
            setError(result.message);
            return "signup-error";
          }
        }
      },
    },
    {
      key: "signup-background",
      text: "running a background check...",
      effect: async () => {
        setError(undefined);
        const result = await identity.fetch();
        if (result.success) {
          return outKey;
        } else {
          setError(result.message);
          return "signup-error";
        }
      },
    },
    {
      key: "signup-error",
      text: `error: ${error}`,
      decisions: [
        {
          name: "try again",
          nextKey: "signup",
        },
        {
          name: "nevermind",
          nextKey: inKey,
        },
      ],
    },
  ];
};

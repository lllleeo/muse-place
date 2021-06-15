import { useState } from "react";
import { useIdentity, useIdentitySnapshot } from "../layers/identity";
import { Dialogue } from "../layers/communication";

export const useLoginLogic = (inKey: string, outKey: string): Dialogue => {
  const identity = useIdentity();
  const idSnapshot = useIdentitySnapshot();

  const [error, setError] = useState<string>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return [
    {
      key: "login",
      text: "let's log you in. what's your email?",
      input: {
        value: email,
        setValue: setEmail,
      },
      decisions: [
        {
          name: "submit",
          nextKey: "login-password",
        },
        {
          name: "cancel",
          nextKey: inKey,
        },
      ],
    },
    {
      key: "login-password",
      text: "what is your password? i won't look, i promise",
      input: {
        value: password,
        setValue: setPassword,
        type: "password",
      },
      decisions: [
        {
          name: "submit",
          nextKey: "login-login",
        },
        {
          name: "cancel",
          nextKey: inKey,
        },
      ],
    },
    {
      key: "login-login",
      text: "logging in...",
      effect: async () => {
        setError(undefined);
        const result = await identity.login(email, password);
        if (result.success) {
          return "login-background";
        } else {
          setError(result.message);
          return "login-error";
        }
      },
    },
    {
      key: "login-background",
      text: "running a background check...",
      effect: async () => {
        setError(undefined);
        const result = await identity.fetch();
        if (result.success) {
          return outKey;
        } else {
          setError(result.message);
          return "error";
        }
      },
    },
    {
      key: "login-error",
      text: `error: ${error}`,
      decisions: [
        {
          name: "try again",
          nextKey: "login",
        },
        {
          name: "nevermind",
          nextKey: inKey,
        },
      ],
    },
  ];
};

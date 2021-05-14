import { createContext, useContext } from "react";
import { ReactNode } from "react";
import { proxy } from "valtio";

export class Identity {
  exists: boolean;
  name: string | undefined;

  constructor() {
    this.exists = false;
    this.name = undefined;
  }

  login(
    username: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> {
    // TODO backend call
    console.log("login with username", username);
    console.log("login with password", password);

    return new Promise((res) =>
      setTimeout(() => {
        this.name = "new user";
        res({ success: true });
      }, 2000)
    );
  }

  signup(
    username: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> {
    // TODO backend call
    console.log("signup with username", username);
    console.log("signup with password", password);

    return new Promise((res) =>
      setTimeout(() => {
        this.name = "new user";
        res({ success: true });
      }, 2000)
    );
  }
}

type IdentityState = { identity: Identity };

export const IdentityContext = createContext<IdentityState>(
  {} as IdentityState
);

export function useIdentity(): Identity {
  return useContext(IdentityContext).identity;
}

export function IdentityLayer(props: { children: ReactNode | ReactNode[] }) {
  const { children } = props;

  const identity = proxy<IdentityState>({ identity: new Identity() });

  return (
    <IdentityContext.Provider value={identity}>
      {children}
    </IdentityContext.Provider>
  );
}

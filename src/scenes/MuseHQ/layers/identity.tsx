import { createContext, useContext, useEffect } from "react";
import { ReactNode } from "react";
import { proxy, useSnapshot, ref } from "valtio";
import fetch, { RequestInit } from "node-fetch";
import { analytics } from "../utils/analytics";
import { World } from "./basis";

const TOKEN_ID = "muse-jwt";
const URL = process.env.NEXT_PUBLIC_BACKEND_URL;
type Response<T = any> = { message?: string; success: boolean; body?: T };

export class Identity {
  uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
  exists = false;
  name = undefined;
  email = undefined;
  token = localStorage.getItem(TOKEN_ID) || undefined;
  groups = undefined;

  async login(email: string, password: string): Promise<Response> {
    const params: RequestInit = {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(`${URL}/auth/sign_in`, params);
    const json = await response.json();

    analytics.capture("login", { email });

    if (response.status === 200) {
      this.setToken(json.token);
    }

    return { success: response.status === 200, message: json.message };
  }

  async signup(
    name: string,
    email: string,
    password: string,
    siteName: string,
    groups?: string[]
  ): Promise<Response> {
    const params: RequestInit = {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
        code: "",
      }),
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(`${URL}/auth/sign_up`, params);
    const json = await response.json();

    analytics.capture("signup", { name, email });

    return { success: response.status === 200, message: json.message };
  }

  async fetch(): Promise<Response> {
    if (!this.token) {
      return { success: false, message: "not logged in" };
    }

    const params: RequestInit = {
      headers: { Authorization: `bearer ${this.token}` },
    };

    const response = await fetch(`${URL}/auth/user_info`, params);
    const json = await response.json();

    if (response.status === 200) {
      this.name = json.name;
      this.email = json.email;
      this.groups = json.groups;
      this.exists = true;
      analytics.identify(json.email, { name: this.name });
    } else {
      this.exists = false;
      this.setToken(undefined);
    }

    return { success: response.status === 200, message: json.message };
  }

  async logout() {
    this.setToken(undefined);
    this.name = undefined;
    this.email = undefined;
    this.groups = undefined;
    this.exists = false;
    await new Promise((res) => setTimeout(res, 1500));
  }

  async fetchWorlds(): Promise<Response<World[]>> {
    if (!this.exists) {
      return { success: false, message: "Not logged in" };
    }

    const params: RequestInit = {
      headers: { Authorization: `bearer ${this.token}` },
    };

    const response = await fetch(
      `${URL}/worlds/fetch_all?worlds_id=${this.email}`,
      params
    );

    const json = await response.json();

    return {
      success: response.status === 200,
      message: json.message,
      body: json,
    };
  }

  setToken(token: string | undefined) {
    this.token = token;

    if (token) {
      localStorage.setItem(TOKEN_ID, token);
    } else {
      localStorage.removeItem(TOKEN_ID);
    }
  }
}

const initIdentity = proxy(new Identity());
export const IdentityContext = createContext<Identity>(initIdentity);

export function useIdentity(): Identity {
  return useContext(IdentityContext);
}

export function useIdentitySnapshot(): Identity {
  return useSnapshot(useContext(IdentityContext));
}

export function IdentityLayer(props: { children: ReactNode | ReactNode[] }) {
  const { children } = props;

  useEffect(() => {
    initIdentity.fetch();
  }, []);

  return (
    <IdentityContext.Provider value={initIdentity}>
      {children}
    </IdentityContext.Provider>
  );
}

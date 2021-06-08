export type Decision = {
  name: string;
  action?: () => void;
  utility?: number;
  nextKey?: string;
  onClick?: () => any;
};

export type Interaction = {
  key: string;
  effect?: () => Promise<any>;
  text: string;
  input?: {
    value: string;
    setValue: (s: string) => string | void;
    type?: "text" | "password" | "email";
  };
  decisions?: Decision[];
};

export type Dialogue = Interaction[];

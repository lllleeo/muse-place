import { Decision, Idea, Interaction } from "../types/metaphysics";
// @ts-ignore
import * as culori from "culori";

const MAGIC_NUM = 50000; // each char is roughly 100, so loop every ~50 chars

export const DEFAULT_IDEA: Idea = {
  mediation: 0,
  specificity: 0,
  utility: 0.5,
};

export const getIdeaHex = (idea: Idea): string => {
  const fixedColor = culori.rgb({
    mode: "oklch",
    l: idea.utility,
    c: idea.specificity * 0.322,
    h: idea.mediation * 360,
  });

  return culori.formatHex(fixedColor);
};

export const getInteractionIdea = (interaction: Interaction): Idea => {
  const len = interaction.text.length;

  return {
    mediation: (hashStringToNum(interaction.text) % MAGIC_NUM) / MAGIC_NUM,
    specificity: (1 - (len == 0 ? 1 : 1 / len)) * 0.5,
    utility: interaction.decisions ? 0.75 : 0.5,
  };
};

export const getDecisionIdea = (decision: Decision) => {
  const len = decision.name.length;

  return {
    mediation: (hashStringToNum(decision.name) % 5000) / 5000,
    specificity: (1 - (len === 0 ? 1 : 1 / len)) * 0.6,
    utility: 1 - 1 / decision.action.toString().length,
  };
};

export const getInteractionHex = (interaction: Interaction): string => {
  return getIdeaHex(getInteractionIdea(interaction));
};

const hashStringToNum = (str: string): number => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count += str.substr(i, 1).charCodeAt(0);
  }
  return count;
};

import { GroupProps, useFrame } from "@react-three/fiber";
import { Idea } from "../../types/metaphysics";
import Bubbles from "./components/Bubbles";
import { createContext, ReactNode, useMemo, useState } from "react";
import Base from "./components/Base";
import { DEFAULT_IDEA } from "../../utils/metaphysics";
import { MathUtils } from "three";

type DialogueProps = {
  source?: [number, number, number];
  numStops?: number;
  enabled?: boolean;
  children: ReactNode | ReactNode[];
};

type DialogueState = {
  index: number;
  setIndex: (n: number) => void;
  source: [number, number, number];
  numStops: number;
  enabled: boolean;
  currentIdea: Idea;
};

export const DialogueContext = createContext<DialogueState>(
  {} as DialogueState
);

export default function Dialogue(props: DialogueProps & GroupProps) {
  const {
    source = [0.9, -0.5, -0.2],
    numStops = 5,
    enabled = false,
    children,
    ...rest
  } = props;

  const [index, setIndex] = useState(0);
  const currentIdea = useMemo(
    () => ({ specificity: 0, mediation: 0, utility: 0.5 }),
    []
  );

  useFrame(() => {
    const targetIdea = DEFAULT_IDEA;

    if (!deepCompareObjects(currentIdea, targetIdea)) {
      currentIdea.mediation = MathUtils.lerp(
        currentIdea.mediation,
        targetIdea.mediation,
        0.05
      );
      currentIdea.utility = MathUtils.lerp(
        currentIdea.utility,
        targetIdea.utility,
        0.05
      );
      currentIdea.specificity = MathUtils.lerp(
        currentIdea.specificity,
        targetIdea.specificity,
        0.05
      );
    }
  });

  return (
    <group name="dialogue" {...rest}>
      <DialogueContext.Provider
        value={{
          index,
          setIndex,
          source,
          numStops,
          enabled,
          currentIdea,
        }}
      >
        <Bubbles />
        <Base>{children}</Base>
      </DialogueContext.Provider>
    </group>
  );
}

const deepCompareObjects = (o1: any, o2: any) => {
  for (var p in o1) {
    if (o1.hasOwnProperty(p)) {
      if (o1[p] !== o2[p]) {
        return false;
      }
    }
  }
  for (var p in o2) {
    if (o2.hasOwnProperty(p)) {
      if (o1[p] !== o2[p]) {
        return false;
      }
    }
  }
  return true;
};

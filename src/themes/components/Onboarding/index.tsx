import { useEffect, useState } from "react";
import Mobile from "./platform/Mobile";
import { isMobile } from "react-device-detect";
import Desktop from "./platform/Desktop";
import { Tool, useEnvironment } from "spacesvr";

export default function Onboarding() {
  const [stage, setStage] = useState(0);
  const [active, setActive] = useState(false);
  const [alreadyDone] = useState(
    localStorage.getItem("musesite-onboarding") === "done"
  );

  const { paused } = useEnvironment();

  useEffect(() => {
    if (!alreadyDone && !paused) {
      setActive(true);
    }
  }, [paused]);

  useEffect(() => {
    if (stage === -1) {
      localStorage.setItem("musesite-onboarding", "done");
      setActive(false);
    }
  }, [stage]);

  if (!active) {
    return null;
  }

  return (
    <Tool pos={[0, 0]} distance={isMobile ? 12 : 7}>
      {isMobile && <Mobile stage={stage} setStage={setStage} />}
      {!isMobile && <Desktop stage={stage} setStage={setStage} />}
    </Tool>
  );
}

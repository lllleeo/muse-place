import { useEnvironment } from "spacesvr";
import PopupContainer from "../components/PopupContainer";
import { useState } from "react";
import { giveaways } from "../../assets/giveaways";
import Coming from "./components/Coming";
import SoldOut from "./components/SoldOut";
import Input from "./components/Input";
import Trivia from "./components/Trivia";
import Overlay from "../../modifiers/Overlay";

export type Status = "coming" | "trivia" | "input" | "soldout";

const GiveawayTrigger = () => {
  const { paused, overlay, setPaused } = useEnvironment();

  const [status, setStatus] = useState<Status>("trivia");

  if (!paused || overlay !== "giveaway") {
    if (status !== "trivia") {
      setStatus("trivia");
    }
    return null;
  }

  const giveaway = giveaways[0];

  return (
    <Overlay>
      <PopupContainer centered onClose={() => setPaused(false)}>
        {status === "coming" && <Coming giveaway={giveaway} />}
        {status === "trivia" && (
          <Trivia giveaway={giveaway} setStatus={setStatus} />
        )}
        {status === "input" && <Input giveaway={giveaway} />}
        {status === "soldout" && <SoldOut giveaway={giveaway} />}
      </PopupContainer>
    </Overlay>
  );
};

export default GiveawayTrigger;

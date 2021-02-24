import { useEnvironment } from "spacesvr";
import Overlay from "../../modifiers/Overlay";
import PopupContainer from "../components/PopupContainer";
import { useState } from "react";
import { giveaways } from "../../assets/giveaways";
import Coming from "./components/Coming";
import SoldOut from "./components/SoldOut";
import Available from "./components/Available";

type Status = "coming" | "available" | "soldout";

const GiveawayTrigger = () => {
  const { paused, overlay, setPaused } = useEnvironment();

  const [status, setStatus] = useState<Status>("coming");

  if (!paused || overlay !== "giveaway") {
    return null;
  }

  const giveaway = giveaways[0];

  return (
    <Overlay>
      <PopupContainer centered onClose={() => setPaused(false)}>
        {status === "coming" && <Coming giveaway={giveaway} />}
        {status === "available" && <Available giveaway={giveaway} />}
        {status === "soldout" && <SoldOut giveaway={giveaway} />}
      </PopupContainer>
    </Overlay>
  );
};

export default GiveawayTrigger;

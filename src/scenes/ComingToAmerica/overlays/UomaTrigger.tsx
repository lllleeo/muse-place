import { useEnvironment } from "spacesvr";
import Overlay from "../modifiers/Overlay";
import PopupContainer from "./components/PopupContainer";
import {
  Subtitle,
  Title,
  Body,
  ButtonContainer,
  Button,
} from "./components/Styles";
import { filters } from "../assets/filters";

const UomaTrigger = () => {
  const { paused, overlay, setPaused } = useEnvironment();

  if (!paused || overlay !== "uoma") {
    return null;
  }

  const filterset = filters.uoma;

  return (
    <Overlay>
      <PopupContainer centered onClose={() => setPaused(false)}>
        <Title>SHARON CHUTER X ZERINA AKERS</Title>
        <Subtitle>POWERED BY UOMA BEAUTY</Subtitle>
        <Body>
          Come back Tuesday, March 2nd at 12pm EST for a BTS look into a
          day-on-the-set-life of fashion stylist Zerina Akers and UOMA Beauty
          CEO Sharon Chuter as they collaborate on a shoot honoring Black queens
          and discuss the topics that matter to them the most.
        </Body>
        <Subtitle>TRY THE FILTERS</Subtitle>
        <ButtonContainer>
          {filterset.map((filter, index) => (
            <Button onClick={() => setPaused(true, `photobooth-uoma-${index}`)}>
              {filter.name.toUpperCase()}
            </Button>
          ))}
        </ButtonContainer>
      </PopupContainer>
    </Overlay>
  );
};

export default UomaTrigger;

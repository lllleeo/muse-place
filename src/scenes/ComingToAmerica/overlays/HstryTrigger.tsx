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
import styled from "@emotion/styled";

const StyledSubtitle = styled(Subtitle)`
  font-weight: normal;
  margin: 1.5rem auto;
  text-align: center;
`;

const HstryTrigger = () => {
  const { paused, overlay, setPaused } = useEnvironment();

  if (!paused || overlay !== "hstry") {
    return null;
  }

  const filterset = filters.hstry;

  return (
    <Overlay>
      <PopupContainer centered onClose={() => setPaused(false)}>
        <Title>BARBERSHOP HSTRY</Title>
        <Subtitle>POWERED BY HSTRY</Subtitle>
        <Body>
          Nas shares personal anecdotes detailing his experience of the
          Barbershop. These intimate stories serve as the introduction to a
          discussion between beauty journalist Darian Symone Harvin and a
          Historian/Author/Researcher as they tie historical facts and research
          to the Barbershop experience.
        </Body>
        <StyledSubtitle>
          Come back at 12pm EST to see this exclusive content!
        </StyledSubtitle>
        <Subtitle>TRY THE FILTERS</Subtitle>
        <ButtonContainer>
          {filterset.map((filter, index) => (
            <Button
              onClick={() => setPaused(true, `photobooth-hstry-${index}`)}
            >
              {filter.name.toUpperCase()}
            </Button>
          ))}
        </ButtonContainer>
      </PopupContainer>
    </Overlay>
  );
};

export default HstryTrigger;

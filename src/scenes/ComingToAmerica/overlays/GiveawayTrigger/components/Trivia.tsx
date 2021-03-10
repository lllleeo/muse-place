import { Giveaway } from "../../../assets/giveaways";
import { Button, Title, Body, Subtitle } from "../../components/Styles";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Status } from "../index";

const StyledBody = styled(Body)`
  margin-top: 5px;
  max-width: 350px;
`;

const StyledSubtile = styled(Subtitle)`
  max-width: 350px;
`;

const StyledButton = styled(Button)`
  &:disabled {
    color: gray;
    border-color: gray;
    pointer-events: none;
  }
`;

const Content = styled.div`
  width: 95%;
  max-width: 500px;
`;

const ErrorText = styled(Body)`
  color: red;
  margin: 1.5rem auto 0;
`;

const GoodText = styled(Body)`
  color: green;
  margin: 1.5rem auto 0;
`;

const TIMEOUT = 3;

const Trivia = (props: {
  giveaway: Giveaway;
  setStatus: (s: Status) => void;
}) => {
  const { giveaway, setStatus } = props;

  const [disableTime, setDisableTime] = useState(0);
  const [right, setRight] = useState(false);

  useEffect(() => {
    if (disableTime > 0) {
      setTimeout(() => setDisableTime(disableTime - 1), 1000);
    }
  }, [disableTime]);

  useEffect(() => {
    if (right) {
      setTimeout(() => setStatus("input"), 2000);
    }
  }, [right]);

  const wrong = disableTime > 0;

  return (
    <>
      <Title>{giveaway.name.toUpperCase()} GIVEAWAY</Title>
      <StyledSubtile>
        Answer the following question correctly for a chance to win!
      </StyledSubtile>
      <br />
      <StyledBody>Question 1: Where is General Izzy from?</StyledBody>
      <StyledButton disabled={wrong} onClick={() => setDisableTime(TIMEOUT)}>
        Westphoria
      </StyledButton>
      <StyledButton disabled={wrong} onClick={() => setRight(true)}>
        Youknowia
      </StyledButton>
      <StyledButton disabled={wrong} onClick={() => setDisableTime(TIMEOUT)}>
        Nextdoria
      </StyledButton>
      <br />
      {wrong && (
        <ErrorText>
          Sorry, wrong answer! Try again in {disableTime} second
          {disableTime == 1 ? "" : "s"}.
        </ErrorText>
      )}
      {right && (
        <GoodText>Good job! Fill out your info to get your free swag!</GoodText>
      )}
      <br />
    </>
  );
};

export default Trivia;

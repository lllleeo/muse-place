import { Giveaway } from "../../../assets/giveaways";
import { Button, Title, Body } from "../../components/Styles";
import styled from "@emotion/styled";

const StyledBody = styled(Body)`
  margin-top: 5px;
  max-width: 350px;
`;

const StyledButton = styled(Button)`
  float: right;
`;

const Content = styled.div`
  width: 95%;
  max-width: 500px;
`;

const Input = (props: { giveaway: Giveaway }) => {
  const { giveaway } = props;

  return (
    <>
      <Title>{giveaway.name.toUpperCase()} GIVEAWAY</Title>
      <StyledBody>{giveaway.availableText}</StyledBody>
      <Content>
        <StyledButton>SUBMIT</StyledButton>
      </Content>
    </>
  );
};

export default Input;

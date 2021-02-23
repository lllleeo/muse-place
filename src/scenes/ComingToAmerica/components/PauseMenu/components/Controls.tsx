import styled from "@emotion/styled";
import { isMobile } from "react-device-detect";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

const Container = styled.div`
  width: 100%;
  height: 40%;
`;

const Text = styled.div`
  width: 100%;
  height: auto;
  margin: 10px 0;
  font-family: "Roboto", sans-serif, monospace;
  font-size: 0.7em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > p {
    margin: 0.2em;
  }
`;

const KeyboardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Controls = () => {
  if (isMobile) {
    return (
      <Text>
        <p>Move around: Joystick</p>
        <p>Look around: Drag</p>
        <p>Pause: Menu Button</p>
      </Text>
    );
  }

  return (
    <Container>
      <KeyboardImage src={`${CONTENT_FOLDER}/keypaddirect.png`} />
    </Container>
  );
};

export default Controls;

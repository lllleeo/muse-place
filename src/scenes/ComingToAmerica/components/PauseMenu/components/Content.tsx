import styled from "@emotion/styled";
import { isMobile } from "react-device-detect";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 20px;
  box-sizing: border-box;
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

const Logo = styled.img`
  width: 75%;
  height: auto;
  object-fit: contain;
`;

const Tagline = styled.p`
  font-size: 0.9rem;
  text-align: center;
  margin: 1.5rem 0;
`;

const Content = () => {
  return (
    <Container>
      <Logo
        src={`${CONTENT_FOLDER}/images/C2A_Website_2-LINE-GOLD-optimized.png`}
      />
      <Tagline>now let's see if you can walk the walk.</Tagline>
      <Text>
        <p>Move around: {isMobile ? "Joystick" : "W/A/S/D"}</p>
        <p>Look around: {isMobile ? "Drag" : "Mouse"}</p>
        <p>Pause: {isMobile ? "Menu Button" : "Esc"}</p>
      </Text>
    </Container>
  );
};

export default Content;

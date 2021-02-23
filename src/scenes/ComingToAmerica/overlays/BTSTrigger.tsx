import { useEnvironment } from "spacesvr";
import styled from "@emotion/styled";
import Overlay from "../modifiers/Overlay";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  color: white;
  background-color: #0000007f;
  text-align: center;
  transition: opacity 0.15s linear;

  z-index: 101;
`;

const BTSTrigger = () => {
  const { paused, overlay, setPaused } = useEnvironment();

  if (!paused || overlay !== "bts") {
    return null;
  }

  return (
    <Overlay>
      <Container onClick={() => setPaused(false)}>close dis bitch</Container>
    </Overlay>
  );
};

export default BTSTrigger;

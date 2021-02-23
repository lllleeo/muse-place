import styled from "@emotion/styled";
import { useEnvironment } from "spacesvr";
import Background from "./components/Background";
import Content from "./components/Content";

const Container = styled.div<{ paused: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transition: opacity 0.25s ease;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${(props) => (props.paused ? 1 : 0)};
  pointer-events: ${(props) => (props.paused ? "all" : "none")};
`;

const ClickContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Window = styled.div`
  position: relative;
  width: 90%;
  max-width: 450px;
  height: 90%;
  max-height: 450px;

  font-family: sans-serif;

  border-radius: 3%;
  overflow: hidden;
`;

const Continue = styled.div`
  width: 90%;
  max-width: 400px;
  height: auto;
  cursor: pointer;
  text-align: center;
  font-size: 1.3em;
  font-family: "Quicksand", sans-serif;
  transition: opacity 0.15s linear;
  margin-top: 20px;
  background: white;
  line-height: 1em;
  padding: 12px 0;
  border-radius: 10px;
  :hover {
    opacity: 0.5;
  }
`;

const PauseMenu = () => {
  const { paused, overlay, setPaused } = useEnvironment();
  const closeOverlay = () => setPaused(false);

  if (overlay) {
    return null;
  }

  return (
    <Container paused={paused}>
      <ClickContainer onClick={closeOverlay} />
      <Window>
        <Background />
        <Content />
      </Window>
      <Continue onClick={closeOverlay}>continue</Continue>
    </Container>
  );
};

export default PauseMenu;

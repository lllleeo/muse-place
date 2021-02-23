import styled from "@emotion/styled";
import { useEnvironment } from "spacesvr";
import Overlay from "../../modifiers/Overlay";
import PopupContainer from "../components/PopupContainer";
import { Title } from "../components/Styles";
import ARFilter from "./components/ARFilter";

const Container = styled.div`
  width: 95%;
  max-width: 450px;
  margin: 0 auto;
  position: relative;
  min-height: 450px;
`;

const PhotoTrigger = () => {
  const { paused, overlay, setPaused } = useEnvironment();

  if (!paused || overlay !== "photobooth") {
    return null;
  }

  return (
    <Overlay>
      <PopupContainer onClose={() => setPaused(false)}>
        <Title>Photo Booth</Title>
        <Container>
          <ARFilter />
        </Container>
      </PopupContainer>
    </Overlay>
  );
};

export default PhotoTrigger;

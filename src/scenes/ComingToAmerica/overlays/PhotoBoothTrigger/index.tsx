import styled from "@emotion/styled";
import { useEnvironment } from "spacesvr";
import Overlay from "../../modifiers/Overlay";
import PopupContainer from "../components/PopupContainer";
import { Title } from "../components/Styles";
import ARFilter from "./components/ARFilter";
import { filters } from "../../assets/filters";

const Container = styled.div`
  width: 95%;
  max-width: 450px;
  margin: 0 auto;
  position: relative;
  min-height: 450px;
`;

const PhotoBoothTrigger = () => {
  const { paused, overlay, setPaused } = useEnvironment();

  if (!paused || !overlay || !overlay.includes("photobooth")) {
    return null;
  }

  const type = overlay.split("-")[1];
  const index = parseInt(overlay.split("-")[2]);

  const filter = filters[type][index];

  console.log(filter);

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

export default PhotoBoothTrigger;

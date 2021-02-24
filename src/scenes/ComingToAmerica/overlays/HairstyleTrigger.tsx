import { useEnvironment } from "spacesvr";
import Overlay from "../modifiers/Overlay";
import { Title, Button, Close } from "./components/Styles";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { characters } from "../assets/characters";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  overflow-y: scroll;
`;

const Content = styled.div`
  position: relative;
  width: 95%;
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const CardsContainer = styled.div`
  width: 95%;
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem auto;
`;

const Character = styled.img`
  width: calc(100% / 7 - 4px);
  height: auto;
  object-fit: contain;
  margin: 2px 2px;

  @media screen and (max-width: 800px) {
    width: calc(100% / 5 - 4px);
  }

  @media screen and (max-width: 650px) {
    width: calc(100% / 3 - 4px);
  }
`;

const HairstyleTrigger = () => {
  const { paused, overlay, setPaused } = useEnvironment();

  if (!paused || overlay !== "hairstyle") {
    return null;
  }

  return (
    <Overlay>
      <Container>
        <Close onClick={() => setPaused(false)}>X</Close>
        <Content>
          <Title>COMING 2 AMERICA CAST & CHARACTERS</Title>
          <br />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=KorCljxiBbs"
            width="100%"
            height="300px"
          />
          <br />
          <Button>COMING 2 AMERICA DETAILS</Button>
        </Content>
        <CardsContainer>
          {characters.map((character) => (
            <Character src={character} />
          ))}
        </CardsContainer>
      </Container>
    </Overlay>
  );
};

export default HairstyleTrigger;

import { useEnvironment } from "spacesvr";
import Overlay from "../modifiers/Overlay";
import PopupContainer from "./components/PopupContainer";
import { Body, Button, ButtonContainer, Title } from "./components/Styles";
import styled from "@emotion/styled";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

const Logo = styled.img`
  margin-top: 30px;
  max-width: 200px;
  width: 100%;
  height: 30px;
  object-fit: contain;
`;

const AMUTrigger = () => {
  const { paused, overlay, setPaused } = useEnvironment();

  if (!paused || overlay !== "amu") {
    return null;
  }

  return (
    <Overlay>
      <PopupContainer centered onClose={() => setPaused(false)}>
        <Title>
          POWERED BY
          <br />
          AMAZON MUSIC
        </Title>
        <Body>
          Listen to the music behind and inspired by the Coming 2 America movie.
        </Body>
        <ButtonContainer>
          <Button
            onClick={() =>
              window.open(
                "https://music.amazon.com/playlists/B00J93LWU6?marketplaceId=ATVPDKIKX0DER&musicTerritory=US",
                "_blank"
              )
            }
          >
            OFFICIAL COMING 2 AMERICA SOUNDTRACK
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://music.amazon.com/playlists/B087M36136?marketplaceId=ATVPDKIKX0DER&musicTerritory=US",
                "_blank"
              )
            }
          >
            INSPIRED BY COMING 2 AMERICA SOUNDTRACK
          </Button>
        </ButtonContainer>
        <Logo src={`${CONTENT_FOLDER}/amazonmusic.svg`} />
      </PopupContainer>
    </Overlay>
  );
};

export default AMUTrigger;

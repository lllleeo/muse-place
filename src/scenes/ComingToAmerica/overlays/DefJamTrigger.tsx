import { useEnvironment } from "spacesvr";
import Overlay from "../modifiers/Overlay";
import PopupContainer from "./components/PopupContainer";
import { Title } from "./components/Styles";
import styled from "@emotion/styled";
import { videos } from "../assets/videos";
import VideoThumbnail from "./components/VideoThumbnail";

const VideoContainer = styled.div`
  width: 95%;
  max-width: 450px;
  margin: 0 auto;
`;

const DefJamTrigger = () => {
  const { paused, overlay, setPaused } = useEnvironment();

  if (!paused || overlay !== "defjam") {
    return null;
  }

  const urls = videos.bts;
  const ids = urls.map((url) =>
    url.replace("https://www.youtube.com/watch?v=", "")
  );

  return (
    <Overlay>
      <PopupContainer onClose={() => setPaused(false)}>
        <Title>DefJam Content</Title>
        <VideoContainer>
          {ids.map((id, index) => (
            <VideoThumbnail
              id={id}
              key={id}
              onClick={() => setPaused(true, `fullscreen-defjam-${index}`)}
            />
          ))}
        </VideoContainer>
      </PopupContainer>
    </Overlay>
  );
};

export default DefJamTrigger;

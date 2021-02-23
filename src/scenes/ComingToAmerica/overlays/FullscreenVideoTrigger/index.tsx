import { useEnvironment } from "spacesvr";
import Overlay from "../../modifiers/Overlay";
import PopupContainer from "../components/PopupContainer";
import LiveChat from "./components/LiveChat";
import { Title } from "../components/Styles";
import styled from "@emotion/styled";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

const VideoContainer = styled.div`
  width: 95%;
  max-width: 450px;
  margin: 0 auto;
  min-height: 400px;
`;

const FullscreenVideo = () => {
  const { paused, overlay, setPaused } = useEnvironment();

  if (!paused || overlay !== "fullscreen") {
    return null;
  }

  return (
    <Overlay>
      <PopupContainer onClose={() => setPaused(false)}>
        <VideoContainer>
          <LiveChat />
        </VideoContainer>
      </PopupContainer>
    </Overlay>
  );
};

export default FullscreenVideo;

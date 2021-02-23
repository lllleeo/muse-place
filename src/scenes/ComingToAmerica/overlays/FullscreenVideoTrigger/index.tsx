import { useEnvironment } from "spacesvr";
import Overlay from "../../modifiers/Overlay";
import PopupContainer from "../components/PopupContainer";
import LiveChat from "./components/LiveChat";
import { Title } from "../components/Styles";
import styled from "@emotion/styled";
import ReactPlayer from "react-player/lazy";
import { videos } from "../../assets/videos";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

const FullscreenContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  z-index: 10;
`;

const ChatContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 375px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  padding: 1rem;
  color: #f8ec72;
  font-size: 2rem;
  border: none;
  background: none;
  line-height: 1em;
  background: black;
`;

const FullscreenVideo = () => {
  const { paused, overlay, setPaused } = useEnvironment();

  if (!paused || !overlay || !overlay.includes("fullscreen")) {
    return null;
  }

  const id = overlay.split("-")[1];
  const num = parseInt(overlay.split("-")[2], 10);
  const url = videos[id][num];

  let onClick =
    videos[id].length > 1 ? () => setPaused(true, id) : () => setPaused(false);

  return (
    <Overlay>
      <FullscreenContainer>
        <Close onClick={onClick}>X</Close>
        <ReactPlayer url={url} width="100%" height="100%" />
        <ChatContainer>
          <LiveChat />
        </ChatContainer>
      </FullscreenContainer>
    </Overlay>
  );
};

export default FullscreenVideo;

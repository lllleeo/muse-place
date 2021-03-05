import ReactPlayer from "react-player/lazy";
import styled from "@emotion/styled";

type videoProps = {
  src: string;
  thumbnail?: string;
};

const phone = "500px";

const VideoDiv = styled.div`
  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 30px;
  .video-js {
    border-radius: 10px;
  }
  .video-js .vjs-big-play-button {
    background: #cccc00;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-left: -5%;
  }
  @media screen and (max-width: ${phone}) {
    justify-content: left;
    padding-right: 0;
  }
`;

const Video = (props: videoProps) => {
  const { src } = props;

  return (
    <VideoDiv>
      <ReactPlayer url={src} width="70%" height="100%" controls />
    </VideoDiv>
  );
};

export default Video;

import VideoPlayer from "react-video-js-player";
import ReactPlayer from "react-player";
import styled from "@emotion/styled";
import { Suspense } from "react";

type videoProps = {
  src: string;
  thumbnail?: string;
};

const mainColor = "#c8af68";
const phone = "500px";

const PlayButton = styled.div`
  width: 50px;
  height: 32px;
  background: ${mainColor};
`;

const VideoDiv = styled.div`
  outline: none;
  //border: 2px dashed #ff0000;
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
      {/*<VideoPlayer src={src} poster={thumbnail} width={width} height={height} />*/}
      <ReactPlayer url={src} width="70%" height="100%" controls />
    </VideoDiv>
  );
};

export default Video;

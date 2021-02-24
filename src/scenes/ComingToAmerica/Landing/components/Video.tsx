import VideoPlayer from "react-video-js-player";
import ReactPlayer from "react-player/lazy";
import styled from "@emotion/styled";

type videoProps = {
  src: string;
  thumbnail: string;
};

const VideoDiv = styled.div`
  outline: none;
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
`;

const Video = (props: videoProps) => {
  const { src, thumbnail } = props;

  let width, height;
  if (window.innerWidth < 501) {
    width = "300";
    height = "150";
  } else if (window.innerWidth < 770) {
    width = "350";
    height = "200";
  } else if (window.innerWidth < 1200) {
    width = "400";
    height = "250";
  } else if (window.innerWidth < 1500) {
    width = "500";
    height = "300";
  } else {
    width = "600";
    height = "350";
  }

  return (
    <VideoDiv>
      {/*<VideoPlayer src={src} poster={thumbnail} width={width} height={height} />*/}
      <ReactPlayer url={src} width={width} height={height} />
    </VideoDiv>
  );
};

export default Video;

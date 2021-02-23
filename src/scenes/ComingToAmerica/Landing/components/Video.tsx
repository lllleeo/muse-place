import VideoPlayer from "react-video-js-player";
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

  return (
    <VideoDiv>
      <VideoPlayer
        src={src}
        poster={thumbnail}
        width={
          window.innerWidth < 501
            ? "300"
            : window.innerWidth < 770
            ? "300"
            : window.innerWidth < 1200
            ? "400"
            : window.innerWidth < 1500
            ? "500"
            : "600"
        }
        height={
          window.innerWidth < 501
            ? "150"
            : window.innerWidth < 770
            ? "250"
            : window.innerWidth < 1200
            ? "300"
            : window.innerWidth < 1500
            ? "350"
            : "400"
        }
      />
    </VideoDiv>
  );
};

export default Video;

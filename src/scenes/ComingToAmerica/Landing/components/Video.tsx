import VideoPlayer from "react-video-js-player";
import styled from "@emotion/styled";

type videoProps = {
  src: string;
};

const VideoDiv = styled.div`
  outline: none;
  .video-js .vjs-big-play-button {
    background: #cccc00;
  }
`;

const Video = (props: videoProps) => {
  const { src } = props;

  return (
    <VideoDiv>
      <VideoPlayer
        src={src}
        poster="https://d27rt3a60hh1lx.cloudfront.net/content/c2a/images/poster2.jpg"
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

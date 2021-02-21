import VideoPlayer from "react-video-js-player";
import styled from "@emotion/styled";

type videoProps = {
  src: string;
  thumbnail: string;
};

const VideoDiv = styled.div`
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .video-js {
    border-radius: 10px;
  }
`;

const TrailerVideo = (props: videoProps) => {
  const { src, thumbnail } = props;

  return (
    <VideoDiv>
      <VideoPlayer
        src={src}
        poster={thumbnail}
        autoplay={true}
        bigPlayButton={false}
        width={
          window.innerWidth < 501
            ? "300"
            : window.innerWidth < 770
            ? "500"
            : window.innerWidth < 1200
            ? "800"
            : window.innerWidth < 1500
            ? "1100"
            : "1400"
        }
        height={
          window.innerWidth < 501
            ? "200"
            : window.innerWidth < 770
            ? "400"
            : window.innerWidth < 1200
            ? "600"
            : window.innerWidth < 1500
            ? "700"
            : "900"
        }
      />
    </VideoDiv>
  );
};

export default TrailerVideo;

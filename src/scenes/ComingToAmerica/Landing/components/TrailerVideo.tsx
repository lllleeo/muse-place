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

export const VideoExit = styled.div`
  position: absolute;
  top: 10px;
  right: 50px;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: "Bodoni", sans-serif;
  color: white;
  z-index: 1;
`;

const TrailerVideo = (props: videoProps) => {
  const { src, thumbnail } = props;

  let width, height;
  if (window.innerWidth < 501) {
    width = "300";
    height = "200";
  } else if (window.innerWidth < 770) {
    width = "500";
    height = "400";
  } else if (window.innerWidth < 1200) {
    width = "800";
    height = "600";
  } else if (window.innerWidth < 1500) {
    width = "1100";
    height = "700";
  } else {
    width = "1400";
    height = "900";
  }

  return (
    <VideoDiv>
      <VideoPlayer
        src={src}
        poster={thumbnail}
        autoplay={true}
        bigPlayButton={false}
        width={width}
        height={height}
      />
    </VideoDiv>
  );
};

export default TrailerVideo;

import VideoPlayer from "react-video-js-player";
import styled from "@emotion/styled";
import { useLayoutEffect, useRef } from "react";

type videoProps = {
  src: string;
  thumbnail: string;
  muted?: boolean;
};

const VideoDiv = styled.div`
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .video-js {
    border-radius: 10px;
    z-index: 1;
  }
`;

export const VideoExit = styled.div`
  position: absolute;
  top: 10px;
  right: 50px;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: "Bodoni", sans-serif;
  z-index: 1;
`;

const TrailerVideo = (props: videoProps) => {
  const { src, thumbnail, muted } = props;
  const video = useRef();

  const handleClick = () => {
    if (video.current) {
      // @ts-ignore
      video.current.player.children_[0].volume = 1;
      console.log("clicked");
      document.removeEventListener("click", handleClick);
    }
  };

  useLayoutEffect(() => {
    if (video.current && muted) {
      // @ts-ignore
      video.current.player.children_[0].volume = 0;
      document.addEventListener("click", handleClick);
    }
  });

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
        ref={video}
      />
    </VideoDiv>
  );
};

export default TrailerVideo;

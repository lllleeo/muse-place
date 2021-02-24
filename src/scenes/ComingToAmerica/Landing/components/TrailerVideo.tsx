import ReactPlayer from "react-player/lazy";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useState } from "react";

type videoProps = {
  src: string;
  setDisplay: Dispatch<SetStateAction<boolean>>;
  muted?: boolean;
};

const VideoDiv = styled.div`
  position: relative;
  margin: 0 auto 0 auto;
  width: 80%;
  height: 90%;
  z-index: 1;
  // border: 2px dashed white;
`;

export const Exit = styled.div`
  position: absolute;
  right: 50px;
  top: 35px;
  cursor: pointer;
  color: white;
  font-size: 1.5em;
  font-family: "EmberCd", sans-serif;
  z-index: 2;
`;

const TrailerVideo = (props: videoProps) => {
  const { src, muted, setDisplay } = props;

  const handleClick = () => {
    setDisplay(false);
  };

  return (
    <VideoDiv>
      <Exit onClick={handleClick}>x</Exit>
      <ReactPlayer
        url={src}
        width="100%"
        height="100%"
        muted={muted}
        controls
        playing
        style={{
          zIndex: 1,
        }}
      />
    </VideoDiv>
  );
};

export default TrailerVideo;

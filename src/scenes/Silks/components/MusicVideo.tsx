import { Video } from "spacesvr";

const VIDEO_URL = `https://d27rt3a60hh1lx.cloudfront.net/content/silksbyvp/video.mp4`;
const VIDEO_SCALE = 2.51;

const MusicVideo = () => {
  return (
    <Video
      src={VIDEO_URL}
      size={VIDEO_SCALE}
      position={[-10.65, 1.075, -2.15]}
      rotation-y={Math.PI / 2}
    />
  );
};

export default MusicVideo;

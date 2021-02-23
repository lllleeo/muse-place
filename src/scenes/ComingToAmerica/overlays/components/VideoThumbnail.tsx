import styled from "@emotion/styled";

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;

  cursor: pointer;

  margin: 20px 0;

  &:first-of-type {
    margin-top: 0;
  }
`;

type Props = {
  id: string;
  onClick: () => void;
};

const VideoThumbnail = (props: Props) => {
  const { id, onClick } = props;

  const link = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return <Image src={link} onClick={onClick} />;
};

export default VideoThumbnail;

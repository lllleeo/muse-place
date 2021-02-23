import styled from "@emotion/styled";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
`;

const Gold = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url("${CONTENT_FOLDER}/images/C2A_Website_Background_gold-optimized.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Purple = styled.div`
 position: absolute;
  margin: 15px;
  width: calc(100% - 2*15px);
  height: calc(100% - 2*15px);
  top: 0;
  left: 0;
  background-image: url("${CONTENT_FOLDER}/images/C2A_Website_Background_pink-tile-optimized.jpg");
  background-repeat: repeat;
  z-index: 1;
`;

const Background = () => {
  return (
    <Container>
      <Gold />
      <Purple />
    </Container>
  );
};

export default Background;

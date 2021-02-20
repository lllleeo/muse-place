import styled from "@emotion/styled";

const desktop = "1900px";
const laptop = "1050px";
const tablet = "770px";
const phone = "500px";
const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
`;

const Gold = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("${CONTENT_FOLDER}/images/C2A_Website_Background_gold-optimized.jpg");
  background-size: cover;
  background-position: center center;
  z-index: -1;
`;

const Purple = styled.div`
  margin: min(20px, 4vw);
  width: calc(100% - 2*min(20px, 4vw));
  height: calc(100% - 2*min(20px, 4vw));
  background-image: url("${CONTENT_FOLDER}/images/C2A_Website_Background_pink-tile-optimized.jpg");
  background-repeat: repeat;
`;

const Barbers = styled.img`
  width: 90%;
  max-width: 500px;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: ${tablet}) {
    max-width: 400px;
  }
`;

const Background = () => {
  return (
    <Container>
      <Gold />
      <Purple />
      <Barbers
        src={`${CONTENT_FOLDER}/images/C2A_Website_Quar-optimized.png`}
      />
    </Container>
  );
};

export default Background;

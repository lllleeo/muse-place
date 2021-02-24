import styled from "@emotion/styled";

const desktop = "1900px";
const laptop = "1050px";
const tablet = "770px";
const phone = "500px";
const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";
const bgColor = "#FDEFD1";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${bgColor};
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

const Barbers = styled.div`
  width: 90%;
  max-width: 500px;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  //border: 2px dashed red;
  background-image: url("${CONTENT_FOLDER}/images/C2A_Website_Quar-optimized.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  @media screen and (max-width: ${tablet}) {
    max-width: 400px;
  }
  @media screen and (max-width: ${phone}) {
    top: 0;
    left: 49%;
    width: 50%;
    height: 35%;
    padding: 0;
    transform: translateX(0);
  }
`;

const Background = () => {
  return (
    <Container>
      {/*<Gold />*/}
      {/*<Purple />*/}
      <Barbers />
    </Container>
  );
};

export default Background;

import styled from "@emotion/styled";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";
const BORDER_HEIGHT = "15px";

const Container = styled.div`
  width: 100%;
  height: 75px;
  background-image: url("${CONTENT_FOLDER}/images/C2A_Website_Background_pink-tile-optimized.jpg");
  background-repeat: repeat;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  // for the border
  position: relative;
  z-index: 1;
  margin-bottom: ${BORDER_HEIGHT};
`;

const Logo = styled.img`
  height: 100%;
  object-fit: contain;
  box-sizing: border-box;
  padding: 8px 0;
`;

const Border = styled.div`
  height: ${BORDER_HEIGHT};
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  
  background-image: url("${CONTENT_FOLDER}/images/C2A_Website_Background_gold-optimized.jpg");
  background-size: 200%;
  background-position: center center;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo
        src={`${CONTENT_FOLDER}/images/AMAZON_ORIGINAL_MOVIE1-resized.png`}
      />
      <Border />
    </Container>
  );
};

export default Navbar;

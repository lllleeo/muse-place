import styled from "@emotion/styled";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";
const BORDER_HEIGHT = "15px";
const BORDER_HEIGHT_SMALL = "10px";

const Container = styled.div`
  width: 100%;
  height: 75px;
  background: #f4e8da;

  display: flex;
  justify-content: center;
  align-items: center;

  // for the border
  position: relative;
  z-index: 1;
  margin-bottom: ${BORDER_HEIGHT};

  @media screen and (max-height: 700px) {
    height: 60px;
    margin-bottom: ${BORDER_HEIGHT_SMALL};
  }

  @media screen and (max-height: 575px) {
    height: 50px;
    margin-bottom: 8px;
  }
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
  
  @media screen and (max-height: 700px) {
    height: ${BORDER_HEIGHT_SMALL};
  }
  
  @media screen and (max-height: 575px) {
    height: 8px;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Logo
        src={`${CONTENT_FOLDER}/C2A2_2021_KeyArt_Horiz_40x19_Date_Ensemble_Final_ANDRE_72dpi copy.png`}
      />
      <Border />
    </Container>
  );
};

export default Navbar;

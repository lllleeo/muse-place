import styled from "@emotion/styled";
import Controls from "./Controls";
import Footer from "./Footer";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 20px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 72%;
  height: auto;
  object-fit: contain;
`;

const Tagline = styled.p`
  font-family: "Bodoni", serif;
  font-size: 0.9rem;
  text-align: center;
  margin: 1.5rem 0;
`;

const Content = () => {
  return (
    <Container>
      <Logo
        src={`${CONTENT_FOLDER}/images/C2A_Website_2-LINE-GOLD-optimized.png`}
      />
      <Tagline>now let's see if you can walk the walk.</Tagline>
      <Controls />
      <Footer />
    </Container>
  );
};

export default Content;

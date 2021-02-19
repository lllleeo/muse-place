import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: space-around;
  align-items: center;

  /* Mobile responsiveness: swap video/info to vertical */
  /* and allow scrolling */
  @media screen and (max-width: 800px) {
    display: block;
    padding: 60px;
  }
`;

const VideoBox = styled.div`
  background: green;
  width: 100px;
  height: 100px;
`;

const InfoBox = styled.div`
  background: red;
  width: 100px;
  height: 100px;
`;

const Content = () => {
  return (
    <Container>
      <VideoBox />
      <InfoBox />
    </Container>
  );
};

export default Content;

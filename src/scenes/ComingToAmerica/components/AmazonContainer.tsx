import styled from "@emotion/styled";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import GlobalStyles from "./GlobalStyles";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;

  & > div:nth-of-type(2) {
    width: 100% !important;
    height: auto !important;
    position: relative !important;
    flex: 1;
  }
`;

type Props = { children: ReactNode };

const AmazonContainer = (props: Props) => {
  const { children } = props;
  return (
    <Container>
      <GlobalStyles />
      <Navbar />
      {children}
    </Container>
  );
};

export default AmazonContainer;

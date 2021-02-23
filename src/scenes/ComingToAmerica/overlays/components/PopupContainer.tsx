import styled from "@emotion/styled";
import { ReactNode } from "react";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background-color: #0000007f;
  text-align: center;
  transition: opacity 0.15s linear;

  overflow-y: scroll;
  padding: 25px 0;

  z-index: 101;
`;

const Popup = styled.div`
  position: relative;
  margin: 0 auto 40px;
  padding: 0.5rem;
  box-sizing: border-box;
  
  width: 95%;
  min-height: 50%;
  max-width: 600px;
  
  background-image: url("${CONTENT_FOLDER}/images/C2A_Website_Background_pink-tile-optimized.jpg");
  background-repeat: repeat;
`;

const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  margin: 1rem;
  color: #f8ec72;
  font-size: 2rem;
  border: none;
  background: none;
  line-height: 1em;
`;

type Props = {
  children: ReactNode;
  onClose?: () => void;
};

const PopupContainer = (props: Props) => {
  const { children, onClose } = props;

  return (
    <Container>
      <Popup>
        <Close onClick={onClose}>X</Close>
        {children}
      </Popup>
    </Container>
  );
};

export default PopupContainer;

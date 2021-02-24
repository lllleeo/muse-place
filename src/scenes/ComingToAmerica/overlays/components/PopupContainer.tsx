import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Close } from "./Styles";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

const Container = styled.div<{ centered: boolean }>`
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
  padding: 5% 0;
  box-sizing: border-box;

  z-index: 101;

  ${(props) => props.centered && "display: flex;"}
  ${(props) => props.centered && "justify-content: center;"}
  ${(props) => props.centered && "align-items: center;"}
`;

const Popup = styled.div`
  position: relative;
  margin: 0 auto 40px;
  padding: 0.5rem 0.5rem 1rem;
  box-sizing: border-box;
  
  width: 95%;
  max-width: 600px;
  
  background-image: url("${CONTENT_FOLDER}/images/C2A_Website_Background_pink-tile-optimized.jpg");
  background-repeat: repeat;
`;

type Props = {
  children: ReactNode;
  onClose?: () => void;
  centered?: boolean;
};

const PopupContainer = (props: Props) => {
  const { children, onClose, centered } = props;

  return (
    <Container centered={centered || false}>
      <Popup>
        <Close onClick={onClose}>X</Close>
        {children}
      </Popup>
    </Container>
  );
};

export default PopupContainer;

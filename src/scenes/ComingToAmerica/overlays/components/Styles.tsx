import styled from "@emotion/styled";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

export const Title = styled.h1`
    @font-face {
      font-family: 'HELVETICA BOLD';
      src: url('${CONTENT_FOLDER}/fonts/HelveticaLTStd-Blk.otf') format('opentype');
    }

  color: #9c1116;
  font-family: 'HELVETICA BOLD', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  margin: 0.5rem auto;
  width: calc(100% - 80px);
`;

export const Subtitle = styled.h3`
  color: #9c1116;
  font-family: "HELVETICA BOLD", sans-serif;
  font-weight: bold;
  font-size: 0.95rem;
  margin: 0.25rem auto;
  width: calc(100% - 80px);
`;

export const Body = styled.p`
  color: #9c1116;
  font-family: Helvetica, sans-serif;
  font-weight: normal;
  font-size: 1.05rem;
  margin: 2rem auto;
  width: calc(100% - 80px);
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  color: #9c1116;
  border: 3px solid #9c1116;
  border-radius: 30px;
  background: none;
  margin: 0 10px;
  padding: 5px 40px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.15s linear;

  &:hover {
    background: #9c111640;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  margin: 1rem;
  color: #9c1116;
  font-size: 2rem;
  border: none;
  background: none;
  line-height: 1em;
`;

import styled from "@emotion/styled";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

export const Title = styled.h1`
    @font-face {
      font-family: 'HELVETICA BOLD';
      src: url('${CONTENT_FOLDER}/fonts/HelveticaLTStd-Blk.otf') format('opentype');
    }

  color: #f8ec72;
  font-family: 'HELVETICA BOLD', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  margin: 0.5rem 0 1rem;
`;

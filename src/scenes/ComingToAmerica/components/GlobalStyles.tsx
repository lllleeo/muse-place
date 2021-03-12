import { Global, css } from "@emotion/core";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

const globalStyles = css`
  @font-face {
    font-family: "Bodoni";
    src: url("${CONTENT_FOLDER}/fonts/Bodoni%20Std/BodoniStd.otf") format("opentype");
  }
  
  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
    font-family: "Bodoni", sans-serif;
  }
`;

export default () => <Global styles={globalStyles} />;

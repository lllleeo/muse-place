import { Global, css } from "@emotion/core";

const globalStyles = css`
  //@font-face {
  //  font-family: "Quicksand";
  //  src: url("https://d27rt3a60hh1lx.cloudfront.net/fonts/Quicksand_Bold.otf");
  //}

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: hidden;
  }
`;

export default () => <Global styles={globalStyles} />;

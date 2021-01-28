import { Global, css } from "@emotion/core";

const globalStyles = css`
  @font-face {
    font-family: "Quicksand";
    src: url("https://d27rt3a60hh1lx.cloudfront.net/fonts/Quicksand_Bold.otf");
  }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    background: black;
    font-family: "Quicksand", -apple-system, BlinkMacSystemFont, avenir next,
      avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
  }

  .scrollArea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export default () => <Global styles={globalStyles} />;

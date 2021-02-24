import Background from "./components/Background";
import GlobalStyles from "./styles/GlobalStyles";
import Content from "./components/Content";

if (window.innerHeight < 501) {
  screen.orientation.lock("portrait");
}

export const secondaryColor = "#935c23";
export const bgColor = "#FDEFD1";

const Landing = () => {
  return (
    <>
      <GlobalStyles />
      <Background />
      <Content />
    </>
  );
};

export default Landing;

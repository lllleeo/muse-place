import Background from "./components/Background";
import GlobalStyles from "./styles/GlobalStyles";
import Content from "./components/Content";

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

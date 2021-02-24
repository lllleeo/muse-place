import Background from "./components/Background";
import GlobalStyles from "./styles/GlobalStyles";
import Content from "./components/Content";

// export const mainColor = "#751D17";

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

import styled from "@emotion/styled";

const desktop = "1900px";
const laptop = "1050px";
const tablet = "770px";
const phone = "500px";
const content = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

export const Container = styled.div`
  width: 100%;
  max-width: 2000px;
  height: 100%;
  display: flex;
  margin: auto;
  flex-direction: row;
  position: relative;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  border: white 2px dashed;

  /* Mobile responsiveness: swap video/info to vertical */
  /* and allow scrolling */
  @media screen and (max-width: ${laptop}) {
    //max-width: 1000px;
  }
  @media screen and (max-width: ${tablet}) {
    //justify-content: space-evenly;
  }
  @media screen and (max-width: ${phone}) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
`;

export const VideoBox = styled.div`
  border: green 2px dashed;
  width: 40%;
  height: 60%;
  @media screen and (max-width: ${tablet}) {
    margin: 0;
  }
  @media screen and (max-width: ${phone}) {
    height: 20%;
  }
`;

export const InfoBox = styled.div`
  border: red 2px dashed;
  width: min(45%, 800px);
  height: 75%;
  text-align: center;
  diplay: flex;
  flex-direction: column;
  font-family: "Bodoni", sans-serif;
  @media screen and (max-width: 1500px) {
    width: 40%;
  }
  @media screen and (max-width: ${phone}) {
    width: 100%;
    height: 40%;
    margin-top: 25px;
  }
`;

export const Title = styled.div`
  max-width: 95%;
  border: purple 2px dashed;
  margin: 75px auto 0 auto;
  @media screen and (max-width: ${tablet}) {
    margin-top: 105px;
  }
  @media screen and (max-width: ${phone}) {
    margin-top: 0;
  }
`;

export const SurroundingTitle = styled.div`
  font-size: min(1.2rem, calc(2vw + 0.1rem));
  color: saddlebrown;
  font-weight: 600;
  padding-top: 5px;
  .top {
    margin-top: 20px;
  }
  .bottom {
    margin-top: 1px;
  }
`;
export const MainTitle = styled.div`
  font-size: clamp(2rem, 4.5vw, 5rem);
  color: yellow;
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 80%;
`;

export const Buttons = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 20px auto 20px auto;
  border: black 2px dashed;
  color: yellow;
  font-weight: 550;
  font-size: min(0.8rem, 1.2vw);
  font-family: "Bodoni", sans-serif;
  @media screen and (max-width: 1500px) {
    max-width: 400px;
  }
  @media screen and (min-width: 1500px) {
    font-size: 1rem;
  }
  @media screen and (max-width: ${tablet}) {
    max-width: 250px;
  }
  @media screen and (max-width: ${phone}) {
    margin-top: 10px;
    font-size: 0.5em;
  }
`;
export const Button = styled.div`
  border: yellow 2px solid;
  border-radius: 20px;
  width: 31%;
  padding: 5px 0 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    border: #999933 2px solid;
    color: #999933;
  }
  @media screen and (max-width: ${laptop}) {
    //padding: 0;
  }
`;

export const Image1 = styled.div`
  margin: 15px auto 15px auto;
  background-image: url("${content}/images/AMAZON_ORIGINAL_MOVIE1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  max-width: 500px;
  height: 105px;
  border: brown 2px dashed;
  @media screen and (max-width: ${laptop}) {
    width: 80%;
  }
  @media screen and (max-width: ${phone}) {
    position: absolute;
    bottom: 10px;
    left: 10%;
  }
`;

export const Share = styled.div`
  color: yellow;
  font-weight: 600;
  font-size: 0.7rem;
  margin: 0 auto 0 auto;
`;

export const ShareContainer = styled.div`
  width: 90%;
  max-width: 250px;
  margin: 0 auto 20px auto;
  font-family: "Bodoni", sans-serif;
  border: blue 2px dashed;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ShareIcon = styled.div`
  width: 32px;
  height: 32px;
  background: yellow;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #c796b3;
`;

export const FBIcon = styled.div`
  cursor: pointer;
`;

export const FinePrint = styled.div`
  display: block;
  border: green 2px dashed;
  margin: 0px auto 0 auto;
  color: yellow;
  font-size: clamp(0.5rem, 0.5vw, 0.7rem);
  a {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.div`
  width: 80%;
  height: 60%;
  max-height: 513px;
  min-width: 300px;
  max-width: 500px;
  background-image: url("${content}/images/C2A_Website_Background_Pop-Up_4.png");
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: pink 2px solid;
`;

export const Trailer = styled.div``;

export const Schedule = styled.div``;

export const Terms = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //align-items: center;
  border: white 2px dashed;
  color: yellow;
  font-family: "Bodoni", sans-serif;
  overflow-y: scroll;
`;

export const TermsHeader = styled.h2`
  font-size: 1.2rem;
  text-decoration: underline;
  text-align: center;
  margin: 0 0 0.5rem 0;
  line-height: 70%;
  //border: blue 2px dashed;
`;

export const TermsSubHeader = styled.h3`
  font-size: 1rem;
  text-align: left;
  //border: blue 2px dashed;
  margin: 0.1rem 0;
`;

export const TermsContent = styled.p`
  font-size: 0.7rem;
  text-align: left;
  //border: blue 2px dashed;
  margin: 0.1rem 0;
`;

export const Exit = styled.p`
  //display: inline;
  position: absolute;
  top: -5px;
  right: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: "Bodoni", sans-serif;
  color: white;
`;

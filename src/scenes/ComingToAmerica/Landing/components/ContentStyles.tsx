import styled from "@emotion/styled";

const desktop = "1500px";
const laptop = "1050px";
const tablet = "770px";
const phone = "500px";
const content = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

export const Page = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

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
  //border: white 2px dashed;

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
    justify-content: flex-end;
  }
`;

export const VideoBox = styled.div`
  //border: green 2px dashed;
  width: 45%;
  height: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  outline: none;
  @media screen and (min-width: ${laptop}) {
    justify-content: center;
  }
  @media screen and (max-width: ${tablet}) {
    margin: 0;
  }
  @media screen and (max-width: ${phone}) {
    height: 17%;
    width: 90%;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    bottom: 15%;
  }
`;

export const InfoBox = styled.div`
  //border: red 2px dashed;
  width: min(45%, 800px);
  text-align: center;
  diplay: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "HelveticaBlk", sans-serif;
  @media screen and (max-width: ${desktop}) {
    width: 40%;
  }
  @media screen and (max-width: ${phone}) {
    width: 100%;
    height: 40%;
    margin-top: 25px;
  }
  @media screen and (max-width: 350px) {
    margin-top: 35px;
  }
`;

export const Title = styled.div`
  max-width: 95%;
  //border: blue 2px dashed;
  margin: 0 auto 0 auto;
`;

export const SurroundingTitle = styled.h2`
  font-size: min(1.2rem, calc(2vw + 0.1rem));
  color: #935c23;
  font-weight: 600;
  //border: black 2px dashed;
  //padding-top: 5px;
`;

export const MainTitle = styled.h1`
  font-size: clamp(2rem, 4.5vw, 5rem);
  color: #f8ec72;
  font-weight: 800;
  letter-spacing: -1px;
  margin: 0;
  //border: white 2px dashed;
  line-height: 80%;
`;

export const Buttons = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 20px auto 20px auto;
  // border: black 2px dashed;
  font-family: "HelveticaBlk", sans-serif;
  @media screen and (max-width: ${desktop}) {
    max-width: 400px;
  }
  @media screen and (min-width: ${desktop}) {
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
export const Button = styled.button`
  border: #f8ec72 2px solid;
  border-radius: 20px;
  width: 31%;
  padding: 5px 0 5px 0;
  cursor: pointer;
  font-size: min(0.8rem, 1.2vw);
  font-family: "HelveticaBlk", sans-serif;
  color: #f8ec72;
  background: none;
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
  background-image: url("${content}/images/AMAZON_ORIGINAL_MOVIE1-resized.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  max-width: 500px;
  height: 105px;
  //border: brown 2px dashed;
  @media screen and (max-width: ${laptop}) {
    width: 80%;
  }
  @media screen and (max-width: ${phone}) {
    position: absolute;
    bottom: 1%;
    left: 10%;
  }
`;

export const Share = styled.p`
  color: #f8ec72;
  font-weight: 600;
  font-size: 0.7rem;
  margin: 0 auto 0 auto;
`;

export const ShareContainer = styled.div`
  width: 90%;
  max-width: 250px;
  margin: 0 auto 20px auto;
  font-family: "HelveticaBlk", sans-serif;
  //border: blue 2px dashed;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ShareIcon = styled.button`
  width: 32px;
  height: 32px;
  background: #f8ec72;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #c796b3;
`;

export const Icon = styled.div`
  cursor: pointer;
  border: none;
`;

export const FinePrint = styled.div`
  display: block;
  //border: green 2px dashed;
  margin: 0px auto 0 auto;
  color: #f8ec72;
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
  width: 100vw;
  height: 100vh;
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
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  //border: pink 2px solid;
`;

export const Trailer = styled.div`
  // border: white 2px dashed;
  width: 90%;
  position: relative;
`;

export const Exit = styled.p`
  position: absolute;
  top: -20px;
  right: 13px;
  cursor: pointer;
  font-weight: 100;
  font-size: 1.5rem;
  font-family: "EmberCd", sans-serif;
  color: white;
  z-index: 2;
`;

export const VideoExit = styled.div`
  position: absolute;
  //top: -400px;
  right: 100px;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  font-family: "EmberCd", sans-serif;
  z-index: 2;
`;

export const Billing = styled.div`
  position: absolute;
  margin: 0 auto 0 auto;
  bottom: 30px;
  width: 80%;
  height: 200px;
  max-width: 800px;
  background-image: url("https://amznstudios.app.box.com/s/6xfuixk6nwv7038z7727dz0pdjijewph/file/766452857021");
  background-size: contain;
  background-repeat: no-repeat;
`;

export const MovieLabel = styled.div`
  position: absolute;
  width: 150px;
  height: 100px;
  background-image: url("${content}/images/movielabel.png");
  background-size: contain;
  background-repeat: no-repeat;
  left: 10%;
  bottom: 10px;
`;

export const EmailCollection = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  //border: white 2px dashed;
  color: #f8ec72;
  font-family: "HelveticaBlk", sans-serif;
`;

export const EmailHeader = styled.div`
  background-image: url("${content}/images/c2amarch5logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 95%;
  height: 35%;
  //border: blue 2px dashed;
`;

export const EmailSubTitle = styled.div`
  //border: green 2px dashed;
  text-align: center;
  font-weight: bold;
  width: 80%;
  margin: 3px 0 5px 0;
`;

export const EmailInputDiv = styled.div`
  width: 45%;
  padding: 0 0 0 10px;
  border: none;
  border-radius: 3px;
  cursor: text;
  margin-top: 10px;
  background: white;
`;

export const EmailInput = styled.input`
  width: 95%;
  padding: 5px 0 5px 0;
  margin: 0 auto 0 auto;
  border: none;
  outline: none;
  ::placeholder {
    font-family: "HelveticaBlk", sans-serif;
    font-weight: bold;
    color: rgba(152, 81, 30, 0.6);
  }
`;

export const EmailCheck = styled.input`
  display: inline;
  //border: #f8Ec72 2px dashed;
  background-color: #f8ec72;
  align-self: center;
`;

export const EmailOptOut = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 50%;
  //border: blue 2px dashed;
`;

export const EmailText = styled.p`
  //border: red 2px dashed;
  font-size: 0.6rem;
  padding-left: 5px;
`;
export const EmailSignup = styled.div`
  border: 2px #f8ec72 solid;
  font-weight: bold;
  border-radius: 25px;
  width: 40%;
  text-align: center;
  padding: 5px 0 5px 0;
  margin-top: 15px;
  cursor: pointer;
`;

export const EmailSkip = styled.div`
  font-size: 0.6rem;
  text-decoration: underline;
  margin-top: 25px;
`;
export const EmailPrivacy = styled.div`
  font-size: 0.5rem;
  position: relative;
  bottom: -20px;
  a {
    text-decoration: underline;
    cursor: pointer;
  }
`;

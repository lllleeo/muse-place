import styled from "@emotion/styled";

const desktop = "1900px";
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
  font-family: "Bodoni", sans-serif;
  @media screen and (max-width: 1500px) {
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
  // border: black 2px dashed;
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
  //border: blue 2px dashed;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ShareIcon = styled.div`
  width: 32px;
  height: 32px;
  background: yellow;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #c796b3;
  outline: none;
`;

export const Icon = styled.div`
  cursor: pointer;
  outline: 0;
  border: none;
  padding: 0;

  :focus {
    outline: none;
    box-shadow: none !important;
  }
`;

export const FinePrint = styled.div`
  display: block;
  //border: green 2px dashed;
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
  @media screen and (max-width: 500px) {
    // background-size: 97% 100%;
  }
`;

export const Trailer = styled.div`
  border: white 2px dashed;
  width: 90%;
  position: relative;
`;

export const Schedule = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //border: white 2px dashed;
  color: yellow;
  font-family: "Bodoni", sans-serif;
`;

export const ScheduleHeader = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0 0 0.5rem 0;
  line-height: 70%;
`;

export const ScheduleBreak = styled.div`
  width: 60%;
  border: yellow 1px solid;
  margin: 0 auto 0 auto;
`;

export const ScheduleSubHeader = styled.h3`
  text-align: center;
  font-size: 0.7rem;
  //line-height: 50%;
  margin: 0;
`;

export const ScheduleContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  //border: white 2px dashed;
  margin-top: 10px;
`;

export const ScheduleDate = styled.h4`
  margin: 0;
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 10px 0 0 0;
  //border: blue 2px dashed;
  position: relative;
  right: 110px;
`;

export const ScheduleDate2 = styled.h4`
  margin: 0;
  padding: 10px 0 0 0;
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.9rem;
  //border: blue 2px dashed;
  position: relative;
  right: 125px;
`;

export const ScheduleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1px 0 1px 0;
  //border: red 2px dashed;
`;

export const ScheduleLeft = styled.div`
  width: 35%;
  text-align: right;
  //border: green 2px dashed;
`;

export const ScheduleText = styled.p`
  font-size: 0.7rem;
  margin: 2px 0 2px 0;
`;

export const ScheduleRight = styled.div`
  width: 60%;
  text-align: left;
  //border: blue 2px dashed;
`;

export const Terms = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //border: white 2px dashed;
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
`;

export const TermsSubHeader = styled.h3`
  font-size: 1rem;
  text-align: left;
  margin: 0.1rem 0;
`;

export const TermsHeader3 = styled.h4`
  font-size: 1rem;
  text-align: center;
  text-decoration: underline;
`;

export const TermsContent = styled.p`
  font-size: 0.7rem;
  text-align: left;
  margin: 0.1rem 0;
`;

export const Exit = styled.p`
  position: absolute;
  top: -5px;
  right: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: "Bodoni", sans-serif;
  color: white;
  z-index: 1;
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
  color: yellow;
  font-family: "Bodoni", sans-serif;
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
    font-family: "Bodoni", sans-serif;
    font-weight: bold;
    color: rgba(152, 81, 30, 0.6);
  }
`;

export const EmailCheck = styled.input`
  display: inline;
  //border: yellow 2px dashed;
  background-color: yellow;
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
  border: 2px yellow solid;
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

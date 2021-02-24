import {
  Page,
  Container,
  VideoBox,
  InfoBox,
  Title,
  SurroundingTitle,
  MainTitle,
  Buttons,
  Button,
  Image1,
  Share,
  ShareContainer,
  ShareIcon,
  Icon,
  FinePrint,
  Overlay,
  Background,
  Trailer,
  VideoExit,
  Exit,
  Billing,
  MovieLabel,
  EmailCollection,
  EmailHeader,
  EmailSubTitle,
  EmailInputDiv,
  EmailInput,
  EmailCheck,
  EmailOptOut,
  EmailText,
  EmailSignup,
  EmailSkip,
  EmailPrivacy,
} from "./ContentStyles";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faComment, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import { useState } from "react";
import Video from "./Video";
import TrailerVideo from "./TrailerVideo";
import Terms from "./Terms";
import Schedule from "./Schedule";
import Schedule2 from "./Schedule2";

const shareUrl = "https://muse.place/comingtoamerica";
const shareMessage =
  "Check out the My-T-Sharp Barbershop, best cuts since 1988. www.mytsharp.com @amazonprimevideo #mytsharpexperience";

const mainColor = "#c8af68";
const secondaryColor = "#935c23";
const bgColor = "#FDEFD1";

const Content = () => {
  const [schedule, setSchedule] = useState<boolean>(false);
  const [trailer, setTrailer] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);
  const [email, setEmail] = useState<boolean>(false);
  const [subscribe, setSubscribe] = useState<boolean>(true);
  const [firstLogin, setFirstLogin] = useState<boolean>(false);

  if (!localStorage.getItem("c2a-visited")) {
    setFirstLogin(true);
    localStorage.setItem("c2a-visited", "visited");
  }

  const handleSubscribe = () => setSubscribe(!subscribe);
  const handleEmail = () => setEmail(!email);
  const handleTrailer = () => setTrailer(!trailer);
  const handleSchedule = () => setSchedule(!schedule);
  const closeFirstOverlay = () => setFirstLogin(false);
  const handleTerms = () => {
    if (email) {
      setEmail(false);
    }
    setTerms(!terms);
  };

  return (
    <Page>
      {firstLogin && (
        <Overlay>
          <Exit onClick={closeFirstOverlay}>x</Exit>
          <Trailer>
            <TrailerVideo
              src="https://d27rt3a60hh1lx.cloudfront.net/content/c2a/videos/infomercial.mp4"
              thumbnail="https://d27rt3a60hh1lx.cloudfront.net/content/c2a/images/poster2.jpg"
              muted
            />
          </Trailer>
        </Overlay>
      )}
      <Container>
        {firstLogin ? (
          <VideoBox />
        ) : (
          <VideoBox>
            <Video
              src="https://d27rt3a60hh1lx.cloudfront.net/content/c2a/videos/infomercial.mp4"
              thumbnail="https://d27rt3a60hh1lx.cloudfront.net/content/c2a/images/poster2.jpg"
            />
          </VideoBox>
        )}
        <InfoBox>
          <Title>
            <SurroundingTitle className="top">WELCOME TO THE</SurroundingTitle>
            <MainTitle>MY-T-SHARP</MainTitle>
            <MainTitle>BARBERSHOP</MainTitle>
            <SurroundingTitle className="bottom">EXPERIENCE</SurroundingTitle>
          </Title>
          <Buttons>
            <Button onClick={handleEmail}>RSVP</Button>
            <Button onClick={handleSchedule}>SCHEDULE</Button>
            <Button onClick={handleTrailer}>WATCH TRAILER</Button>
          </Buttons>
          <Image1 />
          <Share>SHARE</Share>
          <ShareContainer>
            <ShareIcon>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </ShareIcon>
            <TwitterShareButton
              url={shareUrl}
              title="Check out The My-T-Barbershop Experience!"
              // style={{ outline: "none" }}
            >
              <ShareIcon>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </ShareIcon>
            </TwitterShareButton>
            <FacebookShareButton
              url={shareUrl}
              quote={shareMessage}
              // style={{ outline: "none" }}
            >
              <Icon>
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  color={mainColor}
                />
              </Icon>
            </FacebookShareButton>
            <ShareIcon>
              <FontAwesomeIcon icon={faComment} size="lg" />
            </ShareIcon>
            <EmailShareButton
              url={shareUrl}
              subject="Check out the My-T-Sharp Barbershop Experience!"
              body={shareMessage}
              // style={{ outline: "none" }}
            >
              <ShareIcon>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </ShareIcon>
            </EmailShareButton>
          </ShareContainer>
          <FinePrint>BY USING THIS SITE, YOU AGREE TO THE</FinePrint>
          <FinePrint>
            <a onClick={handleTerms}>PRIVACY POLICY</a> AND{" "}
            <a onClick={handleTerms}>TERMS AND CONDITIONS</a>
          </FinePrint>
        </InfoBox>
        {/*<Billing />*/}
        <MovieLabel />
      </Container>
      {email && (
        <Overlay>
          <Background>
            <Exit onClick={handleEmail}>x</Exit>
            <EmailCollection>
              <EmailHeader />
              <EmailSubTitle>
                EXCLUSIVE MY-T-SHARP EXPERIENCE AVAILABLE MARCH 1ST - 7TH
              </EmailSubTitle>
              <EmailInputDiv>
                <EmailInput placeholder="NAME" />
              </EmailInputDiv>
              <EmailInputDiv>
                <EmailInput placeholder="EMAIL" />
              </EmailInputDiv>
              <EmailOptOut>
                <EmailCheck type="checkbox" onClick={handleSubscribe} />
                <EmailText>
                  OPT-OUT OF MY-T-SHARP EXPERIENCE UPDATES AND NEWSLETTER
                </EmailText>
              </EmailOptOut>
              <EmailSignup>SIGN-UP</EmailSignup>
              <EmailSkip onClick={handleEmail}>SKIP</EmailSkip>
              <EmailPrivacy>BY USING THIS SITE, YOU AGREE TO THE</EmailPrivacy>
              <EmailPrivacy>
                <a onClick={handleTerms}>PRIVACY POLICY</a> AND{" "}
                <a onClick={handleTerms}>TERMS AND CONDITIONS</a>.
              </EmailPrivacy>
            </EmailCollection>
          </Background>
        </Overlay>
      )}
      {trailer && (
        <Overlay>
          <Trailer>
            <VideoExit onClick={handleTrailer}>x</VideoExit>
            <TrailerVideo
              src="https://d27rt3a60hh1lx.cloudfront.net/content/c2a/videos/trailer.mp4"
              thumbnail="https://d27rt3a60hh1lx.cloudfront.net/content/c2a/images/poster2.jpg"
            />
          </Trailer>
        </Overlay>
      )}
      {schedule && (
        <Overlay>
          <Background>
            <Exit onClick={handleSchedule}>x</Exit>
            <Schedule2 />
          </Background>
        </Overlay>
      )}
      {terms && (
        <Overlay>
          <Background>
            <Exit onClick={handleTerms}>x</Exit>
            <Terms />
          </Background>
        </Overlay>
      )}
    </Page>
  );
};

export default Content;

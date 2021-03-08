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
  Exit,
  Billing,
  MovieLabel,
  EmailCollection,
  EmailHeader,
  EmailSubTitle,
  EmailInputDiv,
  EmailInput,
  EmailSignup,
  EmailSkip,
  EmailPrivacy,
  EmailPrivacyDiv,
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

const shareUrl = "https://muse.place/comingtoamerica";
const shareMessage =
  "Check out the My-T-Sharp Barbershop, best cuts since 1988. www.mytsharp.com @amazonprimevideo #mytsharpexperience";

const mainColor = "#c8af68";

const Content = () => {
  const [schedule, setSchedule] = useState<boolean>(false);
  const [trailer, setTrailer] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);
  const [email, setEmail] = useState<boolean>(false);

  const handleEmail = () => setEmail(!email);
  const handleTrailer = () => setTrailer(!trailer);
  const handleSchedule = () => setSchedule(!schedule);
  const handleTerms = () => {
    if (email) {
      setEmail(false);
    }
    setTerms(!terms);
  };

  return (
    <Page>
      <Container>
        <VideoBox>
          <Video src="https://d27rt3a60hh1lx.cloudfront.net/content/c2a/videos/infomercial.mp4" />
        </VideoBox>
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
            >
              <ShareIcon>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </ShareIcon>
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl} quote={shareMessage}>
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
        <Billing />
        <MovieLabel />
      </Container>
      {email && (
        <Overlay>
          <Background>
            <Exit onClick={handleEmail}>x</Exit>
            <EmailCollection>
              <EmailHeader />
              <EmailSubTitle>
                EXCLUSIVE MY-T-SHARP EXPERIENCE AVAILABLE MARCH 8TH - 10TH
              </EmailSubTitle>
              <EmailSkip onClick={handleEmail}>SKIP</EmailSkip>
              <EmailInputDiv>
                <EmailInput placeholder="NAME" />
              </EmailInputDiv>
              <EmailInputDiv>
                <EmailInput placeholder="EMAIL" />
              </EmailInputDiv>
              <EmailSignup>SIGN-UP</EmailSignup>
              <EmailPrivacyDiv>
                <EmailPrivacy>
                  BY USING THIS SITE, YOU AGREE TO THE
                </EmailPrivacy>
                <EmailPrivacy>
                  <a onClick={handleTerms}>PRIVACY POLICY</a> AND{" "}
                  <a onClick={handleTerms}>TERMS AND CONDITIONS</a>.
                </EmailPrivacy>
              </EmailPrivacyDiv>
            </EmailCollection>
          </Background>
        </Overlay>
      )}
      {trailer && (
        <Overlay>
          <Trailer>
            <TrailerVideo
              src="https://d27rt3a60hh1lx.cloudfront.net/content/c2a/videos/trailer.mp4"
              setDisplay={setTrailer}
            />
          </Trailer>
        </Overlay>
      )}
      {schedule && (
        <Overlay>
          <Background>
            <Exit onClick={handleSchedule}>x</Exit>
            <Schedule />
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

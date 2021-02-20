import {
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
  FBIcon,
  FinePrint,
  Overlay,
  Background,
  Trailer,
  Schedule,
  Terms,
  TermsHeader,
  TermsSubHeader,
  Exit,
  TermsContent,
} from "./ContentStyles";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faComment, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Content = () => {
  const [schedule, setSchedule] = useState<boolean>(false);
  const [trailer, setTrailer] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);

  const handleEnter = () => {
    return null;
  };

  return (
    <Container>
      <VideoBox>
        {/*<video width="400" controls>*/}
        {/*  <source src={infomercial} type="video/mp4" />*/}
        {/*</video>*/}
      </VideoBox>
      <InfoBox>
        <Title>
          <SurroundingTitle className="top">WELCOME TO THE</SurroundingTitle>
          <MainTitle>MY-T-SHARP BARBERSHOP</MainTitle>
          <SurroundingTitle className="bottom">EXPERIENCE</SurroundingTitle>
        </Title>
        <Buttons>
          <Button onClick={handleEnter}>ENTER</Button>
          <Button
            onClick={() => {
              setSchedule(!schedule);
            }}
          >
            SCHEDULE
          </Button>
          <Button
            onClick={() => {
              setTrailer(!trailer);
            }}
          >
            WATCH TRAILER
          </Button>
        </Buttons>
        <Image1 />
        <Share>SHARE</Share>
        <ShareContainer>
          <ShareIcon>
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </ShareIcon>
          <ShareIcon>
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </ShareIcon>
          <FBIcon>
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#ffff00" />
          </FBIcon>
          <ShareIcon>
            <FontAwesomeIcon icon={faComment} size="lg" />
          </ShareIcon>
          <ShareIcon>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </ShareIcon>
        </ShareContainer>
        <FinePrint>BY USING THIS SITE, YOU AGREE TO THE</FinePrint>
        <FinePrint>
          <a
            onClick={() => {
              setTerms(!terms);
            }}
          >
            PRIVACY POLICY
          </a>{" "}
          AND{" "}
          <a
            onClick={() => {
              setTerms(!terms);
            }}
          >
            TERMS AND CONDITIONS
          </a>
        </FinePrint>
      </InfoBox>
      {trailer ? (
        <Overlay>
          <Background>
            <Exit
              onClick={() => {
                setTrailer(false);
              }}
            >
              X
            </Exit>
            <Trailer></Trailer>
          </Background>
        </Overlay>
      ) : (
        <></>
      )}
      {schedule ? (
        <Overlay>
          <Background>
            <Exit
              onClick={() => {
                setSchedule(false);
              }}
            >
              X
            </Exit>
            <Schedule></Schedule>
          </Background>
        </Overlay>
      ) : (
        <></>
      )}
      {terms ? (
        <Overlay>
          <Background>
            <Exit
              onClick={() => {
                setTerms(false);
              }}
            >
              X
            </Exit>
            <Terms>
              <TermsHeader>Conditions of Use</TermsHeader>
              <TermsContent>
                By visiting this site (the "Site"), you accept these conditions.
                Please read them carefully.
              </TermsContent>
              <TermsSubHeader>PRIVACY</TermsSubHeader>
              <TermsContent>
                Please review our Privacy Notice, which also governs your visit
                to the Site, to understand our practices.
              </TermsContent>
              <TermsSubHeader>ELECTRONIC COMMUNICATIONS</TermsSubHeader>
              <TermsContent>
                When you visit the Site or send e-mails to us, you are
                communicating with us electronically. You consent to receive
                communications from us electronically. You agree that all
                agreements, notices, disclosures and other communications that
                we provide to you electronically satisfy any legal requirement
                that such communications be in writing.
              </TermsContent>
              <TermsSubHeader>COPYRIGHT</TermsSubHeader>
              <TermsContent>
                All content included on the Site, such as text, graphics, logos,
                button icons, images, audio clips, digital downloads, data
                compilations, and software, is the property of Amazon or its
                content suppliers and protected by United States and
                international copyright laws. The compilation of all content on
                the Site is the exclusive property of Amazon and protected by
                U.S. and international copyright laws. All software used on the
                Site is the property of Amazon or its software suppliers and
                protected by United States and international copyright laws.
              </TermsContent>
              <TermsSubHeader>TRADEMARKS</TermsSubHeader>
              <TermsContent>
                AMAZON, AMAZON.COM, AMAZON STUDIOS, and other Site graphics,
                logos, page headers, button icons, scripts, and service names
                are trademarks, registered trademarks or trade dress of Amazon
                in the U.S. and/or other countries. Amazon's trademarks and
                trade dress may not be used in connection with any product or
                service that is not Amazon's, in any manner that is likely to
                cause confusion among customers, or in any manner that
                disparages or discredits Amazon. All other trademarks not owned
                by Amazon that appear on the Site are the property of their
                respective owners, who may or may not be affiliated with,
                connected to, or sponsored by Amazon.AMAZON, AMAZON.COM, AMAZON
                STUDIOS, and other Site graphics, logos, page headers, button
                icons, scripts, and service names are trademarks, registered
                trademarks or trade dress of Amazon in the U.S. and/or other
                countries. Amazon's trademarks and trade dress may not be used
                in connection with any product or service that is not Amazon's,
                in any manner that is likely to cause confusion among customers,
                or in any manner that disparages or discredits Amazon. All other
                trademarks not owned by Amazon that appear on the Site are the
                property of their respective owners, who may or may not be
                affiliated with, connected to, or sponsored by Amazon.
              </TermsContent>
            </Terms>
          </Background>
        </Overlay>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Content;

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
  Schedule,
  ScheduleHeader,
  ScheduleBreak,
  ScheduleSubHeader,
  ScheduleContent,
  ScheduleDate,
  ScheduleDate2,
  ScheduleSection,
  ScheduleLeft,
  ScheduleRight,
  ScheduleText,
  Terms,
  TermsHeader,
  TermsSubHeader,
  TermsHeader3,
  Exit,
  TermsContent,
} from "./ContentStyles";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
import { faComment, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  PinterestShareButton,
  RedditShareButton,
} from "react-share";
import { useState } from "react";
import Video from "./Video";

const content = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";
const shareUrl = "https://muse.place/comingtoamerica";
const shareMessage =
  "Check out the My-T-Sharp Barbershop, best cuts since 1988. www.mytsharp.com @amazonprimevideo #mytsharpexperience";

const Content = () => {
  const [schedule, setSchedule] = useState<boolean>(false);
  const [trailer, setTrailer] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);

  const handleEnter = () => {
    window.location.href = "/comingtoamerica/exterior";
  };

  const handleShare = () => {
    return null;
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
            <RedditShareButton
              url={shareUrl}
              title="My-T-Barbershop Experience"
              style={{ outline: "none" }}
            >
              <Icon>
                <FontAwesomeIcon icon={faReddit} size="2x" color="#ffff00" />
              </Icon>
            </RedditShareButton>
            <TwitterShareButton
              url={shareUrl}
              title="Check out The My-T-Barbershop Experience!"
              style={{ outline: "none" }}
            >
              <ShareIcon>
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </ShareIcon>
            </TwitterShareButton>
            <FacebookShareButton
              url={shareUrl}
              quote={shareMessage}
              style={{ outline: "none" }}
            >
              <Icon>
                <FontAwesomeIcon icon={faFacebook} size="2x" color="#ffff00" />
              </Icon>
            </FacebookShareButton>
            <PinterestShareButton
              url={shareUrl}
              media={`${content}/c2a/images/C2A_Website_Logo_Lockup.png`}
              style={{ outline: "none" }}
            >
              <Icon>
                <FontAwesomeIcon icon={faPinterest} size="2x" color="#ffff00" />
              </Icon>
            </PinterestShareButton>
            <EmailShareButton
              url={shareUrl}
              subject="Check out the My-T-Sharp Barbershop Experience!"
              body={shareMessage}
              style={{ outline: "none" }}
            >
              <ShareIcon>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </ShareIcon>
            </EmailShareButton>
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
      </Container>
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
            <Schedule>
              <ScheduleHeader>SCHEDULE</ScheduleHeader>
              <ScheduleBreak />
              <ScheduleSubHeader>
                DAILY PROGRAMMING SCHEDULE OF THE
              </ScheduleSubHeader>
              <ScheduleSubHeader>
                MY-T-SHARP BARBERSHOP EXPERIENCE
              </ScheduleSubHeader>
              <ScheduleContent>
                <ScheduleDate>MARCH 1ST</ScheduleDate>
                <ScheduleSection>
                  <ScheduleLeft>
                    <ScheduleText>12:00PM EST</ScheduleText>
                  </ScheduleLeft>
                  <ScheduleRight>
                    <ScheduleText>
                      Barbershop HSTRY with Nas and Darian Symone Harvin,
                      Episodes 1 - 3, Powered by HSTRY
                    </ScheduleText>
                  </ScheduleRight>
                </ScheduleSection>
                <ScheduleSection>
                  <ScheduleLeft>
                    <ScheduleText>12:30PM EST</ScheduleText>
                  </ScheduleLeft>
                  <ScheduleRight>
                    <ScheduleText>HSTRY Beanie Giveaway</ScheduleText>
                  </ScheduleRight>
                </ScheduleSection>
                <ScheduleDate>MARCH 2ND</ScheduleDate>
                <ScheduleSection>
                  <ScheduleLeft>
                    <ScheduleText>12:00PM EST</ScheduleText>
                  </ScheduleLeft>
                  <ScheduleRight>
                    <ScheduleText>
                      Sharon Chuter x Zerina Akers, Powered by Uoma Beauty
                    </ScheduleText>
                  </ScheduleRight>
                </ScheduleSection>
                <ScheduleSection>
                  <ScheduleLeft>
                    <ScheduleText>12:30PM EST</ScheduleText>
                  </ScheduleLeft>
                  <ScheduleRight>
                    <ScheduleText>
                      Uoma x Coming 2 America Product Giveaway
                    </ScheduleText>
                  </ScheduleRight>
                </ScheduleSection>
                <ScheduleDate>MARCH 3RD</ScheduleDate>
                <ScheduleSection>
                  <ScheduleLeft>
                    <ScheduleText>12:00PM EST</ScheduleText>
                  </ScheduleLeft>
                  <ScheduleRight>
                    <ScheduleText>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Bronner Bros "Fantasy Hair" Showcase, Powered by Bronner
                      Bros
                    </ScheduleText>
                  </ScheduleRight>
                </ScheduleSection>
                <ScheduleSection>
                  <ScheduleLeft>
                    <ScheduleText>12:30PM EST</ScheduleText>
                  </ScheduleLeft>
                  <ScheduleRight>
                    <ScheduleText>
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Bronner Bros "Soul Glo" Product Giveaway
                    </ScheduleText>
                  </ScheduleRight>
                </ScheduleSection>
                <ScheduleDate>MARCH 5TH</ScheduleDate>
                <ScheduleSection>
                  <ScheduleLeft>
                    <ScheduleText>12:30PM EST</ScheduleText>
                  </ScheduleLeft>
                  <ScheduleRight>
                    <ScheduleText>Bevel Product Giveaway</ScheduleText>
                  </ScheduleRight>
                </ScheduleSection>
                <ScheduleDate2>MARCH 1ST-7TH</ScheduleDate2>
                <ScheduleSection>
                  <ScheduleLeft>
                    <ScheduleText>12:30PM EST</ScheduleText>
                  </ScheduleLeft>
                  <ScheduleRight>
                    <ScheduleText>BTS Content</ScheduleText>
                  </ScheduleRight>
                </ScheduleSection>
                <ScheduleSection>
                  <ScheduleLeft>
                    <ScheduleText></ScheduleText>
                  </ScheduleLeft>
                  <ScheduleRight>
                    <ScheduleText>Barbershop Bloopers</ScheduleText>
                  </ScheduleRight>
                </ScheduleSection>
                <ScheduleSection>
                  <ScheduleLeft>
                    <ScheduleText></ScheduleText>
                  </ScheduleLeft>
                  <ScheduleRight>
                    <ScheduleText>
                      Cast Conversations with Eddie Murphy, Arsenio Hall and The
                      Jamaica, Queens Crew Episodes 1 - 2
                    </ScheduleText>
                  </ScheduleRight>
                </ScheduleSection>
              </ScheduleContent>
            </Schedule>
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
                <b>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  By visiting this site (the "Site"), you accept these
                  conditions. Please read them carefully.
                </b>
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
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                in the U.S. and/or other countries. Amazon's trademarks and
                trade dress may not be used in connection with any product or
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                service that is not Amazon's, in any manner that is likely to
                cause confusion among customers, or in any manner that
                disparages or discredits Amazon. All other trademarks not owned
                by Amazon that appear on the Site are the property of their
                respective owners, who may or may not be affiliated with,
                connected to, or sponsored by Amazon.AMAZON, AMAZON.COM, AMAZON
                STUDIOS, and other Site graphics, logos, page headers, button
                icons, scripts, and service names are trademarks, registered
                trademarks or trade dress of Amazon in the U.S. and/or other
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                countries. Amazon's trademarks and trade dress may not be used
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                in connection with any product or service that is not Amazon's,
                in any manner that is likely to cause confusion among customers,
                or in any manner that disparages or discredits Amazon. All other
                trademarks not owned by Amazon that appear on the Site are the
                property of their respective owners, who may or may not be
                affiliated with, connected to, or sponsored by Amazon.
              </TermsContent>
              <TermsSubHeader>LICENSE AND SITE ACCESS</TermsSubHeader>
              <TermsContent>
                Amazon grants you a limited license to access and make personal
                use of the Site and not to download (other than page caching) or
                modify it, or any portion of it, except with express written
                consent of Amazon. Except with express written consent of
                Amazon, this license does not include any resale or commercial
                use of the Site or its contents; any derivative use of the Site
                or its contents; any downloading or copying of account
                information for the benefit of any other party; or any use of
                data mining, robots, or similar data gathering and extraction
                tools. The Site or any portion of the Site may not be
                reproduced, duplicated, copied, sold, resold, visited, or
                otherwise exploited for any commercial purpose without express
                written consent of Amazon. You may not frame or utilize framing
                techniques to enclose any trademark, logo, or other proprietary
                information (including images, text, page layout, or form) of
                Amazon without express written consent. You may not use any meta
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                tags or any other "hidden text" utilizing Amazon's name or
                trademarks without the express written consent of Amazon. Any
                unauthorized use terminates the permission or license granted by
                Amazon. You are granted a limited, revocable, and nonexclusive
                right to create a hyperlink to the Site so long as the link does
                not portray Amazon, or its products or services in a false,
                misleading, derogatory, or otherwise offensive matter. You may
                not use any Amazon logo or other proprietary graphic or
                trademark as part of the link without express written
                permission.
              </TermsContent>
              <TermsSubHeader>
                YOUR ACCOUNT AND ELIGIBILITY TO USE THE SITE
              </TermsSubHeader>
              <TermsContent>
                If you use the Site, you are responsible for maintaining the
                confidentiality of your account and password and for restricting
                access to your computer, and you agree to accept responsibility
                for all activities that occur under your account or password at
                any time. The Site is not available for use by children. You
                must be 18 to use the Site. Amazon reserves the right to refuse
                service, terminate accounts, and remove or edit content.
              </TermsContent>
              <TermsSubHeader>COPYRIGHT COMPLAINTS</TermsSubHeader>
              <TermsContent>
                Amazon respects the intellectual property of others. If you
                believe that your work has been copied in a way that constitutes
                copyright infringement, please follow our{" "}
                <a href="https://studios.amazon.com/help/conditions-of-use">
                  Notice and Procedure for Making Claims of Copyright
                  Infringement.
                </a>
              </TermsContent>
              <TermsSubHeader>OTHER PARTIES</TermsSubHeader>
              <TermsContent>
                Parties other than Amazon may make rights and services available
                on the Site. In addition, we provide links to the sites of
                affiliated companies and certain other businesses. We are not
                responsible for examining or evaluating, and we do not warrant
                the offerings of, any of these parties or the content of their
                Web sites. Amazon does not assume any responsibility or
                liability for the actions, product, and content of all these and
                any other third parties. You should carefully review their
                privacy statements and other conditions of use.
              </TermsContent>
              <TermsSubHeader>
                DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY
              </TermsSubHeader>
              <TermsContent>
                THIS SITE AND ALL INFORMATION, CONTENT, MATERIALS, PRODUCTS
                (INCLUDING SOFTWARE) AND SERVICES INCLUDED ON OR OTHERWISE MADE
                AVAILABLE TO YOU THROUGH THIS SITE ARE PROVIDED BY AMAZON ON AN
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "AS IS" AND "AS AVAILABLE" BASIS, UNLESS OTHERWISE SPECIFIED IN
                WRITING. AMAZON MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY
                KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THIS SITE OR
                THE INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING
                SOFTWARE) OR SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO
                YOU THROUGH THIS SITE, UNLESS OTHERWISE SPECIFIED IN WRITING.
                YOU EXPRESSLY AGREE THAT YOUR USE OF THIS SITE IS AT YOUR SOLE
                RISK. TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, AMAZON
                DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT
                LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
                FOR A PARTICULAR PURPOSE. AMAZON DOES NOT WARRANT THAT THIS
                SITE; INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING
                SOFTWARE) OR SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO
                YOU THROUGH THIS SITE; THEIR SERVERS; OR E-MAIL SENT FROM AMAZON
                ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. AMAZON WILL NOT
                BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF
                THIS SITE OR FROM ANY INFORMATION, CONTENT, MATERIALS, PRODUCTS
                (INCLUDING SOFTWARE) OR SERVICES INCLUDED ON OR OTHERWISE MADE
                AVAILABLE TO YOU THROUGH THIS SITE, INCLUDING, BUT NOT LIMITED
                TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL
                DAMAGES, UNLESS OTHERWISE SPECIFIED IN WRITING. CERTAIN STATE
                LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE
                EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY
                TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR
                LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MIGHT HAVE ADDITIONAL
                RIGHTS.
              </TermsContent>
              <TermsSubHeader>DISPUTES</TermsSubHeader>
              <TermsContent>
                <b>
                  Any dispute or claim between you and Amazon relating in any
                  way to your visit to the Site or to properties contributed to,
                  developed on or distributed by or through the Site will be
                  resolved by binding arbitration, rather than in court,
                </b>{" "}
                except that you may assert claims in small claims court if your
                claims qualify. The Federal Arbitration Act and federal
                arbitration law apply to this agreement.
                <b>
                  There is no judge or jury in arbitration, and court review of
                  an arbitration award is limited. However, an arbitrator can
                  award on an individual basis the same damages and relief as a
                  court (including injunctive and declaratory relief or
                  statutory damages), and must follow the terms of these
                  Conditions of Use as a court would.
                </b>
                To begin an arbitration proceeding, you must send a letter
                requesting arbitration and describing your claim to our
                registered agent Corporation Service Company, 300 Deschutes Way
                SW, Suite 304, Tumwater, WA 98051. The arbitration will be
                conducted by the American Arbitration Association (AAA) under
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                its rules, including the AAA's Supplementary Procedures for
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Consumer-Related Disputes. The AAA's rules are available at
                www.adr.org or by calling 1-800-778-7879. Payment of all filing,
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                administration and arbitrator fees will be governed by the AAA's
                rules. We will reimburse those fees for claims totaling less
                than $10,000 unless the arbitrator determines the claims are
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                frivolous. Likewise, Amazon will not seek attorneys' fees and
                costs in arbitration unless the arbitrator determines the claims
                are frivolous. You may choose to have the arbitration conducted
                by telephone, based on written submissions, or in person in the
                county where you live or at another mutually agreed location.
                <b>
                  We each agree that any dispute resolution proceedings will be
                  conducted only on an individual basis and not in a class,
                  consolidated or representative action.
                </b>{" "}
                If for any reason a claim proceeds in court rather than in
                arbitration, <b>we each waive any right to a jury trial.</b> We
                also both agree that you or we may bring suit in court to enjoin
                infringement or other misuse of intellectual property rights.
              </TermsContent>
              <TermsSubHeader>APPLICABLE LAW</TermsSubHeader>
              <TermsContent>
                By visiting the Site, you agree that the Federal Arbitration
                Act, applicable federal law, and the laws of the state of
                Washington, without regard to principles of conflict of laws,
                will govern these Conditions of Use and any dispute of any sort
                that might arise between you and Amazon.
              </TermsContent>
              <TermsSubHeader>
                SITE POLICIES, MODIFICATION, AND SEVERABILITY
              </TermsSubHeader>
              <TermsContent>
                Please review our other agreements, rules and notices posted on
                the Site. These policies also govern your visit to the Site. We
                reserve the right to make changes to our Site, policies, and
                these Conditions of Use at any time. If any of these conditions
                is deemed invalid, void, or for any reason unenforceable, that
                condition will be deemed severable and will not affect the
                validity and enforceability of any remaining condition.
              </TermsContent>
              <TermsSubHeader>OUR ADDRESS</TermsSubHeader>
              <TermsContent>
                Amazon Studios
                <br />
                410 Terry Ave N<br />
                Seattle, WA 98109-5210 USA
              </TermsContent>
              <TermsSubHeader>
                Notice and Procedure for Making Claims of Copyright Infringement
              </TermsSubHeader>
              <TermsContent>
                If you believe that your work has been copied in a way that
                constitutes copyright infringement, please provide our copyright
                agent the written information specified below. Please note that
                this procedure is exclusively for notifying Amazon that your
                copyrighted material has been infringed.
                <ul>
                  <li>
                    An electronic or physical signature of the person authorized
                    to act on behalf of the owner of the copyright interest;
                  </li>
                  <li>
                    A description of the copyrighted work that you claim has
                    been infringed upon;
                  </li>
                  <li>
                    A description of where the material that you claim is
                    infringing is located on the Site, including the auction ID
                    number, if applicable;
                  </li>
                  <li>Your address, telephone number, and e-mail address;</li>
                  <li>
                    A statement by you that you have a good-faith belief that
                    the disputed use is not authorized by the copyright owner,
                    its agent, or the law;
                  </li>
                  <li>
                    A statement by you, made under penalty of perjury, that the
                    above information in your notice is accurate and that you
                    are the copyright owner or authorized to act on the
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    copyright owner's behalf.
                  </li>
                </ul>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Amazon's Copyright Agent for notice of claims of copyright
                infringement on the Site can be reached as follows:
                <br />
                Copyright Agent:
                <br />
                Amazon.com Legal Department
                <br />
                P.O. Box 81226
                <br />
                Seattle, WA 98108
                <br />
                phone: (206) 266-4064
                <br />
                fax: (206) 266-7010
                <br />
                e-mail: copyright@amazon.com
                <br />
                <br />
                Courier address:
                <br />
                Copyright Agent
                <br />
                Amazon.com Legal Department
                <br />
                410 Terry Avenue North
                <br />
                Seattle, WA 98109-5210
                <br />
                USA
              </TermsContent>
              <TermsHeader3>Privacy Notice</TermsHeader3>
              <TermsContent>
                We know that you care how information about you is used and
                shared, and we appreciate your trust that we will do so
                carefully and sensibly.
              </TermsContent>
              <TermsContent>
                This website follows the same information practices as Amazon,
                and information we collect is subject to the Amazon.com{" "}
                <a href="https://www.amazon.com/gp/help/customer/display.html/?ie=UTF8&nodeId=468496">
                  Privacy Notice
                </a>
                . By visiting this website, you are accepting the Amazon.com{" "}
                <a href="https://www.amazon.com/gp/help/customer/display.html/?ie=UTF8&nodeId=468496">
                  Privacy Notice
                </a>
                .
              </TermsContent>
            </Terms>
          </Background>
        </Overlay>
      ) : (
        <></>
      )}
    </Page>
  );
};

export default Content;

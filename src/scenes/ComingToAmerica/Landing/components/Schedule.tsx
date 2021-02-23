import styled from "@emotion/styled";

const ScheduleMain = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //border: white 2px dashed;
  color: yellow;
  font-family: "Bodoni", sans-serif;
`;

const ScheduleHeader = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0 0 0.5rem 0;
  line-height: 70%;
`;

const ScheduleBreak = styled.div`
  width: 60%;
  border: yellow 1px solid;
  margin: 0 auto 0 auto;
`;

const ScheduleSubHeader = styled.h3`
  text-align: center;
  font-size: 0.7rem;
  margin: 0;
`;

const ScheduleContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  //border: white 2px dashed;
  margin-top: 10px;
`;

const ScheduleDate = styled.h4`
  margin: 0;
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 10px 0 0 0;
  //border: blue 2px dashed;
  position: relative;
  right: 110px;
`;

const ScheduleDate2 = styled.h4`
  margin: 0;
  padding: 10px 0 0 0;
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.9rem;
  //border: blue 2px dashed;
  position: relative;
  right: 125px;
`;

const ScheduleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1px 0 1px 0;
  //border: red 2px dashed;
`;

const ScheduleLeft = styled.div`
  width: 35%;
  text-align: right;
  //border: green 2px dashed;
`;

const ScheduleText = styled.p`
  font-size: 0.7rem;
  margin: 2px 0 2px 0;
`;

const ScheduleRight = styled.div`
  width: 60%;
  text-align: left;
  //border: blue 2px dashed;
`;

const Schedule = () => {
  return (
    <ScheduleMain>
      <ScheduleHeader>SCHEDULE</ScheduleHeader>
      <ScheduleBreak />
      <ScheduleSubHeader>DAILY PROGRAMMING SCHEDULE OF THE</ScheduleSubHeader>
      <ScheduleSubHeader>MY-T-SHARP BARBERSHOP EXPERIENCE</ScheduleSubHeader>
      <ScheduleContent>
        <ScheduleDate>MARCH 1ST</ScheduleDate>
        <ScheduleSection>
          <ScheduleLeft>
            <ScheduleText>12:00PM EST</ScheduleText>
          </ScheduleLeft>
          <ScheduleRight>
            <ScheduleText>
              Barbershop HSTRY with Nas and Darian Symone Harvin, Episodes 1 -
              3, Powered by HSTRY
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
              Bronner Bros "Fantasy Hair" Showcase, Powered by Bronner Bros
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
    </ScheduleMain>
  );
};

export default Schedule;

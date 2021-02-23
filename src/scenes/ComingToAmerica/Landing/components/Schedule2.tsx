import styled from "@emotion/styled";

const ScheduleMain = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //border: white 2px dashed;
  color: yellow;
  padding-top: 10px;
  font-family: "Bodoni", sans-serif;
  overflow-y: scroll;
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
`;

const ScheduleDate = styled.h4`
  margin: 0;
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.9rem;
  margin: 5px 0 0 0;
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
  width: 63%;
  text-align: left;
  //border: blue 2px dashed;
`;

const Schedule2 = () => {
  return (
    <ScheduleMain>
      <ScheduleHeader>SCHEDULE</ScheduleHeader>
      <ScheduleBreak />
      <ScheduleSubHeader>DAILY PROGRAMMING SCHEDULE OF THE</ScheduleSubHeader>
      <ScheduleSubHeader>MY-T-SHARP BARBERSHOP EXPERIENCE</ScheduleSubHeader>
      <ScheduleContent>
        <ScheduleDate>MARCH 8TH</ScheduleDate>
        <ScheduleSection>
          <ScheduleLeft>
            <ScheduleText>1:00PM EST</ScheduleText>
          </ScheduleLeft>
          <ScheduleRight>
            <ScheduleText>Uoma x Zerina Akers Content Drop</ScheduleText>
            <ScheduleText>
              Black Skinned Beauty Royal Heir-Itage (remains until 3/10)
            </ScheduleText>
          </ScheduleRight>
        </ScheduleSection>
        <ScheduleSection>
          <ScheduleLeft>
            <ScheduleText>1:30PM EST</ScheduleText>
          </ScheduleLeft>
          <ScheduleRight>
            <ScheduleText>Product Giveaway</ScheduleText>
            <ScheduleText>Uoma x C2A</ScheduleText>
            <ScheduleText>Soul Glo + Sexual Chocolates</ScheduleText>
          </ScheduleRight>
        </ScheduleSection>
        <ScheduleSection>
          <ScheduleLeft>
            <ScheduleText>5:30PM EST</ScheduleText>
          </ScheduleLeft>
          <ScheduleRight>
            <ScheduleText>Product Giveaway</ScheduleText>
            <ScheduleText>McDowell's Sweatshirt (TBC)</ScheduleText>
            <ScheduleText>Soul Glo + Sexual Chocolates</ScheduleText>
          </ScheduleRight>
        </ScheduleSection>
        <ScheduleDate>MARCH 9TH</ScheduleDate>
        <ScheduleSection>
          <ScheduleLeft>
            <ScheduleText>1:00PM EST</ScheduleText>
          </ScheduleLeft>
          <ScheduleRight>
            <ScheduleText>Barbershop HSTRY</ScheduleText>
            <ScheduleText>Eps 1-3</ScheduleText>
            <ScheduleText>BTS</ScheduleText>
          </ScheduleRight>
        </ScheduleSection>
        <ScheduleSection>
          <ScheduleLeft>
            <ScheduleText>1:30PM EST</ScheduleText>
          </ScheduleLeft>
          <ScheduleRight>
            <ScheduleText>Product Giveaway</ScheduleText>
            <ScheduleText>HSTRY x C2A</ScheduleText>
            <ScheduleText>Soul Glo + Sexual Chocolates</ScheduleText>
          </ScheduleRight>
        </ScheduleSection>
        <ScheduleDate>MARCH 10TH</ScheduleDate>
        <ScheduleSection>
          <ScheduleLeft>
            <ScheduleText>1:30PM EST</ScheduleText>
          </ScheduleLeft>
          <ScheduleRight>
            <ScheduleText>Product Giveaway</ScheduleText>
            <ScheduleText>Bevel Shave Kit</ScheduleText>
            <ScheduleText>Soul Glo + Sexual Chocolates</ScheduleText>
          </ScheduleRight>
        </ScheduleSection>
        <ScheduleDate2>MARCH 8TH - 10TH</ScheduleDate2>
        <ScheduleSection>
          <ScheduleLeft></ScheduleLeft>
          <ScheduleRight>
            <ScheduleText>BTS Content (TBC)</ScheduleText>
            <ScheduleText>Featurettes (TBC)</ScheduleText>
            <ScheduleText>Character Photos + Cast Info</ScheduleText>
            <ScheduleText>
              Amazon Music Playlist (Official Soundtrack)
            </ScheduleText>
            <ScheduleText>Cast Conversations Ep 1 & 2</ScheduleText>
            <ScheduleText>
              "Eddie Murphy + Arsenio Hall" + "The Jamaica, Queens Crew"
            </ScheduleText>
          </ScheduleRight>
        </ScheduleSection>
      </ScheduleContent>
    </ScheduleMain>
  );
};

export default Schedule2;

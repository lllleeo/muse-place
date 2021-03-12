import styled from "@emotion/styled";

const mainColor = "#c8af68";
const secondaryColor = "#935c23";
const phone = "500px";

const ScheduleMain = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${mainColor};
  padding-top: 10px;
  font-family: "HelveticaBlk", sans-serif;
  overflow-y: scroll;
  #bottomHeader {
    margin-bottom: 3px;
    @media screen and (max-width: ${phone}) {
      margin-bottom: 7px;
    }
  }
`;

const ScheduleHeader = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0 0 5px 0;
  line-height: 70%;
`;

const ScheduleBreak = styled.div`
  width: 60%;
  border: ${mainColor} 1px solid;
  margin: 0 auto 0 auto;
`;

const ScheduleSubHeader = styled.h3`
  text-align: center;
  font-size: 0.7rem;
  margin: 0;
  @media screen and (max-width: ${phone}) {
    font-size: 0.6rem;
  }
`;

const ScheduleContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ScheduleDate = styled.h4`
  margin: 0;
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.9rem;
  margin: 5px 0 0 0;
  position: relative;
  right: 110px;
  @media screen and (max-width: ${phone}) {
    right: 70px;
    font-size: 0.7rem;
  }
`;

const ScheduleDate2 = styled.h4`
  margin: 0;
  padding: 10px 0 0 0;
  text-decoration: underline;
  font-weight: bold;
  font-size: 0.9rem;
  position: relative;
  right: 135px;
  @media screen and (max-width: ${phone}) {
    right: 90px;
    font-size: 0.7rem;
  }
`;

const ScheduleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1px 0 1px 0;
  margin: 5px 0 2px 0;
  @media screen and (max-width: ${phone}) {
    margin: 0;
  }
`;

const ScheduleLeft = styled.div`
  width: 35%;
  text-align: right;
  @media screen and (max-width: ${phone}) {
    width: 40%;
  }
`;

const ScheduleText = styled.p`
  font-size: 0.7rem;
  margin: 2px 0 2px 0;
  @media screen and (max-width: ${phone}) {
    margin: 7px 0;
  }
`;

const ScheduleRight = styled.div`
  width: 63%;
  text-align: left;
  @media screen and (max-width: ${phone}) {
    width: 55%;
    font-size: 0.7rem;
  }
`;

const Schedule = () => {
  return (
    <ScheduleMain>
      <ScheduleHeader>SCHEDULE</ScheduleHeader>
      <ScheduleBreak />
      <ScheduleSubHeader>DAILY PROGRAMMING SCHEDULE OF THE</ScheduleSubHeader>
      <ScheduleSubHeader id="bottomHeader">
        MY-T-SHARP BARBERSHOP EXPERIENCE
      </ScheduleSubHeader>
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
      </ScheduleContent>
    </ScheduleMain>
  );
};

export default Schedule;

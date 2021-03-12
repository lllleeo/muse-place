import { Body, Title } from "../../components/Styles";
import { Giveaway } from "../../../assets/giveaways";
import styled from "@emotion/styled";

const Product = styled.img`
  width: 75%;
  height: 200px;
  object-fit: contain;
`;

const Logo = styled.img`
  height: 30px;
  width: 50%;
  max-width: 200px;
  object-fit: contain;
`;

const Coming = (props: { giveaway: Giveaway }) => {
  const { giveaway } = props;

  return (
    <>
      <Title>{giveaway.name.toUpperCase()} GIVEAWAY</Title>
      <Product src={giveaway.productImage} />
      <Body>{giveaway.comingText}</Body>
      <Logo src={giveaway.logoImage} />
    </>
  );
};

export default Coming;

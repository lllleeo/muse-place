import { Body, Title } from "../../components/Styles";
import { Giveaway } from "../../../assets/giveaways";

const SoldOut = (props: { giveaway: Giveaway }) => {
  const { giveaway } = props;

  return (
    <>
      <Title>{giveaway.name.toUpperCase()} GIVEAWAY</Title>
      <Body>Check the daily schedule for our next giveaway!</Body>
    </>
  );
};

export default SoldOut;

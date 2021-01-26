import Scroll from "./Scroll";
import { ScrollDataProps } from "../../index";

type ScrollsProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  scrollData: ScrollDataProps[];
};

const Scrolls = (props: ScrollsProps) => {
  const { count, setCount, scrollData } = props;

  const scrollArray = scrollData.map((scroll) => (
    // eslint-disable-next-line react/jsx-key
    <Scroll
      count={count}
      setCount={setCount}
      img={scroll.img}
      text={scroll.text}
      textColor={scroll.textColor}
      textSize={scroll.textSize}
      textY={scroll.textY}
      position={scroll.position}
      rotationY={scroll.rotationY}
      key={scroll.img}
    />
  ));

  return <group>{scrollArray}</group>;
};

export default Scrolls;

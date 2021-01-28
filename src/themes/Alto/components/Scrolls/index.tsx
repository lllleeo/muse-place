import Scroll from "./Scroll";
import { ScrollData } from "../../types/scroll";

type ScrollsProps = {
  count: number;
  setCount: (n: number) => void;
  scrollData: ScrollData[];
};

const Scrolls = (props: ScrollsProps) => {
  const { count, setCount, scrollData } = props;

  return (
    <group>
      {scrollData.map((scroll) => (
        <Scroll
          count={count}
          setCount={setCount}
          img={scroll.img}
          text={scroll.text}
          textColor={scroll.textColor}
          textSize={scroll.textSize}
          textY={scroll.textY}
          position={scroll.position}
          rotation-y={scroll.rotationY}
          key={scroll.img}
        />
      ))}
    </group>
  );
};

export default Scrolls;

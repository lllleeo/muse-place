import Model from "./CardModel";
import { Video, Interactable } from "spacesvr";

type CardProps = {
  link: string;
  video: string;
} & JSX.IntrinsicElements["group"];

const NftCard = (props: CardProps) => {
  const { link, video } = props;

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <group {...props}>
      <Interactable onClick={handleClick}>
        <group>
          <Video
            src={video}
            rotation-y={-Math.PI / 2 + 0.05}
            position={[-0.05, 0, 0]}
            scale={[1.5, 1.5, 1.5]}
          />
          <Model />
        </group>
      </Interactable>
    </group>
  );
};

export default NftCard;

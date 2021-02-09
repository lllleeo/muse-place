import { Floating, Image } from "spacesvr";
import { GroupProps } from "react-three-fiber";
import FacePlayer from "../../../modifiers/FacePlayer";

type Props = {
  open: boolean;
} & GroupProps;

const SILKS_CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/silksbyvp";
const SPACING = 0.175;

const Images = (props: Props) => {
  const { open, ...restProps } = props;

  const images = [
    `${SILKS_CONTENT_FOLDER}/gallery/bench.jpg`,
    `${SILKS_CONTENT_FOLDER}/gallery/bike.jpg`,
    `${SILKS_CONTENT_FOLDER}/gallery/camo.jpg`,
  ];

  if (!open) {
    return null;
  }

  return (
    <group {...restProps}>
      <FacePlayer>
        {images.map((image, i) => (
          <Floating height={SPACING * 0.05} speed={0.5}>
            <Image
              src={image}
              size={[0.1, 0.15]}
              position-y={(i - 1) * SPACING}
            />
          </Floating>
        ))}
      </FacePlayer>
    </group>
  );
};

export default Images;

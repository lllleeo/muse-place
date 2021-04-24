import { Floating, Image } from "spacesvr";
import { GroupProps } from "@react-three/fiber";
import FacePlayer from "../../../modifiers/FacePlayer";
import { useContext } from "react";
import { KioskContext } from "../index";

const SPACING = 0.175;

const Images = (props: GroupProps) => {
  const { open, product } = useContext(KioskContext);

  if (!open || !product) {
    return null;
  }

  const { images } = product;

  return (
    <group {...props}>
      <FacePlayer>
        {images.map((image, i) => (
          <Floating height={SPACING * 0.05} speed={0.5} key={image}>
            <Image src={image} size={0.15} position-y={(i - 1) * SPACING} />
          </Floating>
        ))}
      </FacePlayer>
    </group>
  );
};

export default Images;

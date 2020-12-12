import { Text } from "@react-three/drei";
import { Vector3 } from "three";
import { Interactable, Image } from "spacesvr";

type LinkProps = {
  link?: string;
  position: Vector3 | [number, number, number];
  src: string;
  rotY?: number;
  text?: string;
  color?: string;
};

const Link = (props: LinkProps) => {
  const { link = "", position, rotY = 0, color = "white", src } = props;

  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <group position={position} rotation={[0, rotY, 0]}>
      {link === "" ? (
        <Image src={src} ratio={[1, 1]} sizeScale={5} framed />
      ) : (
        <Interactable onClick={handleClick}>
          <Image src={src} ratio={[1, 1]} sizeScale={5} framed />
        </Interactable>
      )}
    </group>
  );
};

export default Link;

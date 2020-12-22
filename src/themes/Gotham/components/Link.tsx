import { Vector3 } from "three";
import { Interactable, Image, Video } from "spacesvr";

type LinkProps = {
  link?: string;
  position: Vector3 | [number, number, number];
  src: string;
  rotY?: number;
  text?: string;
  color?: string;
};

const Link = (props: LinkProps) => {
  const { link, position, rotY = 0, src } = props;

  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  if (src.includes("mp4")) {
    return (
      <group position={position} rotation={[0, rotY, 0]}>
        {link ? (
          <Interactable onClick={handleClick}>
            <Video src={src} size={[6, 6]} framed muted />
          </Interactable>
        ) : (
          <Video src={src} size={[6, 6]} framed muted />
        )}
      </group>
    );
  }

  return (
    <group position={position} rotation={[0, rotY, 0]}>
      {link ? (
        <Interactable onClick={handleClick}>
          <Image src={src} size={[6, 6]} framed />
        </Interactable>
      ) : (
        <Image src={src} size={[6, 6]} framed />
      )}
    </group>
  );
};

export default Link;

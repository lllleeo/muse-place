import { Vector3 } from "three";
import { Interactable, Image, Video } from "spacesvr";

type LinkProps = {
  audio?: boolean;
  link?: string;
  size?: number;
  position: Vector3 | [number, number, number];
  src: string;
  rotY?: number;
  text?: string;
  color?: string;
};

const Link = (props: LinkProps) => {
  const { audio, link, position, rotY = 0, size = 1.6, src } = props;

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
            <Video src={src} size={size} framed muted={!audio} />
          </Interactable>
        ) : (
          <Video src={src} size={size} framed muted={!audio} />
        )}
      </group>
    );
  }

  return (
    <group position={position} rotation={[0, rotY, 0]}>
      {link ? (
        <Interactable onClick={handleClick}>
          <Image src={src} size={size} framed />
        </Interactable>
      ) : (
        <Image src={src} size={size} framed />
      )}
    </group>
  );
};

export default Link;

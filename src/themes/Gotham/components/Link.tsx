import { Vector2, Vector3 } from "three";
import { Interactable, Image, Video } from "spacesvr";

type LinkProps = {
  link?: string;
  size?: [number, number];
  position: Vector3 | [number, number, number];
  src: string;
  rotY?: number;
  text?: string;
  color?: string;
};

const Link = (props: LinkProps) => {
  const { link, size = [1, 1], position, rotY = 0, src } = props;

  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  const imgSize: [number, number] = new Vector2(size[0], size[1])
    .normalize()
    .multiplyScalar(6.25)
    .toArray() as [number, number];

  if (src.includes("mp4")) {
    return (
      <group position={position} rotation={[0, rotY, 0]}>
        {link ? (
          <Interactable onClick={handleClick}>
            <Video src={src} size={imgSize} framed muted />
          </Interactable>
        ) : (
          <Video src={src} size={imgSize} framed muted />
        )}
      </group>
    );
  }

  return (
    <group position={position} rotation={[0, rotY, 0]}>
      {link ? (
        <Interactable onClick={handleClick}>
          <Image src={src} size={imgSize} framed />
        </Interactable>
      ) : (
        <Image src={src} size={imgSize} framed />
      )}
    </group>
  );
};

export default Link;

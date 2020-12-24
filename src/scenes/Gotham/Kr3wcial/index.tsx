import Jukebox from "themes/Gotham/models/Jukebox";
import DepthImage from "themes/Gotham/components/DepthImage";
import { Vector3 } from "three";
import { Audio, Image } from "spacesvr";

const Kr3wcial = () => {
  return (
    <group>
      <DepthImage
        position={[-6, 1, 2.5]}
        rotation-y={Math.PI / 2}
        img="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kr3wcial/7.jpg"
        depth="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kr3wcial/displace.png"
      />
      <Jukebox position={[1.9, 0, -3.2]} rotation-y={-0.63} />
      <Audio
        url="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kr3wcial/loveyou.mp3"
        position={new Vector3(1.9, 0, -3.2)}
        volume={1}
      />
      <group
        position={[-5.46, 1.25, 8]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.5, 0.5, 1]}
      >
        <Image
          src="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kr3wcial/extra3.jpg"
          size={[2, 2]}
          position-x={-3}
          framed
        />
        <Image
          src="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kr3wcial/extra4.JPG"
          size={[2, 2]}
          framed
        />
      </group>
      <group
        position={[2.49, 0.9, -2.2]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1 / 4, 1 / 4, 1]}
      >
        <Image
          src="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kr3wcial/extra1.png"
          size={[0.8 * 4, 0.8 * 4]}
          framed
        />
      </group>
    </group>
  );
};

export default Kr3wcial;

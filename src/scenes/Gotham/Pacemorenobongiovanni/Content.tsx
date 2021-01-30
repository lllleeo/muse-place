import { Video } from "spacesvr";
import { useFrame } from "react-three-fiber";
import { useRef } from "react";
import { Group } from "three";

type ContentProps = {
  drugTaken: boolean;
};

const Content = (props: ContentProps) => {
  const { drugTaken } = props;

  const content = useRef<Group>();

  useFrame(({ clock }, delta) => {
    if (drugTaken && content.current) {
      content.current.scale.x = 1;
      content.current.scale.y = Math.min(
        1,
        content.current.scale.y + delta * 0.5
      );
      content.current.scale.z = 1;
    }
    if (!drugTaken && content.current) {
      content.current.scale.x = 0;
      content.current.scale.y = Math.max(
        0,
        content.current.scale.y - delta * 0.5
      );
      content.current.scale.z = 0;
    }
  });

  return (
    <group>
      <group ref={content} scale={[0, 0, 0]}>
        <group position={[-1.51, 1.25, 12]} rotation-y={Math.PI}>
          {drugTaken && (
            <Video
              src="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/pachman77/pach-rap.mp4"
              size={[8, 3]}
            />
          )}
        </group>
        <group position={[-1.51, 1.25, -3.5]}>
          <Video
            src="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/pachman77/reel-shorter.mp4"
            size={[8, 3]}
            muted
          />
        </group>
      </group>
    </group>
  );
};

export default Content;

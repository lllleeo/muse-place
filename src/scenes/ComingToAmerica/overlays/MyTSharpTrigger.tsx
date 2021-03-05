import Trigger from "../modifiers/Trigger";
import { useState } from "react";

const CONTENT_FOLDER = "https://d27rt3a60hh1lx.cloudfront.net/content/c2a";

const MyTSharpTrigger = () => {
  const [played, setPlayed] = useState(false);

  return (
    <group>
      <Trigger
        onClick={() => {
          if (played) return;
          const sound = new Audio(`${CONTENT_FOLDER}/audio/C2AAudioIntro.mp3`);
          sound.loop = false;
          sound.play();
          setPlayed(true);
        }}
      >
        <mesh position={[-1.33, 1.68, -0.05]}>
          <boxBufferGeometry args={[5.69, 0.73, 0.2]} />
          <meshStandardMaterial color="#999999" transparent opacity={0} />
        </mesh>
        <mesh position={[-1.33, 1.68, -0.05]} visible={false}>
          <boxBufferGeometry args={[5.69, 0.73, 0.2]} />
        </mesh>
      </Trigger>
    </group>
  );
};

export default MyTSharpTrigger;

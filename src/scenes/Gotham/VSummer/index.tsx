import { Image, Video } from "spacesvr";
import { Text } from "@react-three/drei";

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kkites";

export default function VSummer() {
  return (
    <group>
      <mesh name="groupOrigin">
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </group>
  );
}

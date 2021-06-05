import { Image } from "spacesvr";

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/kkites";

export default function KKites() {
  return (
    <group>
      <group
        position={[-1.36, 1.26, 0]}
        rotation-y={Math.PI / 2}
        name="left-pane-back"
      >
        <Image
          name="1"
          src={`${CONTENT_FOLDER}/1.jpg`}
          position-x={0.45}
          framed
        />
        <Image
          name="2"
          src={`${CONTENT_FOLDER}/2.jpg`}
          position-x={-0.65}
          framed
        />
      </group>
      <group
        position={[-1.6, 1.26, 0]}
        rotation-y={-Math.PI / 2}
        name="left-pane-front"
      >
        <Image
          name="3"
          src={`${CONTENT_FOLDER}/3.jpg`}
          position-x={0.55}
          framed
        />
        <Image
          name="4"
          src={`${CONTENT_FOLDER}/4.jpg`}
          position-x={-0.4}
          framed
        />
      </group>
      <group
        position={[-1.64, 1.26, 4.05]}
        rotation-y={Math.PI}
        name="middle-pane-left"
      >
        <Image
          name="5"
          src={`${CONTENT_FOLDER}/5.jpg`}
          position-x={-0.6}
          framed
        />
        <Image
          name="6"
          src={`${CONTENT_FOLDER}/6.jpg`}
          position-x={0.45}
          framed
        />
      </group>
      <group
        position={[-1.64, 1.26, 4.25]}
        rotation-y={2 * Math.PI}
        name="middle-pane-right"
      >
        <Image
          name="7"
          src={`${CONTENT_FOLDER}/7.jpg`}
          position-x={-0.45}
          framed
        />
        <Image
          name="8"
          src={`${CONTENT_FOLDER}/8.jpg`}
          position-x={0.6}
          framed
        />
      </group>
      <group
        position={[-1.36, 1.26, 8.11]}
        rotation-y={Math.PI / 2}
        name="right-pane-back"
      >
        <Image
          name="9"
          src={`${CONTENT_FOLDER}/9.jpg`}
          position-x={0.45}
          framed
        />
        <Image
          name="10"
          src={`${CONTENT_FOLDER}/10.jpg`}
          position-x={-0.55}
          framed
        />
      </group>
      <group
        position={[-1.6, 1.26, 8.11]}
        rotation-y={-Math.PI / 2}
        name="right-pane-front"
      >
        <Image
          name="11"
          src={`${CONTENT_FOLDER}/11.jpg`}
          position-x={0.55}
          framed
        />
        <Image
          name="12"
          src={`${CONTENT_FOLDER}/12.jpg`}
          position-x={-0.45}
          framed
        />
      </group>
    </group>
  );
}

import { Image, Video } from "spacesvr";
import Jesus from "./models/Jesus";
import { Text } from "@react-three/drei";

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
      <group
        position={[2.49, 1.25, 10.0]}
        rotation-y={-Math.PI / 2}
        name="back-wall-right"
      >
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[0.15, 0.5, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[1.3, 0.5, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[0.15, -0.75, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[1.3, -0.75, 0]}
          size={1.15}
          framed
        />
      </group>
      <group
        position={[2.49, 1.25, 3.42]}
        rotation-y={-Math.PI / 2}
        name="back-wall-middle"
      >
        <Image
          name="13"
          src={`${CONTENT_FOLDER}/13.jpg`}
          position-x={-1.3}
          size={1.5}
          framed
        />
        <Image
          name="13"
          src={`${CONTENT_FOLDER}/13.jpg`}
          position-x={0.1}
          size={1.5}
          framed
        />
        <Image
          name="13"
          src={`${CONTENT_FOLDER}/13.jpg`}
          position-x={1.5}
          size={1.5}
          framed
        />
        <Image
          name="13"
          src={`${CONTENT_FOLDER}/13.jpg`}
          position-x={2.9}
          size={1.5}
          framed
        />
      </group>
      <group
        position={[2.49, 1.25, -3.0]}
        rotation-y={-Math.PI / 2}
        name="back-wall-left"
      >
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[0.15, 0.5, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[1.3, 0.5, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[0.15, -0.75, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[1.3, -0.75, 0]}
          size={1.15}
          framed
        />
      </group>
      <group
        position={[-5.47, 1.25, 0]}
        rotation-y={Math.PI / 2}
        name="front-wall-right"
      >
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[0.15, 0.5, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[1.3, 0.5, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[2.45, 0.5, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[0.15, -0.75, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[1.3, -0.75, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[2.45, -0.75, 0]}
          size={1.15}
          framed
        />
      </group>
      <group
        position={[-5.47, 1.25, 11.7]}
        rotation-y={Math.PI / 2}
        name="front-wall-left"
      >
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[0.15, 0.5, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[1.3, 0.5, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[2.45, 0.5, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[0.15, -0.75, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[1.3, -0.75, 0]}
          size={1.15}
          framed
        />
        <Image
          name="16"
          src={`${CONTENT_FOLDER}/16.jpg`}
          position={[2.45, -0.75, 0]}
          size={1.15}
          framed
        />
      </group>
      <group
        position={[-5.47, 1.25, 6.0]}
        rotation-y={Math.PI / 2}
        name="front-wall-middle"
      >
        <Text
          fontSize={0.6}
          color="white"
          anchorX="left"
          position={[-2.25, 0.0025, 0]}
        >
          IFAKEMAKECLOTHES.COM
        </Text>
      </group>
      <group name="outside-videos" position={[-1.82, 1, 0]}>
        <Video
          src={`${CONTENT_FOLDER}/brbchains.mp4`}
          scale={7}
          position-z={-9.5}
          framed
          muted
        />
        <Video
          src={`${CONTENT_FOLDER}/brbchains.mp4`}
          scale={7}
          rotation-y={Math.PI}
          position-z={18}
          framed
          muted
        />
      </group>
      <group
        position={[-1.46, 2.5, 3.91]}
        rotation={[Math.PI / 2, 0, 0]}
        name="ceiling-video"
      >
        <Video
          src={`${CONTENT_FOLDER}/brbchains.mp4`}
          scale={[11, 17, 11]}
          muted
        />
      </group>
    </group>
  );
}

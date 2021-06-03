import { Image, Video } from "spacesvr";
import { GroupProps, useFrame, useLoader } from "@react-three/fiber";
import CrazyMaterial from "./shaders/crazy2";
import Palm from "./models/Palmtree";
import * as THREE from "three";
import { useMemo, Suspense } from "react";

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/drew";

function PngImage(props: { src: string; size?: number } & GroupProps) {
  const { src, size = 1, ...restProps } = props;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const imageTex = useLoader(THREE.TextureLoader, src);

  const width = imageTex.image.width,
    height = imageTex.image.height;
  const max = Math.max(width, height);
  const WIDTH = (width / max) * size,
    HEIGHT = (height / max) * size;

  return (
    <Suspense fallback={null}>
      <group scale={size} {...restProps}>
        <mesh>
          <planeBufferGeometry args={[WIDTH, HEIGHT]} />
          <meshBasicMaterial map={imageTex} transparent />
        </mesh>
      </group>
    </Suspense>
  );
}

export default function Drew() {
  const crazyMaterial = useMemo(() => new CrazyMaterial(), []);
  useFrame(({ clock }, delta) => {
    if (crazyMaterial) {
      // @ts-ignore
      crazyMaterial.time += delta / 3;
    }
  });

  return (
    <group>
      <group
        position={[-3, 0, 4.14]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        name="rugs"
      >
        <PngImage src={`${CONTENT_FOLDER}/panther+sticker_rug.png`} size={2} />
        <PngImage
          src={`${CONTENT_FOLDER}/panther+sticker_rug.png`}
          position-x={4}
          size={2}
        />
        <PngImage
          src={`${CONTENT_FOLDER}/panther+sticker_rug.png`}
          position-x={-4}
          size={2}
        />
      </group>
      <group name="palmTrees">
        <Palm position={[1.5, 0, -4]} name="palm1" />
        <Palm position={[-4.5, 0, -4]} name="palm1" />
        <Palm position={[-4.5, 0, 10.5]} name="palm1" />
        <Palm position={[1.5, 0, 10.5]} name="palm1" />
      </group>
      <group
        name="back-wall-right"
        rotation-y={-Math.PI / 2}
        position={[2.49, 1.25, 10.6]}
      ></group>
      <group
        name="back-wall"
        position={[2.49, 1.07, 4]}
        rotation-y={-Math.PI / 2}
      >
        <group name="sponsors">
          <Image
            src={`${CONTENT_FOLDER}/Garden+Saint+Night+Out_Glassy.png`}
            framed
            size={2}
            position-x={-6.25}
            position-y={0.3}
          />
          <Image
            src={`${CONTENT_FOLDER}/Immovable-Saint-ap2b.png`}
            framed
            size={2}
            position-x={0.95}
            position-y={0.3}
          />
          <Image
            src={`${CONTENT_FOLDER}/Saint+of+Hallways+copy.png`}
            framed
            size={2}
            position-x={-2}
            position-y={0.3}
          />
          <Image
            src={`${CONTENT_FOLDER}/Saint+of+Rocky+Bluffs_Glassy.png`}
            framed
            size={2}
            position-x={6.5}
            position-y={0.3}
          />
          <Image
            src={`${CONTENT_FOLDER}/Saint+of+Travel_Glassy.png`}
            framed
            size={2}
            position-x={2.35}
            position-y={0.3}
          />
          <Image
            src={`${CONTENT_FOLDER}/Saint+Transformation_signed.png`}
            framed
            size={2}
            position-x={-0.4}
            position-y={0.3}
          />
        </group>
      </group>
      <group
        name="left-middle-wall-back"
        position={[-1.39, 1.07, 0.75]}
        rotation-y={Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/collage+1.png`}
          position-x={0.1}
          position-y={0.825}
          size={1.1}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/collage+2.png`}
          position-x={1.125}
          position-y={-0.45}
          size={1.1}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/collage+3.png`}
          position-x={-0.025}
          position-y={-0.45}
          size={1.1}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/collage+4.png`}
          position-x={1.25}
          position-y={0.825}
          size={1.1}
          framed
        />
      </group>
      <group
        name="center-middle-wall-back"
        position={[-1.39, 1.25, 4.1]}
        rotation-y={Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/surf+pic+5.jpg`}
          position={[0.5, -0.5, 0]}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/surf+pic+6.jpg`}
          size={1.25}
          position={[0, 0.675, 0]}
          framed
        />
        <Image
          src={`${CONTENT_FOLDER}/surf+pic+7.jpg`}
          position={[-0.5, -0.5, 0]}
          framed
        />
      </group>
      <group
        name="right-middle-wall-back"
        position={[-1.39, 1.25, 8.6]}
        rotation-y={Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/nft+highrise.png`}
          framed
          size={2}
          position-x={0.5}
        />
      </group>
      <group
        name="left-middle-wall-front"
        position={[-1.63, 1.25, -0.35]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/spongebob.png`}
          framed
          size={1.25}
          position-x={-0.1}
        />
        <Image
          src={`${CONTENT_FOLDER}/squirtle.png`}
          framed
          size={1.25}
          position-x={1.05}
        />
      </group>
      <group
        name="center-wall-middle-front"
        position={[-1.63, 1.25, 4.125]}
        rotation-y={-Math.PI / 2}
      >
        <Image src={`${CONTENT_FOLDER}/richie+rich.png`} scale={2} framed />
      </group>
      <group
        name="right-middle-wall-front"
        position={[-1.63, 1.25, 7.65]}
        rotation-y={-Math.PI / 2}
      >
        <Image
          src={`${CONTENT_FOLDER}/homer.png`}
          framed
          size={1.25}
          position-x={-0.1}
        />
        <Image
          src={`${CONTENT_FOLDER}/bugs+bunny.png`}
          framed
          size={1.25}
          position-x={1.05}
        />
      </group>
      <group
        name="wall-bottom"
        position={[-5.47, 0.95, 0.6]}
        rotation-y={Math.PI / 2}
      >
        <Video
          src={`${CONTENT_FOLDER}/2.mp4`}
          size={2.45}
          position={[-7, 0.35, 0]}
          framed
          muted
        />
        <group>
          <Image
            src={`${CONTENT_FOLDER}/bear+brick+2.jpg`}
            size={1}
            position={[-8.8, 0.25, 0]}
            framed
          />
          <Image
            src={`${CONTENT_FOLDER}/surf+pic+4.jpg`}
            size={1}
            position={[-9.82, 0.25, 0]}
            framed
          />
          <Image
            src={`${CONTENT_FOLDER}/bear+brick+4.jpg`}
            size={1}
            position={[-10.85, 0.25, 0]}
            framed
          />
        </group>
        <group position-x={-3.95} name="front-wall-middle">
          {/*  /!* @ts-ignore *!/*/}
          <PngImage
            src={`${CONTENT_FOLDER}/heatwave+logo.png`}
            size={2.1}
            position-y={0.3}
          />
        </group>
        <Video
          src={`${CONTENT_FOLDER}/1.mp4`}
          size={2.45}
          position={[-1, 0.35, 0]}
          framed
          muted
        />
        <group position-x={-0.15}>
          <Image
            src={`${CONTENT_FOLDER}/bear+bricks+1.jpg`}
            size={1.15}
            position={[3, 0.25, 0]}
            framed
          />
          <Image
            src={`${CONTENT_FOLDER}/surf+pic+2.jpg`}
            size={1.15}
            position={[2, 0.25, 0]}
            framed
          />
          <Image
            src={`${CONTENT_FOLDER}/bear+bricks+3.jpg`}
            size={1.15}
            position={[1, 0.25, 0]}
            framed
          />
          <Image
            src={`${CONTENT_FOLDER}/surf+pic+1.jpg`}
            size={1.15}
            position={[4, 0.25, 0]}
            framed
          />
        </group>
      </group>
    </group>
  );
}

import { Suspense } from "react";
import Content02 from "./models/Content_02";
import Builder09 from "../Builders/Builder09";
import { Image, Floating, Interactable } from "spacesvr";
import { GroupProps } from "@react-three/fiber";

const RADIUS = 10.5;

const ImageBox = (props: { src: string; url: string } & GroupProps) => {
  const { src, url, ...restProps } = props;

  return (
    <group name="image" {...restProps}>
      <group scale={0.7}>
        <Image src={src} position-z={0.055} />
        <Interactable onClick={() => window.open(url, "_blank")}>
          <mesh>
            <boxBufferGeometry args={[1, 1, 0.1]} />
          </mesh>
        </Interactable>
      </group>
    </group>
  );
};

const CONTENT_FOLDER =
  "https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/lucidmonday/lm20-25t500x500";

export default function Kiosk2() {
  return (
    <group name="kiosk-2" rotation-y={Math.PI / 3 - 0.9} position-y={5}>
      <group position-z={RADIUS} position-y={0.1}>
        <Builder09 position={[1, 0, 1.4]} />
        <Suspense fallback={null}>
          <Content02 />
        </Suspense>
        <Floating height={0.05}>
          <ImageBox
            url="https://soundcloud.com/lucidmonday/sets/lm020"
            src={`${CONTENT_FOLDER}/lm020.jpg`}
            position={[-1.8, 0.8, -0]}
            rotation-y={Math.PI / 2}
          />
        </Floating>
        <Floating height={0.05}>
          <ImageBox
            url="https://soundcloud.com/lucidmonday/sets/lm021"
            src={`${CONTENT_FOLDER}/lm021.jpg`}
            position={[-1.25, 0.8, -1]}
          />
        </Floating>
        <Floating height={0.05}>
          <ImageBox
            url="https://soundcloud.com/lucidmonday/sets/lm022"
            src={`${CONTENT_FOLDER}/lm022.jpg`}
            position={[0, 0.8, -1]}
          />
        </Floating>
        <Floating height={0.05}>
          <ImageBox
            url="https://soundcloud.com/lucidmonday/sets/lm023"
            src={`${CONTENT_FOLDER}/lm023.jpg`}
            position={[1.25, 0.8, -1]}
          />
        </Floating>
        <Floating height={0.05}>
          <ImageBox
            url="https://soundcloud.com/lucidmonday/sets/lm024"
            src={`${CONTENT_FOLDER}/lm024.jpg`}
            position={[1.8, 0.8, 0]}
            rotation-y={-Math.PI / 2}
          />
        </Floating>
        <ImageBox
          url="https://soundcloud.com/lucidmonday/sets/lm025"
          src={`${CONTENT_FOLDER}/lm025.jpg`}
          position={[-1.25, 0.4, 1.175]}
          rotation-x={-0.25}
          rotation-y={0.1}
          scale={1.4}
        />
      </group>
    </group>
  );
}

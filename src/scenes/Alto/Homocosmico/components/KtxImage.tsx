import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { useLoader, useThree } from "@react-three/fiber";
import { Material } from "three";
import Frame from "./Frame";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import { KTXLoader } from "three/examples/jsm/loaders/KTXLoader";
import { BasisTextureLoader } from "three/examples/jsm/loaders/BasisTextureLoader";

type ImageProps = JSX.IntrinsicElements["group"] & {
  src: string;
  size?: number;
  framed?: boolean;
  frameMaterial?: Material;
  frameWidth?: number;
};

const UnsuspensedImage = (props: ImageProps) => {
  const { src, size = 1, framed, frameMaterial, frameWidth = 1 } = props;
  const { gl } = useThree();

  const isKtx2 = src.includes(".ktx2"),
    isKtx = !src.includes(".ktx2") && src.includes(".ktx"),
    isBasis = src.includes(".basis");

  const texture = useLoader(
    // @ts-ignore
    isKtx2
      ? KTX2Loader
      : isKtx
      ? KTXLoader
      : isBasis
      ? BasisTextureLoader
      : THREE.TextureLoader,
    src,
    (loader: THREE.Loader) => {
      if (isKtx2) {
        (loader as KTX2Loader).setTranscoderPath(
          "https://d27rt3a60hh1lx.cloudfront.net/basis-transcoder/"
        );
        (loader as KTX2Loader).detectSupport(gl);
      } else if (isBasis) {
        (loader as BasisTextureLoader).setTranscoderPath(
          "https://d27rt3a60hh1lx.cloudfront.net/basis-transcoder/"
        );
        (loader as BasisTextureLoader).detectSupport(gl);
      }
    }
  );
  texture.encoding = THREE.sRGBEncoding;

  const [width, setWidth] = useState<number>(texture.image.width);
  const [height, setHeight] = useState<number>(texture.image.height);

  const max = Math.max(width, height);
  const WIDTH = (width / max) * size,
    HEIGHT = (height / max) * size;

  if (isKtx2 || isKtx) {
    const ogSizeUrl = isKtx2
      ? `${src.slice(0, -4)}txt`
      : `${src.slice(0, -3)}txt`;
    const request = new XMLHttpRequest();
    request.open("GET", ogSizeUrl, true);
    request.send(null);
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        const type = request.getResponseHeader("Content-Type");
        if (type !== null && type.indexOf("text") !== 1) {
          const requestArr = request.responseText.split("\n");
          setWidth(Number.parseInt(requestArr[0]));
          setHeight(Number.parseInt(requestArr[1]));
        }
      }
    };
  }

  return (
    <group {...props}>
      <mesh rotation-x={isKtx ? Math.PI : 0}>
        <planeBufferGeometry args={[WIDTH, HEIGHT]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
      {framed && (
        <Frame
          width={WIDTH}
          height={HEIGHT}
          thickness={frameWidth}
          material={frameMaterial}
        />
      )}
    </group>
  );
};

export const KtxImage = (props: ImageProps) => {
  return (
    <Suspense fallback={null}>
      <UnsuspensedImage {...props} />
    </Suspense>
  );
};

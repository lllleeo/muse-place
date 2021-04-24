import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

type DepthImageProps = {
  img: string;
  depth: string;
} & JSX.IntrinsicElements["group"];

const DepthImage = (props: DepthImageProps) => {
  const { img, depth, ...restProps } = props;

  const displace = useLoader(THREE.TextureLoader, depth);
  const image = useLoader(THREE.TextureLoader, img);

  return (
    <group {...restProps}>
      <mesh>
        <planeBufferGeometry args={[2, 2, 120, 120]} />
        <meshStandardMaterial
          map={image}
          displacementMap={displace}
          displacementScale={1}
        />
      </mesh>
    </group>
  );
};

export default DepthImage;

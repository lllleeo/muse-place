import { GroupProps } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Image, Floating } from "spacesvr";
import SocialButton from "../../../../themes/components/SocialButton";

type TrackInfoProps = {
  src: string;
  title?: string;
  link?: string;
} & GroupProps;

export default function TrackInfo(props: TrackInfoProps) {
  const { title = "this track yo", src, link, ...rest } = props;

  return (
    <group {...rest}>
      <group position-x={-0.4}>
        <Floating height={0.08}>
          <Image src={src} position-z={0.055} />
          <mesh>
            <boxBufferGeometry args={[1, 1, 0.1]} />
          </mesh>
        </Floating>
      </group>
      <group position-x={0.6}>
        <Text position={[0, 0, 0]} color="black" maxWidth={0.8} fontSize={0.08}>
          {title}
        </Text>
        {link && (
          <SocialButton link={link} position={[0, -0.2, 0]} scale={0.4} />
        )}
      </group>
    </group>
  );
}

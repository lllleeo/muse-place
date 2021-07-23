import { Text } from "@react-three/drei";
import ChadLogo from "../../ChadLogo";
import { Logo } from "spacesvr";

const Credits = () => {
  return (
    <group
      name="wall"
      rotation={[0, Math.PI, 0]}
      position={[-5, 0.5, 6]}
      scale={[2, 2, 2]}
    >
      <ChadLogo position={[8, 0.4, -0.2]} scale={[0.8, 0.8, 0.8]} />
      <ChadLogo position={[4, 0.4, -0.2]} scale={[0.8, 0.8, 0.8]} />
      <ChadLogo position={[0, 0.4, -0.2]} scale={[0.8, 0.8, 0.8]} />
      <ChadLogo position={[-4, 0.4, -0.2]} scale={[0.8, 0.8, 0.8]} />
      <ChadLogo position={[-8, 0.4, -0.2]} scale={[0.8, 0.8, 0.8]} />
      <ChadLogo position={[-12, 0.4, -0.2]} scale={[0.8, 0.8, 0.8]} />
      {/* <Text scale={[3.5, 3.5, 3.5]} position={[-1.6, 0, 0]}>
        x
      </Text> */}
      {/* <Logo floating rotation={[0, Math.PI / 2, 0]} /> */}
    </group>
  );
};

export default Credits;

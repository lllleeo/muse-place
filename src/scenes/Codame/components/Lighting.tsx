import { useMemo } from "react";
import { SpotLight } from "three";

type LightingProps = {
  color?: string;
};

const Lighting = (props: JSX.IntrinsicElements["group"] & LightingProps) => {
  const spotLight3 = useMemo(() => new SpotLight(), []);
  const spotLight4 = useMemo(() => new SpotLight(), []);
  const spotLight5 = useMemo(() => new SpotLight(), []);

  const { color = "#74148c" } = props;
  const attrs = {
    penumbra: 0.8,
    intensity: 0.2,
    color: color,
  };

  const floodAttrs = {
    penumbra: 0.2,
    intensity: 0.9,
    color: "#0000ff",
  };

  return (
    <group {...props}>
      <ambientLight intensity={0.15} />
      <group position={[2, 2, -10]}>
        <primitive object={spotLight3} {...attrs} />
        <primitive object={spotLight3.target} position={[0, 0.1, 1]} />
      </group>
      <group position={[-6, 2, -10]}>
        <primitive object={spotLight4} {...attrs} />
        <primitive object={spotLight4.target} position={[0, -0.1, 1]} />
      </group>
      <group position={[-4.38, 1.5, 11.08]}>
        <primitive object={spotLight5} {...floodAttrs} />
        <group position={[1, -0.8, -4]}>
          <primitive object={spotLight5.target} />
        </group>
      </group>
    </group>
  );
};

export default Lighting;

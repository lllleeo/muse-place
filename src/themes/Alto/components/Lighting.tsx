type LightingProps = {
  color?: string;
};

const Lighting = (props: JSX.IntrinsicElements["group"] & LightingProps) => {
  const { color = "#74148c" } = props;

  return (
    <group {...props}>
      <ambientLight intensity={0.25} />
      <pointLight intensity={0.5} position={[0, 11, -5]} />
    </group>
  );
};

export default Lighting;

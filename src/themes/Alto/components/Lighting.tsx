type LightingProps = {
  color?: string;
};

const Lighting = (props: JSX.IntrinsicElements["group"] & LightingProps) => {
  const { color = "#74148c" } = props;

  return (
    <group {...props}>
      <ambientLight intensity={0.25} />
    </group>
  );
};

export default Lighting;

type LightingProps = {
  color?: string;
};

const Lighting = (props: JSX.IntrinsicElements["group"] & LightingProps) => {
  const { color = "#74148c" } = props;

  return (
    <group {...props}>
      <ambientLight intensity={0.1} />
      <pointLight position={[20, 20, 20]} intensity={0.25} color="white" />
      <pointLight position={[-20, 20, 20]} intensity={0.25} color="white" />
      <pointLight position={[20, 20, -20]} intensity={0.25} color="white" />
      <pointLight position={[-20, 20, -20]} intensity={0.25} color="white" />
    </group>
  );
};

export default Lighting;

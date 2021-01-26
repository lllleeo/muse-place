const Lighting = (props: JSX.IntrinsicElements["group"]) => {
  return (
    <group {...props}>
      <ambientLight intensity={0.75} />
    </group>
  );
};

export default Lighting;

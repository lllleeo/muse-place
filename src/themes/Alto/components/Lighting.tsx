import React from "react";

type LightingProps = {
  color?: string;
};

const Lighting = (props: JSX.IntrinsicElements["group"] & LightingProps) => {
  const { color = "#FF0000" } = props;

  return (
    <group {...props}>
      <ambientLight intensity={0.25} />
      <pointLight intensity={0.3} position={[0, 11, 0]} />
    </group>
  );
};

export default Lighting;

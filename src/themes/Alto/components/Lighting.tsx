import React from "react";

type LightingProps = {
  color?: string;
};

const Lighting = (props: JSX.IntrinsicElements["group"] & LightingProps) => {
  const { color = "#FF0000" } = props;

  return (
    <group {...props}>
      <ambientLight intensity={0.25} />
    </group>
  );
};

export default Lighting;

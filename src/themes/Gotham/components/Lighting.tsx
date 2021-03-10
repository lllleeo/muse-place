import { GroupProps } from "react-three-fiber";

const Lighting = (props: GroupProps) => {
  return (
    <group {...props}>
      <ambientLight intensity={1} />
    </group>
  );
};

export default Lighting;

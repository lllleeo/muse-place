import RightWall from "./components/RightWall";
import Credits from "./components/Credits";
import Statement from "./components/Statement";

const ChadEntrance = () => {
  return (
    <group position={[-2, -2, 65]}>
      <Statement />
      <Credits />
      <RightWall />
    </group>
  );
};

export default ChadEntrance;

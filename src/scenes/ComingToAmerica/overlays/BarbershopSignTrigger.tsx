import Trigger from "../modifiers/Trigger";
import { useEnvironment } from "spacesvr";

const BarbershopSignTrigger = () => {
  const { setPaused } = useEnvironment();

  return (
    <Trigger onClick={() => setPaused(true, "photobooth-sign-0")}>
      <mesh position={[-0.95, 0.475, -0.05]}>
        <boxBufferGeometry args={[1.45, 1.4, 0.11]} />
        <meshStandardMaterial color="#999999" transparent opacity={0} />
      </mesh>
      <mesh position={[-0.95, 0.475, -0.05]} visible={false}>
        <boxBufferGeometry args={[1.45, 1.4, 0.11]} />
      </mesh>
    </Trigger>
  );
};

export default BarbershopSignTrigger;

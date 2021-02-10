import Kiosk from "./Kiosk";

const Kiosks = () => {
  return (
    <group name="kiosks" position={[0, 0.6, -5.32]}>
      <Kiosk position-x={-1}>
        <mesh rotation-x={-Math.PI / 4} rotation-z={-Math.PI / 4}>
          <boxBufferGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </Kiosk>
      <Kiosk position-x={1}>
        <mesh position-y={0}>
          <torusKnotBufferGeometry args={[0.1, 0.05]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </Kiosk>
      <Kiosk position-x={3}>
        <mesh>
          <sphereBufferGeometry args={[0.2, 0.05]} />
          <meshStandardMaterial color="purple" />
        </mesh>
      </Kiosk>
    </group>
  );
};

export default Kiosks;

export default function Sphere() {
  return (
    <group name="sphere">
      <mesh>
        <sphereBufferGeometry args={[1, 35, 15]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}

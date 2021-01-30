const Sun = () => {
  return (
    <mesh position={[0, 50, -50]}>
      <sphereBufferGeometry attach="geometry" args={[7, 20, 20]} />
      <meshBasicMaterial attach="material" color="white" />
    </mesh>
  );
};

export default Sun;

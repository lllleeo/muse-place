import { Text } from "@react-three/drei";

const BNorth = () => {
  return (
    <group position={[-1.4, 1, 4.115]} rotation-y={Math.PI / 2}>
      <Text animations maxWidth={2} fontSize={0.075} textAlign="center">
        {`Brendan North's Digital Daydream\n
        For his genesis NFT drop, Brendan gives us his contemplative “Digital Daydream” project. He describes the series as a predictive story of the possible futures of humanity and our relationship with technology. “Humanity’s appetite for technology and luxury is insatiable,” Brendan says. “As we dive deeper into the ever-expanding virtual world, you can’t help but wonder; have we lost touch with reality, or have we discovered a better one? Is this world enough for us or do we need to be the gods of a new one that we control?" You are currently viewing this artwork in a 3D virtual space. Welcome to your Digital Daydream.`}
      </Text>
    </group>
  );
};

export default BNorth;

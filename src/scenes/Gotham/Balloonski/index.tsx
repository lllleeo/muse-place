import Gatorhead from "./models/Gatorhead";
import Ghost from "./models/Ghost";
import Moneycat from "./models/Moneycat";

const Balloonski = () => {
  return (
    <group>
      <Moneycat
        position={[-4.55, 0, 11.2]}
        rotation-y={2.34}
        scale={[4.5, 4.5, 4.5]}
        name="cat"
      />
      <Gatorhead
        position={[2.32, 0.8, 5]}
        rotation={[-0.3, -2.48, -0.13]}
        scale={[5, 5, 5]}
        name="gator"
      />
      {/*<Ghost />*/}
    </group>
  );
};

export default Balloonski;

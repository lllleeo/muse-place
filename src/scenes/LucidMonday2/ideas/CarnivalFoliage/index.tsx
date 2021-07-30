import Foliage from "./components/Foliage";
import { useAlienFoliage } from "./utils/alienFoliage";
import {
  allFloorsButBottom,
  allFloorsButTopBottom,
  bigFuckersWithSlightVariation,
  bottomFloorOnly,
  randomYRot,
  slightlyRandomButSmaller,
  slightlyRandomHeight,
  slightRandomScale,
  smallerRoots,
  topFloorOnly,
} from "./utils/placement";

export default function CarnivalFoliage() {
  const foliage = useAlienFoliage();

  return (
    <group name="foliage">
      <Foliage
        mesh={[foliage.nodes.bulb_tree_a_1, foliage.nodes.bulb_tree_a_2]}
        count={200}
        position={bottomFloorOnly}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.grass}
        count={25000}
        position={allFloorsButBottom}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fern_a}
        count={20}
        position={allFloorsButBottom}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fern_b}
        count={300}
        position={allFloorsButBottom}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={[foliage.nodes.fern_c_1, foliage.nodes.fern_c_2]}
        count={30}
        position={allFloorsButBottom}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.rock_c}
        count={60}
        position={allFloorsButBottom}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.rock_a}
        count={20}
        position={allFloorsButBottom}
        scale={slightRandomScale}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fungi_a}
        count={60}
        position={allFloorsButBottom}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fungi_b}
        count={30}
        position={allFloorsButBottom}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fungi_c}
        count={30}
        position={allFloorsButBottom}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.fungi_d}
        count={30}
        position={allFloorsButBottom}
        rotation={randomYRot}
      />
      <Foliage
        mesh={foliage.nodes.root_a}
        count={8}
        position={allFloorsButBottom}
        rotation={randomYRot}
        scale={smallerRoots}
      />
      <Foliage
        mesh={foliage.nodes.root_b}
        count={8}
        position={allFloorsButBottom}
        rotation={randomYRot}
        scale={smallerRoots}
      />
      <Foliage
        mesh={foliage.nodes.tree_a}
        count={40}
        position={allFloorsButTopBottom}
        rotation={randomYRot}
        scale={slightlyRandomButSmaller}
      />
      <Foliage
        mesh={foliage.nodes.tree_b}
        count={25}
        position={topFloorOnly}
        rotation={randomYRot}
        scale={bigFuckersWithSlightVariation}
      />
    </group>
  );
}

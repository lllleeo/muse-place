import { useFrame } from "@react-three/fiber";

/**
 * Because of modifiers/Tool that has a different renderpriority,
 * we have to manually render the scene ourselves.
 *
 * To be fixed in a future version of spacesvr.
 *
 * @constructor
 */
const Renderer = () => {
  useFrame(({ gl, scene, camera }) => gl.render(scene, camera), 100);
  return null;
};

export default Renderer;

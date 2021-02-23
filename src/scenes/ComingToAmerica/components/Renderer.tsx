import { useFrame } from "react-three-fiber";
import { useEnvironment } from "spacesvr";

/**
 * Because of modifiers/Tool that has a different renderpriority,
 * we have to manually render the scene ourselves.
 *
 * To be fixed in a future version of spacesvr.
 *
 * @constructor
 */
const Renderer = () => {
  const { overlay } = useEnvironment();

  useFrame(({ gl, scene, camera }) => {
    if (overlay !== "photobooth") {
      gl.render(scene, camera);
    }
  }, 100);
  return null;
};

export default Renderer;

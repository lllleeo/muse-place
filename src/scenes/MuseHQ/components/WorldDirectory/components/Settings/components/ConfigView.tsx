import { Config } from "../index";
import Button from "../../../../Button";
import FacePlayer from "../../../../../modifiers/FacePlayer";
import { SPHERE_RADIUS } from "../../../assets/constants";

type ConfigViewProps = {
  config: Config;
  index: number;
};

export default function ConfigView(props: ConfigViewProps) {
  const { config, index } = props;

  const SCALE = 0.9;
  const WIDTH = config.name.length * 0.5 * SCALE;
  const HEIGHT = 0.15;
  const SIDE = index < 3 ? "left" : "right";
  const POS_Y = (SIDE === "left" ? index - 1 : index - 4) * -HEIGHT;
  const POS_X =
    (SIDE === "left" ? -1 : 1) * (SPHERE_RADIUS + (WIDTH * 0.1) / 2 + 0.1);

  if (config.action) {
    return (
      <group
        name="config-view"
        position-y={POS_Y}
        position-x={POS_X}
        scale={0.9}
      >
        <FacePlayer>
          <Button onClick={config.action} width={WIDTH}>
            {config.name}
          </Button>
        </FacePlayer>
      </group>
    );
  }

  return <group name="config-view"></group>;
}

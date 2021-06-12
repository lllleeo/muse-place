import { useMemo } from "react";
import {
  RADIUS,
  SPHERE_HEIGHT,
  TABLE_HEIGHT,
  TABLE_THETA,
} from "../../assets/constants";
import { World } from "../../../../layers/basis";
import ConfigView from "./components/ConfigView";

export type Config = { name: string; action?: () => void };

type SettingsProps = {
  index: number;
  worlds?: World[];
};

export default function Settings(props: SettingsProps) {
  const { index, worlds } = props;

  const ENABLED = index >= 0;
  const THETA = -Math.PI / 2 + index * TABLE_THETA;
  const world = worlds && index >= 0 ? worlds[index] : undefined;

  const configs: Config[] = useMemo(() => {
    if (!world) return [];

    let configs: Config[] = [];

    // configs.push({
    //   name: "rename",
    //   action: () => console.log("please rename"),
    // });
    // configs.push({
    //   name: "delete",
    //   action: () => console.log("delete please"),
    // });

    if (world.rootIdea !== null && world.rootIdea !== undefined) {
      configs.push({
        name: "visit",
        action: () =>
          (window.location.href = `https://muse.place/${world.slug}`),
      });
    } else {
      configs.push({ name: "Under Construction..." });
    }

    configs.push({ name: world.name });

    return configs;
  }, [index]);

  if (!ENABLED || !world) {
    return null;
  }

  return (
    <group
      name="settings"
      position-y={TABLE_HEIGHT + SPHERE_HEIGHT}
      rotation-y={THETA}
    >
      <group position-z={RADIUS}>
        {configs.map((config, i) => (
          <ConfigView config={config} index={i} />
        ))}
      </group>
    </group>
  );
}

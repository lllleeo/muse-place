import { useProximity } from "../lib/utils/proximity";
import { useRef } from "react";
import { Group } from "three";
import LookAtPlayer from "../lib/modifiers/LookAtPlayer";
import BuilderModel from "../lib/models/Builder";
import VisualDialogue from "../../../../MuseHQ/layers/communication/visual/VisualDialogue";
import { GroupProps } from "@react-three/fiber";
import { useBuilder08Dialogue } from "./dialogue";

export default function Builder(props: GroupProps) {
  const group = useRef<Group>();

  const proximity = useProximity(group);
  const dialogue = useBuilder08Dialogue();

  const anim = proximity.idle ? "dance1" : "idle";

  return (
    <group name="builder" {...props}>
      <LookAtPlayer enabled={!proximity.idle}>
        <group ref={group}>
          <BuilderModel animation={anim} />
        </group>
        <VisualDialogue
          enabled={proximity.speaking}
          position={[0.15, 1.1, 0.25]}
          dialogue={dialogue}
        />
      </LookAtPlayer>
    </group>
  );
}

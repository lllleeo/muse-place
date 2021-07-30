import InstancedModel from "./components/InstancedModel";
import { Object3D, Vector3 } from "three";

type ImplicitFunc = (t: number, r: number) => Vector3;

type NatureProps = {
  shape: ImplicitFunc;
};

const WEED_URL =
  "https://d27rt3a60hh1lx.cloudfront.net/models/WeedPlant-1620877818/weed_plant.glb.gz";
const KIOSKS_URL = [
  "https://d27rt3a60hh1lx.cloudfront.net/models/kiosk1-1627604590/kiosk1.glb.gz",
  "https://d27rt3a60hh1lx.cloudfront.net/models/kiosk2-1627604660/kiosk2.glb.gz",
  "https://d27rt3a60hh1lx.cloudfront.net/models/kiosk3-1627604751/kiosk3.glb.gz",
];

type Piece = {
  model: string;
  clustering: ImplicitFunc;
  transform: Object3D;
};

export default function Kiosks(props: NatureProps) {
  const { shape } = props;

  const pinkObj = new Object3D();
  // pinkObj.scale.multiplyScalar(0.0175);
  pinkObj.position.y = 0;
  // pinkObj.rotation.x = Math.PI / 2;
  pinkObj.updateMatrix();

  const pieces: Piece[] = [
    {
      model: KIOSKS_URL[0],
      clustering: shape,
      transform: pinkObj,
    },
    {
      model: KIOSKS_URL[1],
      clustering: shape,
      transform: pinkObj,
    },
    {
      model: KIOSKS_URL[2],
      clustering: shape,
      transform: pinkObj,
    },
  ];

  return (
    <group name="nature">
      {pieces.map((piece, i) => (
        <InstancedModel
          key={piece.model}
          model={piece.model}
          count={2}
          generation={piece.clustering}
          transform={piece.transform}
          index={i}
        />
      ))}
    </group>
  );
}
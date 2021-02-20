import { Object3D } from "three";

// transforms that need to be applied to all instances
const initialObject = () => {
  const SCALE = 0.35;
  const obj = new Object3D();
  obj.scale.set(SCALE, SCALE, SCALE);
  obj.position.y = 0.07;
  obj.updateMatrix();
  return obj;
};

// flips building to face the other way
const flip = (obj: Object3D) => {
  obj.scale.x *= -1;
  obj.updateMatrix();
};

export const INSTANCE_DATA: (() => Object3D)[] = [
  // left of barbershop
  () => {
    const obj = initialObject();
    obj.position.set(-6.15, 0, -10.19);
    return obj;
  },
  //left of left of barbershop, facing barbershop
  () => {
    const obj = initialObject();
    obj.rotation.y = Math.PI / 2;
    obj.position.set(-19, 0, -9.42);
    return obj;
  },
  // end of the street on the left
  () => {
    const obj = initialObject();
    flip(obj);
    obj.rotation.y = Math.PI / 2;
    obj.position.set(-19, 0, -0.1);
    return obj;
  },
];

import * as THREE from "three";
import { useFrame, useLoader, useThree } from "react-three-fiber";
import {
  ShaderMaterial,
  InstancedMesh,
  PlaneBufferGeometry,
  Raycaster,
  Vector3,
} from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import { grassFrag, grassUniforms, grassVert } from "./shaders/grass";
import SimplexNoise from "simplex-noise";

const COUNT = 8000;
const MIN_RADIUS = 10;
const MAX_RADIUS = 35;

const useGrassMat = (): ShaderMaterial => {
  const grassTex = useLoader(
    THREE.TextureLoader,
    "https://d27rt3a60hh1lx.cloudfront.net/content/alto/grass.png"
  );

  useFrame(({ clock }) => {
    if (mat) {
      mat.uniforms["globalTime"].value = clock.getElapsedTime();
    }
  });

  const mat = useMemo(() => {
    return new ShaderMaterial({
      uniforms: grassUniforms(grassTex),
      vertexShader: grassVert,
      fragmentShader: grassFrag,
    });
  }, []);

  mat.side = THREE.DoubleSide;

  return mat;
};

const Grass = () => {
  const { scene } = useThree();
  const grassMat = useGrassMat();
  const mesh = useRef<InstancedMesh>();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const geo = useMemo(() => new PlaneBufferGeometry(0.5, 0.5), []);
  const [counter, setCounter] = useState(1);
  const simplex = useMemo(() => new SimplexNoise(), []);

  useEffect(() => {
    const terrain = scene.getObjectByName("terrain");

    if (!terrain || !mesh.current) {
      setTimeout(() => setCounter(counter + 1), 200);
      return;
    }
    const raycaster = new Raycaster();

    for (let i = 0; i < COUNT; i++) {
      // generate position
      const radius = Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS;
      let theta = Math.random() * Math.PI * 2;

      // between PI_2  +- 0.1 don't spawn
      if (theta > Math.PI / 2 - 0.1 && theta <= Math.PI / 2) {
        theta = Math.PI / 2 - 0.1 - 0.1 * Math.pow(Math.random(), 4);
      } else if (theta < Math.PI / 2 + 0.1 && theta >= Math.PI / 2) {
        theta = Math.PI / 2 + 0.1 + 0.1 * Math.pow(Math.random(), 4);
      }

      // convert to cartesian
      const x = radius * Math.cos(theta);
      const z = radius * Math.sin(theta);

      // raycast straight down (generation)
      raycaster.ray.origin.set(x, 40, z);
      raycaster.ray.lookAt(new Vector3(x, -40, z));
      const intersects = raycaster.intersectObject(terrain, false);

      if (intersects.length <= 0) {
        continue;
      }

      // get y and normal (generation)
      const p = intersects[0].point;
      const y = p.y - 0.2;
      const n = intersects[0].face?.normal.clone() || new Vector3();
      n.transformDirection(terrain.matrixWorld);

      // add randomness
      const scaleY = 1 + 0.5 * simplex.noise3D(x, y, z);
      const scaleX = 1 + 0.2 + Math.random();

      // with coordinates, generate
      const index = i * 2;
      dummy.scale.set(scaleX, scaleY, 1);
      dummy.rotation.x = -n.x;
      dummy.rotation.z = -n.z;
      dummy.rotation.y = Math.random() * Math.PI * 2;
      dummy.position.set(x, y + 0.25, z);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(index, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [mesh, grassMat, counter]);

  return (
    <group>
      <instancedMesh ref={mesh} args={[geo, grassMat, COUNT]} />
    </group>
  );
};

export default Grass;

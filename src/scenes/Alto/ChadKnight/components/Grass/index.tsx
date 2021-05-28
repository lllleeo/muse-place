import * as THREE from "three";
import { GroupProps, useFrame, useLoader, useThree } from "@react-three/fiber";
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
import cache1 from "./cache/cache1";
import cache2 from "./cache/cache2";
import { useLimiter } from "spacesvr";
import { useSeason } from "../../contexts/Seasons";
import { useSpring } from "react-spring/three";
import { Winter, Spring, Summer, Fall } from "../constants/seasonColors";

const COUNT = 10000;

const useGrassMat = (): ShaderMaterial => {
  const grassTex = useLoader(
    THREE.TextureLoader,
    "https://d27rt3a60hh1lx.cloudfront.net/content/alto/grass.png"
  );

  const { activeSeason } = useSeason();

  const { r, g, b } = useSpring({
    r:
      activeSeason === "Winter"
        ? Winter.grass.r
        : activeSeason === "Summer"
        ? Summer.grass.r
        : activeSeason === "Spring"
        ? Spring.grass.r
        : Fall.grass.r,
    g:
      activeSeason === "Winter"
        ? Winter.grass.g
        : activeSeason === "Summer"
        ? Summer.grass.g
        : activeSeason === "Spring"
        ? Spring.grass.g
        : Fall.grass.g,
    b:
      activeSeason === "Winter"
        ? Winter.grass.b
        : activeSeason === "Summer"
        ? Summer.grass.b
        : activeSeason === "Spring"
        ? Spring.grass.b
        : Fall.grass.b,
    config: {
      mass: 5,
    },
  });

  const limiter = useLimiter(30);
  useFrame(({ clock }) => {
    if (!mat || !limiter.isReady(clock)) return;

    mat.uniforms["globalTime"].value = clock.getElapsedTime();

    mat.uniforms["color"].value.set(r.get(), g.get(), b.get());
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

type GrassProps = {
  altCache?: boolean;
  minRadius?: number;
  maxRadius?: number;
} & GroupProps;

const Grass = (props: GrassProps) => {
  const {
    altCache = false,
    minRadius = 10,
    maxRadius = 35,
    ...restProps
  } = props;
  const { scene } = useThree();
  const grassMat = useGrassMat();
  const mesh = useRef<InstancedMesh>();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const geo = useMemo(() => new PlaneBufferGeometry(0.5, 0.5), []);
  const [counter, setCounter] = useState(1);
  const simplex = useMemo(() => new SimplexNoise(), []);

  useEffect(() => {
    const terrain = scene.getObjectByName("terrain");
    const generate = false; // set to true and refresh to get a new cached version generated
    const cache = [];
    const parsedCache = JSON.parse(altCache ? cache2 : cache1);

    if (!terrain || !mesh.current) {
      setTimeout(() => setCounter(counter + 1), 200);
      return;
    }
    const raycaster = new Raycaster();

    for (let i = 0; i < COUNT; i++) {
      let x, y, z, nx, nz;

      if (generate) {
        // generate position
        const radius = Math.random() * (maxRadius - minRadius) + minRadius;
        let theta = Math.random() * Math.PI * 2;

        // between PI_2  +- 0.1 don't spawn
        if (!altCache && theta > Math.PI / 2 - 0.1 && theta <= Math.PI / 2) {
          theta = Math.PI / 2 - 0.1 - 0.1 * Math.pow(Math.random(), 4);
        } else if (
          !altCache &&
          theta < Math.PI / 2 + 0.1 &&
          theta >= Math.PI / 2
        ) {
          theta = Math.PI / 2 + 0.1 + 0.1 * Math.pow(Math.random(), 4);
        }

        // convert to cartesian
        x = radius * Math.cos(theta);
        z = radius * Math.sin(theta);

        // raycast straight down (generation)
        raycaster.ray.origin.set(x, 10, z);
        raycaster.ray.lookAt(new Vector3(x, 0, z));
        const intersects = raycaster.intersectObject(terrain, false);

        if (intersects.length <= 0) {
          continue;
        }

        // get y and normal (generation)
        const p = intersects[0].point;
        y = p.y - (altCache ? 0 : 0.2);
        const n = intersects[0].face?.normal.clone() || new Vector3();
        n.transformDirection(terrain.matrixWorld);

        nx = n.x;
        nz = n.z;

        const modX = Math.floor((x / maxRadius) * 100);
        const modY = Math.floor((y / 10) * 100);
        const modZ = Math.floor((z / maxRadius) * 100);
        const modNX = Math.floor(n.x * 10);
        const modNZ = Math.floor(n.z * 10);

        cache.push(modX);
        cache.push(modY);
        cache.push(modZ);
        cache.push(modNX);
        cache.push(modNZ);
      } else {
        x = (parsedCache[i * 5] / 100) * maxRadius;
        y = (parsedCache[i * 5 + 1] / 100) * minRadius + 0.1;
        z = (parsedCache[i * 5 + 2] / 100) * maxRadius;
        nx = parsedCache[i * 5 + 3] / minRadius;
        nz = parsedCache[i * 5 + 4] / minRadius;
      }

      // add randomness
      const scaleY = 1 + 0.7 * simplex.noise3D(x, y, z);
      const scaleX = 1 + 0.2 + Math.random();

      // with coordinates, generate
      dummy.clear();
      dummy.scale.set(scaleX, scaleY, 1);
      dummy.rotation.x = -nx;
      dummy.rotation.z = -nz;
      dummy.rotation.y = Math.random() * Math.PI * 2;
      dummy.position.set(x, y + 0.25, z);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }

    if (generate) console.log(cache.toString());
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [mesh, grassMat, counter]);

  return (
    <group {...restProps}>
      <instancedMesh ref={mesh} args={[geo, grassMat, COUNT]} />
    </group>
  );
};

export default Grass;

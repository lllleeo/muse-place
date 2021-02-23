import { ReactNode, useLayoutEffect, useMemo, useRef } from "react";
import { Interactable, useLimiter } from "spacesvr";
import { Group, Material, Mesh } from "three";
import { uniforms, frag, vert } from "./shaders/trigger";
import { useFrame } from "react-three-fiber";
import { useSpring } from "react-spring";
import { getSpringValues } from "../../utils/spring";

type Props = {
  children: ReactNode[];
  onClick?: () => void;
};

const Trigger = (props: Props) => {
  const { children, onClick } = props;

  const group = useRef<Group>();
  const matRef = useRef<Material>();
  const seed = useMemo(() => Math.floor(Math.random() * 1000000) / 1000000, []);

  const limiter = useLimiter(30);
  const [spring, setSpring] = useSpring(() => ({
    g: [0],
  }));

  useLayoutEffect(() => {
    if (!group.current || !(group.current?.children[0] as Mesh).material) {
      return;
    }

    const mesh = group.current?.children[0] as Mesh;
    const material = (mesh.material as Material).clone();

    material.onBeforeCompile = function (shader) {
      shader.uniforms.time = { value: 0 };
      shader.uniforms.glow = { value: 0 };
      shader.uniforms.dist = { value: 0 };
      shader.uniforms.seed = { value: seed };

      shader.vertexShader = uniforms + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace(
        "#include <begin_vertex>",
        vert
      );

      shader.fragmentShader = uniforms + shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <dithering_fragment>",
        frag
      );

      material.userData.shader = shader;
    };

    matRef.current = material;
    mesh.material = material;
  }, [frag]);

  useFrame(({ clock, camera }) => {
    if (!group.current || !limiter.isReady(clock)) {
      return;
    }

    if (matRef?.current?.userData?.shader?.uniforms?.time) {
      const [g] = getSpringValues(spring);

      matRef.current.userData.shader.uniforms.time.value = clock.getElapsedTime();
      matRef.current.userData.shader.uniforms.glow.value = g;
    }
  });

  if (!children || !children.length || children.length !== 2) {
    return <>{children}</>;
  }

  return (
    <>
      <group ref={group}>{children[0]}</group>
      <Interactable
        onClick={onClick}
        onHover={() => setSpring({ g: [1] })}
        onUnHover={() => setSpring({ g: [0] })}
      >
        {children[1]}
      </Interactable>
    </>
  );
};

export default Trigger;

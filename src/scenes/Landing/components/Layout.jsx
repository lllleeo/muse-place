import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { useAspect } from "@react-three/drei";
import { isMobile } from "react-device-detect";
import Website from "./Website";
import { Box, Flex } from "react-three-flex";
import Title from "./Title";
import BackGrid from "./Backgrid";

const state = {
  top: 0,
  pages: 4,
};

const Layout = () => {
  const group = useRef();
  const { size } = useThree();
  const [vpWidth] = useAspect("cover", size.width, size.height);
  const vec = new THREE.Vector3();

  useFrame(() =>
    group.current.position.lerp(vec.set(-vpWidth / 2, state.top + 8, -10), 0.1)
  );

  return (
    <group ref={group} position={[0, 0, 0]}>
      <Flex
        mainAxis="x"
        crossAxis="y"
        flexWrap="wrap"
        justify="center"
        alignItems="center"
        flexDirection="row"
        size={[vpWidth, 0, 0]}
        wrap="wrap"
        centerAnchor
      >
        <Title
          size={1}
          marginBottom={2}
          marginTop={0}
          paddingTop={0}
          text="muse"
        />
        <Title
          size={isMobile ? 0.4 : 0.5}
          marginBottom={2}
          marginTop={2}
          text="This is a 3D website"
        />
        <Title
          size={isMobile ? 0.23 : 0.5}
          marginBottom={2}
          marginTop={2}
          text="Transform your website into a story"
        />
        <Title
          size={isMobile ? 0.23 : 0.5}
          marginBottom={2}
          marginTop={2}
          text="We build 3D websites in a matter of minutes"
        />
        <Box centerAnchor margin={4}>
          <Website image={"chad.png"} url={"https://www.spaces.gallery/chad"} />
        </Box>
        <Box centerAnchor margin={4}>
          <Website
            image={"kiraPlace.png"}
            url={"https://www.muse.place/kirax23"}
          />
        </Box>
        <Box centerAnchor margin={4}>
          <Website image={"muse.png"} url={"https://www.muse.place/muse"} />
        </Box>
        <Title
          size={isMobile ? 0.4 : 0.5}
          marginBottom={2}
          marginTop={2}
          text="Want a 3D website?"
        />
        <Title
          size={isMobile ? 0.24 : 0.5}
          url={"https://musevr.typeform.com/to/QwGYwJH2"}
          marginBottom={2}
          marginTop={2}
          text="Click here to signup for our waitlist"
        />
        <Box centerAnchor marginTop={1} flexBasis={"100%"}>
          <BackGrid />
        </Box>
      </Flex>
    </group>
  );
};

export default Layout;

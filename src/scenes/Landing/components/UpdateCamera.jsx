import React from "react";
import { useFrame } from "@react-three/fiber";
import { isMobile } from "react-device-detect";

const UpdateCamera = () => {
  useFrame(({ camera }) => {
    if (isMobile) {
      camera.position.y = window.scrollY / -40;
    } else {
      camera.position.y = window.scrollY / -50;
    }
  });
  return null;
};

export default UpdateCamera;

import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-three-fiber";
import Lottie from "react-lottie";
import arrowData from "./assets/arrow.json";
import lookData from "./assets/look_around.json";
import moveData from "./assets/move_around.json";
import styled from "@emotion/styled";
import { isMobile } from "react-device-detect";
import { useEnvironment } from "spacesvr";
import { Html } from "@react-three/drei";

const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  color: white;
  background-color: #0000007f;
  text-align: center;
  opacity: 0;
  transition: opacity 0.15s linear;

  pointer-events: ${(props) => (props.visible ? "all" : "none")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  z-index: 101;
`;

const ArrowContainer = styled.div`
  position: fixed;
  transform: rotate(90deg);
  right: 0;
  bottom: 0;
  margin-right: 25%;
  margin-bottom: 10%;
`;

const MobileOnboarding = () => {
  const [step, setStep] = useState(-1);
  const { paused, setPaused, containerRef } = useEnvironment();

  useEffect(() => {
    const onboarding = localStorage.getItem("muse-onboarding");

    if (isMobile && onboarding !== "done" && step === -1) {
      setStep(0);
      setPaused(false);
    }

    if (step === 2) {
      localStorage.setItem("muse-onboarding", "done");
    }
  }, [step]);

  const moveOptions = {
    loop: true,
    autoPlay: true,
    animationData: moveData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lookOptions = {
    loop: true,
    autoPlay: true,
    animationData: lookData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const arrowOptions = {
    loop: true,
    autoPlay: true,
    animationData: arrowData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const onClick = useCallback(() => setStep(step + 1), [step]);

  if (!isMobile || paused || !containerRef.current) {
    return <></>;
  }

  return (
    <Html>
      {createPortal(
        <Container onClick={onClick} visible={step >= 0 && step <= 1}>
          {step == 0 && (
            <>
              <Lottie options={lookOptions} height={"50%"} width={"50%"} />
              <p>DRAG SCREEN TO LOOK AROUND</p>
            </>
          )}
          {step == 1 && (
            <>
              <Lottie options={moveOptions} height={"50%"} width={"50%"} />
              <p>DRAG JOYSTICK TO MOVE AROUND</p>
              <ArrowContainer>
                <Lottie options={arrowOptions} />
              </ArrowContainer>
            </>
          )}
          <p>Tap to Continue</p>
        </Container>,
        containerRef.current
      )}
    </Html>
  );
};

export default MobileOnboarding;

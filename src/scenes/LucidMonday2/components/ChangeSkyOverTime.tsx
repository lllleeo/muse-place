//usage: import ChangeSkyOverTime from "../../../themes/components/ChangeSkyOverTime"
import React, { useEffect, useState } from "react";
import { Sky, Text } from "@react-three/drei";

type ChangeSkyProps = {
  duration: number;
};

export default function ChangeSkyOverTime(props: ChangeSkyProps) {
  const { duration, ...rest } = props;

  // dayPeriodInMinutes: a day lasts dayPeriodInMinutes minutes (will be passed in)
  const dayPeriodInMinutes = duration;
  // refreshPeriod: how often we refresh (in MS)
  const refreshPeriod = (dayPeriodInMinutes / 60) * 60;
  // d: a new Date() object
  let d = new Date();
  // normalizedMinutes: make the time to fit into the dayPeriodInMinutes by normalizing it to every dayPeriodInMinutes minutes
  //      ex: dayPeriodInMinutes = 10 means we want every minute to be a number between 0 (will always be 0) and 10
  let normalizedMinutes = d.getMinutes() % dayPeriodInMinutes;
  // realTime: each time has a unique realTime, ex: 3 minutes and 30 seconds is 3.5
  let realTime = normalizedMinutes + d.getSeconds() / 60;
  // timeScaledToSunPosY: fyi, realTime / dayPeriodInMinutes gives a number between 0 and 1 and is mapped to sine so it can oscillate
  let timeScaledToSunPosY = Math.sin((realTime / dayPeriodInMinutes) * Math.PI);
  // timeScaledToRConstant: getting a number between 0 and 1 and mapping it out to a number between 0 and 10 which is the Rayleigh Constant
  let timeScaledToRConstant = timeScaledToSunPosY * 10;
  // State setters:
  const [rConstant, setRConstant] = useState(timeScaledToRConstant);
  const [sunPosY, setSunPosY] = useState(timeScaledToSunPosY);

  useEffect(() => {
    const interval = setInterval(() => {
      d = new Date();
      normalizedMinutes = d.getMinutes() % dayPeriodInMinutes;
      realTime = normalizedMinutes + d.getSeconds() / 60;
      timeScaledToSunPosY = Math.sin((realTime / dayPeriodInMinutes) * Math.PI);
      timeScaledToRConstant = timeScaledToSunPosY * 10;
      setRConstant(timeScaledToRConstant);
      setSunPosY(timeScaledToSunPosY);
    }, refreshPeriod);
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
  return (
    <group>
      <Sky
        turbidity={10}
        rayleigh={rConstant}
        mieCoefficient={0.1}
        mieDirectionalG={1}
        sunPosition={[1, sunPosY, 1]}
      />
    </group>
  );
}

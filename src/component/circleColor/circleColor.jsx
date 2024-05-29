import { CircleDot } from "./circleColor.styled";
import { useState, useEffect } from "react";

const CircleColor = () => {
  const red_timer = 4000;
  const yellow_timer = 5000;
  const green_timer = 3000;
  const [lightColor, setLightColor] = useState("green");
  useEffect(() => {
    let timer;
    switch (lightColor) {
      case "green":
        // setTimeout(() => setLightColor("yellow"), green_timer);
        timer = setTimeout(() => setLightColor("yellow"), green_timer);
        console.log("green==", lightColor);
        break;
      case "yellow":
        // setTimeout(() => setLightColor("red"), yellow_timer);
        timer = setTimeout(() => setLightColor("red"), yellow_timer);
        console.log("yellow==", lightColor);
        break;
      case "red":
        // setTimeout(() => setLightColor("green"), red_timer);
        timer = setTimeout(() => setLightColor("green"), red_timer);
        console.log("red==", lightColor);
        break;
      default:
        break;
    }
    return () => clearTimeout(timer);
  }, [lightColor, setLightColor]);
  console.log("lightColor==", lightColor);
  return (
    <>
      <CircleDot lightColor={lightColor == "red" ? lightColor : "gray"} />
      <CircleDot lightColor={lightColor == "yellow" ? lightColor : "gray"} />
      <CircleDot lightColor={lightColor == "green" ? lightColor : "gray"} />
    </>
  );
};

export default CircleColor;

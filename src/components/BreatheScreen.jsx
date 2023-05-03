import React from "react";
import Svg, { Circle } from "react-native-svg";
import { useAnimatedValue, useDerivedValue } from "react-native-reanimated";

const BreathingCircle = ({ radius, color, duration }) => {
  const animation = useAnimatedBreathing(duration); // define la animación

  return (
    <Svg width={2 * radius} height={2 * radius}>
      <Circle
        cx={radius}
        cy={radius}
        r={radius}
        fill={color}
        style={{
          transform: [{ scale: animation }],
        }}
      />
    </Svg>
  );
};

const useAnimatedBreathing = (duration) => {
  const value = useAnimatedValue(1);

  const animation = useDerivedValue(() => {
    const t = new Date().getTime() % duration;
    const scale = 1 + 0.05 * Math.sin((2 * Math.PI * t) / duration);
    return scale;
  });

  return animation;
};

export default BreathingCircle;

import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Svg, Circle, G, Text, Button } from "react-native-svg";

const Breathing478 = () => {
  const [count, setCount] = useState(0);
  const duration = 8;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const inhaleDuration = 4;
  const holdDuration = 7;
  const exhaleDuration = duration - inhaleDuration - holdDuration;

  const breathDuration = inhaleDuration + exhaleDuration;

  const inhale = () => {
    const percentage = (count % breathDuration) / inhaleDuration;
    return percentage;
  };

  const hold = () => {
    const percentage =
      ((count % breathDuration) - inhaleDuration) / holdDuration;
    return Math.max(0, percentage);
  };

  const exhale = () => {
    const percentage =
      ((count % breathDuration) - inhaleDuration - holdDuration) /
      exhaleDuration;
    return Math.max(0, percentage);
  };

  const radius = 50;

  const onPressButton = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Usuario" }],
    });
  };
  return (
    <View>
      <G>
        <Circle
          cx={200}
          cy={200}
          r={radius}
          stroke="#000"
          strokeWidth={2}
          fill="red"
        />
        <Circle
          cx={200}
          cy={200}
          r={radius * inhale()}
          stroke="#00f"
          strokeWidth={2}
          fill="red"
        />
        <Circle
          cx={200}
          cy={200}
          r={radius * (inhale() + hold())}
          stroke="#0f0"
          strokeWidth={2}
          fill="red"
        />
        <Circle
          cx={200}
          cy={200}
          r={radius * (inhale() + hold() + exhale())}
          stroke="#f00"
          strokeWidth={2}
          fill="red"
        />
        <Text
          x={200}
          y={200}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={20}>
          Hola {count % duration}
        </Text>
      </G>
      <View>
        <Button title="Regresar al inicio" onPress={onPressButton}></Button>
      </View>
    </View>
  );
};

export default Breathing478;

import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle, Text } from "react-native-svg";
import theme from "../theme";
const Home = () => {
  return (
    <View style={styles.container}>
      <Svg height="100" width="250">
        <Circle cx="120" cy="50" r="50" strokeWidth="1" style={styles.circle} />
        <Text
          x="120"
          y="60"
          textAnchor="middle"
          fontWeight="bold"
          style={styles.text}>
          Ataraxia
        </Text>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 100,
  },

  circle: {
    fill: "#ddd",
  },

  text: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
    fill: theme.colors.primary,
  },
});

export default Home;

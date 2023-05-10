import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import theme from "../theme";
import Icon from "react-native-vector-icons/FontAwesome";

const HeaderUser = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola!, Andres Luna</Text>
      <Text style={styles.text}>Hoy será un gran día</Text>

      <View style={styles.circleBack}></View>
      <Icon name="user" size={90} style={styles.icon} />

      <View style={styles.circleFront}></View>

      <View style={styles.line}></View>
      <View style={styles.containerPanel}>
        <View style={styles.row}>
          <View style={styles.cell}></View>
          <View style={styles.cell}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.ligth,
    paddingTop: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
  },

  title: {
    textAlign: theme.align.center,
    fontWeight: "bold",
    color: theme.colors.primary,
    fontSize: theme.fontSizes.h1,
  },
  circleBack: {
    position: "absolute",
    top: 160,
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: "#fff",
  },

  circleFront: {
    position: "absolute",
    top: 170,
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: theme.colors.ligth,
    borderWidth: 10,
  },

  icon: {
    top: 40,
    color: theme.colors.primary,
  },
  text: {
    color: theme.colors.dark,
  },
});

export default HeaderUser;

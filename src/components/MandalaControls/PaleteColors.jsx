import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const PaleteColors = ({ seleccionarColor, active }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => seleccionarColor("#444")}
        style={active === "#444" ? styles.colorActivo : ""}>
        <View style={[styles.colorPicker, { backgroundColor: "#444" }]} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => seleccionarColor("#009e9c")}
        style={active === "#009e9c" ? styles.colorActivo : ""}>
        <View style={[styles.colorPicker, { backgroundColor: "#009e9c" }]} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => seleccionarColor("#ff2208")}
        style={active === "#ff2208" ? styles.colorActivo : ""}>
        <View style={[styles.colorPicker, { backgroundColor: "#ff2208" }]} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => seleccionarColor("#50e0d4")}
        style={active === "#50e0d4" ? styles.colorActivo : ""}>
        <View style={[styles.colorPicker, { backgroundColor: "#50e0d4" }]} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => seleccionarColor("#96cd00")}
        style={active === "#96cd00" ? styles.colorActivo : ""}>
        <View style={[styles.colorPicker, { backgroundColor: "#96cd00" }]} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => seleccionarColor("#c8102e")}
        style={active === "#c8102e" ? styles.colorActivo : ""}>
        <View style={[styles.colorPicker, { backgroundColor: "#c8102e" }]} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  colorPicker: {
    width: 50,
    height: 50,
    margin: 7,
  },
  footer: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  colorActivo: {
    borderColor: "#F2C1B6",
    borderWidth: 1,
  },
});

export default PaleteColors;

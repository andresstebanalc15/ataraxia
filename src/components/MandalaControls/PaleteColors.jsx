import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const PaleteColors = ({ seleccionarColor, active, colores }) => {
  return (
    <View style={styles.footer}>
      {colores.map((color, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => seleccionarColor(color.color)}
          style={active === color.color ? styles.colorActivo : ""}>
          <View
            style={[styles.colorPicker, { backgroundColor: color.color }]}
          />
        </TouchableOpacity>
      ))}
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

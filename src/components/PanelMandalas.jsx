import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PanelMandalas = () => {
  const navigation = useNavigation();

  const onPressImage = () => {
    console.log("asd");
    navigation.navigate("MandalaScreen");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diviértete, pintar trae tranquilidad </Text>
      <View style={styles.line}></View>
      <View style={styles.containerPanel}>
        <View style={styles.row}>
          <View style={[styles.cell, styles.containerImage]}>
            <TouchableOpacity onPress={onPressImage}>
              <Image
                source={require("../../assets/captura.jpg")} // Ruta de la imagen local
                style={styles.image}
              />
              <View style={styles.overlay}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.cell}></View>
          <View style={styles.cell}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
  },
  containerPanel: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    padding: 5,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: "#f1f1f2",
  },
  text: {
    textAlign: "left",
    fontWeight: "500",
    margin: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f2",
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 90,
    height: 90,
  },
  containerImage: {
    position: "relative",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(242, 242,242, 0.6)", // Color gris semi-transparente
  },
});

export default PanelMandalas;

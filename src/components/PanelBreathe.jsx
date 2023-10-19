import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PanelMandalas = () => {
  const navigation = useNavigation();

  const onPressImage = () => {
    navigation.navigate("BreatheScreen");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Respira, te sentiras mejor </Text>
      <View style={styles.line}></View>
      <View style={styles.containerPanel}>
        <View style={styles.row}>
          <View style={[styles.cell, styles.containerImage]}>
            <TouchableOpacity onPress={onPressImage}>
              <Image
                source={require("../../assets/respiracion.jpg")} // Ruta de la imagen local
                style={styles.image}
              />
              <View style={styles.overlay}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.cell}>
            <Text style={styles.proximamente}> Próximamente</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.proximamente}> Próximamente</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
  proximamente: {
    fontSize: 10,
    textAlign: "center",
    color: "#444",
  },
  image: {
    width: 90,
    height: 90,
  },
});

export default PanelMandalas;

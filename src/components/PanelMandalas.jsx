import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MandalaSelector from "./MandalaControls/MandalaSelector";

const PanelMandalas = () => {
  const navigation = useNavigation();

  const tamanio = [-20, -20, 1300, 1300];
  const [idMandalaUser, setIdMandalaUser] = useState(
    "6463040ff15393f48710b2f5"
  );
  const onPressImage = (id) => {
    navigation.navigate("MandalaScreen", { idMandalaUser: id });
  };

  useEffect(() => {
    setIdMandalaUser("6463040ff15393f48710b2f5");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diviértete, pintar trae tranquilidad </Text>
      <View style={styles.line}></View>
      <View style={styles.containerPanel}>
        <View style={styles.row}>
          <View style={[styles.cell, styles.containerImage]}>
            <TouchableOpacity onPress={() => onPressImage(idMandalaUser)}>
              <MandalaSelector
                sizeMandala={tamanio}
                idMandalaUser={idMandalaUser}
                style={styles.image}
              />
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
    zIndex: 999,
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
    zIndex: 9999,
  },
  containerImage: {
    position: "relative",
  },

  overlay: {
    height: 95,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(242, 242,242, 0.6)", // Color gris semi-transparente
  },
});

export default PanelMandalas;

import React from "react";
import { StyleSheet, ScrollView, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import theme from "../theme";
const App = () => {
  const navigation = useNavigation();

  const handleButton1Press = () => {
    navigation.navigate("Iniciar sesión");
  };

  const handleButton2Press = () => {
    navigation.navigate("Registrarme");
  };
  return (
    <View>
      <View style={styles.box1}></View>

      <ScrollView
        horizontal={true}
        style={styles.container}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        <Text style={styles.text}>
          Estoy aqui para ayudarte a reducir el estrés y evitar todo lo que trae
          como consecuencia.
        </Text>
        <Text style={styles.text}>Texto 2</Text>
        <Text style={styles.text}>Texto 3</Text>
        <Text style={styles.text}>Texto 4</Text>
        <Text style={styles.text}>Texto 5</Text>
      </ScrollView>
      <View style={styles.containerButton}>
        <Button title="Iniciar sesión" onPress={handleButton1Press} />
        <Button title="Registrarme" onPress={handleButton2Press} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    width: 300,
    textAlign: "center",
    marginTop: 50,
    color: theme.colors.secondary,
    padding: 7,
  },
  container: {
    borderColor: theme.colors.ligth,
    borderWidth: 2,
    backgroundColor: "#fff",
    height: 400,
    marginLeft: 40,
    marginRight: 40,
  },
  box1: {
    width: 350,
    height: 350,
    backgroundColor: theme.colors.ligth,
    position: "absolute", // Asegura que este cuadro se muestre sobre el otro
    margin: 20,
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 50,
    marginTop: 50,
  },
});

export default App;

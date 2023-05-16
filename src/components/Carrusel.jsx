import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import env from "../../env";

import theme from "../theme";

const App = () => {
  const apiUrl = env;
  const [phrases, setPhrases] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lógica asíncrona que deseas ejecutar
        const response = await fetch(apiUrl + "/phrase");
        const data = await response.json();
        setPhrases(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
        {phrases.map((item, index) => (
          <View style={styles.containerText} key={index}>
            <Text style={styles.text}>{item.phrase}</Text>
            <Text style={styles.text}>{item.author}</Text>
          </View>
        ))}
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
    marginTop: 50,
    color: theme.colors.secondary,
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
  containerText: {
    padding: 10,
  },
});

export default App;

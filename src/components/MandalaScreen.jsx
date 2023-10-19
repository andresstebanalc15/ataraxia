import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import PaleteColors from "./MandalaControls/PaleteColors";
import MandalaSelector from "./MandalaControls/MandalaSelector";

import env from "../../env";
import { useDatosSesion } from "../context/DatosSesionProvider";

const MandalaScreen = () => {
  const apiUrl = env;
  const { id } = useDatosSesion();
  const navigation = useNavigation();

  const [pallette, setPallette] = useState([]);
  const route = useRoute();
  const idMandalaUser = route.params?.idMandalaUser;

  useEffect(() => {
    const datos = {
      _id: idMandalaUser,
    };
    const fetchData = async () => {
      try {
        // Lógica asíncrona que deseas ejecutar
        const response = await fetch(apiUrl + "/mandala", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        });

        const data = await response.json();

        setPallette(data.palette);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [active, setActive] = useState("");

  const onPressButton = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Usuario" }],
    });
  };

  // const numberOfFigures = 30;
  // const angle = (2 * Math.PI) / numberOfFigures;
  // const figureRadius = 15;
  // const radius = 100;
  // const flowerSize = 5;

  // function calculatePosition(index) {
  //   const x = radius * Math.cos(angle * index) + radius;
  //   const y = radius * Math.sin(angle * index) + radius;
  //   return `${x},${y}`;
  // }

  // function hacerMandala() {
  //   let objeto = [];

  //   for (let i = 0; i < numberOfFigures; i++) {
  //     const position = calculatePosition(i);
  //     const path = `M${position}m-${figureRadius},0a${figureRadius},${figureRadius} 0 1,0 ${
  //       figureRadius * 2
  //     },0a${figureRadius},${figureRadius} 0 1,0 -${figureRadius * 2},0`;
  //     let nuevoObjeto = {
  //       id: i + "c",
  //       color: "#fff",
  //       d: path,
  //     };
  //     objeto.push(nuevoObjeto);
  //   }

  //   for (let i = 0; i < numberOfFigures; i++) {
  //     const position = calculatePosition(i);
  //     const path = `M${position}m-${flowerSize / 2},-${
  //       flowerSize / 2
  //     }a${flowerSize},${flowerSize} 0 1,1 ${flowerSize},0a${flowerSize},${flowerSize} 0 1,1 -${flowerSize},0a${flowerSize},${flowerSize} 0 1,1 ${flowerSize},0a${flowerSize},${flowerSize} 0 1,1 -${flowerSize},0a${flowerSize},${flowerSize} 0 1,1 ${flowerSize},0a${flowerSize},${flowerSize} 0 1,1 -${flowerSize},0Z`;

  //     let nuevoObjeto = {
  //       id: i + "t",
  //       color: "#fff",
  //       d: path,
  //     };
  //     objeto.push(nuevoObjeto);
  //   }

  //   return objeto;
  // }
  const tamanio = [-20, 0, 310, 150];
  // Estado para el color seleccionado
  const seleccionarColor = (color) => {
    setActive(color);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <MandalaSelector
          active={active}
          sizeMandala={tamanio}
          idMandalaUser={idMandalaUser}></MandalaSelector>
      </View>
      <View>
        <PaleteColors
          colores={pallette}
          seleccionarColor={seleccionarColor}
          active={active}></PaleteColors>
      </View>
      <View style={styles.content}>
        <Button title="Regresar al inicio" onPress={onPressButton}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  colorPickerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    height: 600,
    marginTop: 40,
    padding: 1,
  },
});

export default MandalaScreen;

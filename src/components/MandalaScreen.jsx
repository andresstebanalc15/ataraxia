import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { Svg, Path } from "react-native-svg";
import PaleteColors from "./MandalaControls/PaleteColors";
import env from "../../env";

const MandalaScreen = () => {
  const apiUrl = env;
  const [idMandala, setIdMandala] = useState("6463040ff15393f48710b2f5");
  const [colores, setColor] = useState([]);
  const [pallette, setPallette] = useState([]);
  useEffect(() => {
    const datos = {
      _id: idMandala,
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

        setColor(data.data);
        setPallette(data.palette);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [active, setActive] = useState("");

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

  // Estado para el color seleccionado
  const seleccionarColor = (color) => {
    setActive(color);
  };

  const colorear = (id, color) => {
    const actualizacionDeColores = colores.map((item) => {
      if (item.id === id) {
        return { ...item, color };
      } else {
        return item;
      }
    });
    setColor(actualizacionDeColores);
    console.log(id);

    guardarProgreso(
      "634444ff72a42c0834dca48b",
      idMandala,
      actualizacionDeColores
    );
  };

  const guardarProgreso = async (id_user, id_mandala, data) => {
    const datos = {
      id_user,
      id_mandala,
      data,
    };
    try {
      // Lógica asíncrona que deseas ejecutar
      const response = await fetch(apiUrl + "/userMandala", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      const respuesta = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Svg width="500" height="500" viewBox="-20 0 310 150">
          {colores.map((color) => (
            <Path
              key={color.id}
              d={color.d}
              fill={color.color}
              stroke="#000"
              onPress={() => colorear(color.id, active)}
            />
          ))}
        </Svg>
      </View>
      <View>
        <PaleteColors
          colores={pallette}
          seleccionarColor={seleccionarColor}
          active={active}></PaleteColors>
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

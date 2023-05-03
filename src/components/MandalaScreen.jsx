import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { Svg, Path } from "react-native-svg";
import PaleteColors from "./MandalaControls/PaleteColors";

const MandalaScreen = () => {
  const [active, setActive] = useState("");

  const numberOfFigures = 30;
  const angle = (2 * Math.PI) / numberOfFigures;
  const figureRadius = 15;
  const radius = 100;
  const flowerSize = 5;

  function calculatePosition(index) {
    const x = radius * Math.cos(angle * index) + radius;
    const y = radius * Math.sin(angle * index) + radius;
    return `${x},${y}`;
  }

  function hacerMandala() {
    let objeto = [];

    for (let i = 0; i < numberOfFigures; i++) {
      const position = calculatePosition(i);
      const path = `M${position}m-${figureRadius},0a${figureRadius},${figureRadius} 0 1,0 ${
        figureRadius * 2
      },0a${figureRadius},${figureRadius} 0 1,0 -${figureRadius * 2},0`;
      let nuevoObjeto = {
        id: i + "c",
        color: "#fff",
        d: path,
      };
      objeto.push(nuevoObjeto);
    }

    for (let i = 0; i < numberOfFigures; i++) {
      const position = calculatePosition(i);
      const path = `M${position}m-${flowerSize / 2},-${
        flowerSize / 2
      }a${flowerSize},${flowerSize} 0 1,1 ${flowerSize},0a${flowerSize},${flowerSize} 0 1,1 -${flowerSize},0a${flowerSize},${flowerSize} 0 1,1 ${flowerSize},0a${flowerSize},${flowerSize} 0 1,1 -${flowerSize},0a${flowerSize},${flowerSize} 0 1,1 ${flowerSize},0a${flowerSize},${flowerSize} 0 1,1 -${flowerSize},0Z`;

      let nuevoObjeto = {
        id: i + "t",
        color: "#fff",
        d: path,
      };
      objeto.push(nuevoObjeto);
    }

    return objeto;
  }

  const mandala = hacerMandala();
  const [colores, setColor] = useState(mandala); // Estado para el color seleccionado

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

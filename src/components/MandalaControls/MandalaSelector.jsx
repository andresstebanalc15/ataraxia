import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { Svg, Path } from "react-native-svg";
import env from "../../../env";
import { useDatosSesion } from "../../context/DatosSesionProvider";

const MandalaSelector = ({ active, sizeMandala, idMandalaUser }) => {
  const apiUrl = env;
  const { id } = useDatosSesion();
  const [idUsuario, setIdUsuario] = useState(id);
  const [colores, setColor] = useState([]);
  const [pallette, setPallette] = useState([]);

  useEffect(() => {
    const datos = {
      id_user: idUsuario,
      id_mandala: idMandalaUser,
    };
    const fetchData = async () => {
      try {
        // Lógica asíncrona que deseas ejecutar
        const response = await fetch(apiUrl + "/userMandala/userMandala", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        });

        const data = await response.json();
        if (data) {
          setColor(data.data);
          setPallette(data.palette);
        } else {
          const datos = {
            _id: idMandalaUser,
          };
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
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const colorear = (id, color) => {
    const actualizacionDeColores = colores.map((item) => {
      if (item.id === id) {
        return { ...item, color };
      } else {
        return item;
      }
    });
    setColor(actualizacionDeColores);
    guardarProgreso(idUsuario, idMandalaUser, actualizacionDeColores);
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

      await response.json();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      <Svg width="500" height="500" viewBox={sizeMandala}>
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
  );
};
export default MandalaSelector;

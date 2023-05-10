import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";

const BreathingExercise = () => {
  const [instruction, setInstruction] = useState("");
  const [breathCount, setBreathCount] = useState(0);
  const circleScale = useRef(new Animated.Value(1)).current;

  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  let s = 0;
  let m = 0;
  let h = 0;
  const startCronometro = () => {
    setInterval(() => {
      s++;

      // Incrementar los segundos
      setSegundos((prevSegundos) => prevSegundos + 1);

      // Verificar si los segundos alcanzan 60 y ajustar los minutos y segundos correspondientes
      if (s === 59) {
        s = 0;
        setSegundos(0);
        setMinutos((prevMinutos) => prevMinutos + 1);
      }

      // Verificar si los minutos alcanzan 60 y ajustar las horas, minutos y segundos correspondientes
      if (m === 59) {
        m = 0;
        setMinutos(0);
        setHoras((prevHoras) => prevHoras + 1);
      }
    }, 1000); // Actualizar cada 1 segundo

    // Guardar el ID del intervalo para poder limpiarlo posteriormente
  };

  function modificarTextos() {
    setInstruction("Inhala profundamente");

    setTimeout(() => {
      setInstruction("Retén la respiración.");
    }, 4000);

    setTimeout(() => {
      setInstruction("Exhala suavemente");
    }, 12000);
  }

  const startBreathing = () => {
    // Configura la duración del temporizador aquí, por ejemplo: 2 minutos.

    modificarTextos();
    setInterval(() => {
      modificarTextos();
    }, 19000);

    startCronometro();

    // Configuración de la animación del círculo.
    Animated.loop(
      Animated.sequence([
        Animated.timing(circleScale, {
          toValue: 1.2,
          duration: 4000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(circleScale, {
          toValue: 0.8,
          duration: 7000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(circleScale, {
          toValue: 1,
          duration: 8000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start(({ finished }) => {
      if (finished) {
        setBreathCount(breathCount + 1);
        if (breathCount < 7) {
          startBreathing();
        } else {
          setBreathCount(0);
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, { transform: [{ scale: circleScale }] }]}
      />
      <Text style={styles.timer}>{instruction}</Text>
      <TouchableOpacity onPress={startBreathing} style={styles.button}>
        <Text style={styles.buttonText}>Inicio</Text>
      </TouchableOpacity>
      <Text>
        {horas.toString().padStart(2, "0")} :{" "}
        {minutos.toString().padStart(2, "0")} :{" "}
        {segundos.toString().padStart(2, "0")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: "blue",
  },
  timer: {
    fontSize: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default BreathingExercise;

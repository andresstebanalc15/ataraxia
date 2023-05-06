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
  const [timer, setTimer] = useState(null);
  const [breathCount, setBreathCount] = useState(0);
  const circleScale = useRef(new Animated.Value(1)).current;

  const startBreathing = () => {
    // Configura la duración del temporizador aquí, por ejemplo: 2 minutos.
    setTimer(120000);

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
          toValue: 1,
          duration: 7000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(circleScale, {
          toValue: 1.2,
          duration: 8000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(circleScale, {
          toValue: 1,
          duration: 7000,
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
      <Text style={styles.timer}>{timer}</Text>
      <TouchableOpacity onPress={startBreathing} style={styles.button}>
        <Text style={styles.buttonText}>Inicio</Text>
      </TouchableOpacity>
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
    borderRadius: 75,
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

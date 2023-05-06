import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import theme from "../theme";

const Home = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleSubmit = () => {
    if (password === confirmPassword) {
      console.log("Contraseñas coinciden");
    } else {
      console.log("Las contraseñas no coinciden");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        variant="outline"
        size="md"
        placeholder="Primer nombre"
        w="100%"
        style={styles.input}
      />
      <TextInput
        variant="outline"
        size="md"
        placeholder="Segundo nombre"
        w="100%"
        style={styles.input}
      />
      <TextInput
        variant="outline"
        size="md"
        placeholder="Primer apellido"
        w="100%"
        style={styles.input}
      />
      <TextInput
        variant="outline"
        size="md"
        placeholder="Segundo apellido"
        w="100%"
        style={styles.input}
      />
      <TextInput
        variant="outline"
        size="md"
        placeholder="Teléfono"
        w="100%"
        style={styles.input}
      />
      <TextInput
        variant="outline"
        size="md"
        placeholder="Correo "
        w="100%"
        style={styles.input}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        secureTextEntry
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
      />
      <TouchableOpacity style={styles.buttonOptions} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registarme</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.textInicioSesion}> ¿Ya tienes una cuenta? </Text>
        <TouchableOpacity>
          <Text style={[styles.enlace, styles.textInicioSesion]}>
            Iniciar sesion
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    width: 350,
    height: 40,
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 10,
  },
  buttonOptions: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  textInicioSesion: {
    textAlign: "center",
  },
  enlace: {
    fontWeight: "bold",
  },
});

export default Home;

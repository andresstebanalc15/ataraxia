import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import theme from "../theme";

const LoginForm = () => {
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
      <View>
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
      </View>

      <TouchableOpacity style={styles.buttonOptions} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.textInicioSesion}>
          {" "}
          ¿Aun no tienes cuenta? Únete a nosotros y regístrate hoy para
          aprovechar todos nuestros los beneficios de ataraxia.
        </Text>
        <TouchableOpacity>
          <Text style={[styles.enlace, styles.textInicioSesion]}>
            Registarme
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

export default LoginForm;

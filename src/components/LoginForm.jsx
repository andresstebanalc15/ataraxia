import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import theme from "../theme";
import env from "../../env";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigation = useNavigation();

  const apiUrl = env;
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(apiUrl + "/users/login", {
        email,
        password,
      });
      // console.log(response.data);

      // Aquí puedes manejar la respuesta del servidor
      // y realizar acciones adicionales según sea necesario
      // Ejemplo de respuesta exitosa
      if (response.status === 200) {
        navigation.navigate("Usuario");
      } else {
        // Ejemplo de respuesta de error
        Alert.alert("Error", response.data.message);
      }
    } catch (error) {
      // Manejo de errores de la solicitud
      Alert.alert("Error", "Ocurrió un error al iniciar sesión");
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
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={togglePasswordVisibility}>
          <MaterialIcons
            name={showPassword ? "visibility-off" : "visibility"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
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

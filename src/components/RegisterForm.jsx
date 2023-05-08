import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import theme from "../theme";
import axios from "axios";
import env from "../../env";

const Home = () => {
  const apiUrl = env;

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [lastname1, setLastName1] = useState("");
  const [lastname2, setLastName2] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleName1Change = (text) => {
    setName1(text);
  };
  const handleName2Change = (text) => {
    setName2(text);
  };
  const handleLastName1Change = (text) => {
    setLastName1(text);
  };
  const handleLastName2Change = (text) => {
    setLastName2(text);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleSubmit = async () => {
    // if (password === confirmPassword) {
    //   console.log("Contraseñas coinciden");
    // } else {
    //   console.log("Las contraseñas no coinciden");
    // }

    try {
      const response = await axios.post(apiUrl + "/users", {
        name1: name1,
        name2: name2,
        lastname1: lastname1,
        lastname2: lastname2,
        email: email,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
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
        value={name1}
        onChangeText={handleName1Change}
      />
      <TextInput
        variant="outline"
        size="md"
        placeholder="Segundo nombre"
        w="100%"
        style={styles.input}
        value={name2}
        onChangeText={handleName2Change}
      />
      <TextInput
        variant="outline"
        size="md"
        placeholder="Primer apellido"
        w="100%"
        style={styles.input}
        value={lastname1}
        onChangeText={handleLastName1Change}
      />
      <TextInput
        variant="outline"
        size="md"
        placeholder="Segundo apellido"
        w="100%"
        style={styles.input}
        value={lastname2}
        onChangeText={handleLastName2Change}
      />

      <TextInput
        variant="outline"
        size="md"
        placeholder="Correo "
        w="100%"
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
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

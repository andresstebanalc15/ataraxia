import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <TextInput
        variant="outline"
        size="md"
        placeholder="Primer Nombre"
        w="100%"
        style={styles.input}
      />
      <TextInput
        variant="outline"
        size="md"
        placeholder="Segundo Nombre"
        w="100%"
        style={styles.input}
      />
      <TextInput
        variant="outline"
        size="md"
        placeholder="Primer Apellido"
        w="100%"
        style={styles.input}
      />
      <TextInput
        variant="outline"
        size="md"
        placeholder="Segundo Apellido"
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
      <Button
        variant="solid"
        colorScheme="lightBlue"
        size="md"
        title="Registrarme"
        style={styles.buttonOptions}
      />
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
    marginTop: 10,
  },
});

export default Home;

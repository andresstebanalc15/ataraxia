import React from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <View style={styles.color}>
      <Logo />
      <RegisterForm />
    </View>
  );
};

const styles = StyleSheet.create({
  color: {
    backgroundColor: "#eff0f1",
  },
});

export default Register;

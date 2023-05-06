import React from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <View style={styles.color}>
      <View>
        <Logo />
        <LoginForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  color: {
    backgroundColor: "#eff0f1",
    height: 850,
    paddingTop: 100,
  },
});

export default Login;

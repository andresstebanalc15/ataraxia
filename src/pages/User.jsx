import React from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import PanelMandalas from "../components/PanelMandalas";

const Register = () => {
  return (
    <View style={styles.color}>
      <PanelMandalas />
    </View>
  );
};

const styles = StyleSheet.create({
  color: {
    backgroundColor: "#eff0f1",
    flexGrow: 1,
  },
});

export default Register;

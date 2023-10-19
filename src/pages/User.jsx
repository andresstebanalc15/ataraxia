import React from "react";
import { View, StyleSheet } from "react-native";
import PanelMandalas from "../components/PanelMandalas";
import PanelBreathe from "../components/PanelBreathe";

import HeaderUser from "../components/HeaderUser";

const Register = () => {
  return (
    <View style={styles.color}>
      <HeaderUser />
      <PanelBreathe />

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

import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";
const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.h1,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecundary: {
    color: theme.colors.secondary,
  },
  colorLight: {
    color: theme.colors.ligth,
  },
  colorDark: {
    color: theme.colors.dark,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  sizeLogo: {
    fontSize: theme.fontSizes.logo,
  },
});

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyles = [
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecundary,
    color === "dark" && styles.dark,
    color === "ligth" && styles.ligth,
    fontWeight === "bold" && styles.bold,
    fontSize === "logo" && styles.sizeLogo,
  ];
  return <Text style={textStyles}>{children}</Text>;
}

import React from "react";
import { StyleSheet } from "react-native";

import Main from "./src/components/Main.jsx";
import MandalaScreen from "./src/components/MandalaScreen.jsx";
import BreatheScreen from "./src/components/BreatheScreen.jsx";
import Register from "./src/pages/Register.jsx";
import Home from "./src/pages/Home.jsx";
import Login from "./src/pages/Login.jsx";
import User from "./src/pages/User.jsx";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import theme from "./src/theme.js";
import { DatosSesionProvider } from "./src/context/DatosSesionProvider.js";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <DatosSesionProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTintColor: "#fff", // Cambia el color del título
          }}>
          <Stack.Screen
            name="Inicio"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registrarme"
            component={Register}
            options={{
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
            }}
          />
          <Stack.Screen
            name="Iniciar sesión"
            component={Login}
            options={{
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
            }}
          />
          <Stack.Screen
            name="Usuario"
            component={User}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MandalaScreen"
            component={MandalaScreen}
            options={{
              headerStyle: {
                backgroundColor: theme.colors.dark,
              },
            }}
          />
          <Stack.Screen
            name="BreatheScreen"
            component={BreatheScreen}
            options={{
              headerStyle: {
                backgroundColor: theme.colors.ligth,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DatosSesionProvider>
  );
};

export default App;

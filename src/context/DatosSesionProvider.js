import React, { createContext, useContext, useState } from "react";

const DatosSesionContext = createContext();

export const DatosSesionProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const iniciarSesion = (id, nombre, apellido) => {
    setId(id);
    setNombre(nombre);
    setApellido(apellido);
    console.log("Datos de sesión guardados correctamente.");
  };

  const cerrarSesion = () => {
    setId("");
    setNombre("");
    setApellido("");
    console.log("Datos de sesión eliminador correctamente.");
  };

  return (
    <DatosSesionContext.Provider
      value={{ id, nombre, apellido, iniciarSesion, cerrarSesion }}>
      {children}
    </DatosSesionContext.Provider>
  );
};

export const useDatosSesion = () => useContext(DatosSesionContext);

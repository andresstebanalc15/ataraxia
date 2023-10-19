import React from "react";
import MyComponent from "../src/components/Logo"; // Importa el componente que deseas probar
import { render } from "@testing-library/react-native";

describe("MyComponent", () => {
  it("debe renderizar correctamente", () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText("Texto de prueba")).toBeTruthy();
  });
});

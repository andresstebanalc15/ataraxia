import React from "react";
import { render } from "@testing-library/react-native";
import Logo from "../src/components/Logo";

describe("Logo", () => {
  it("El componente Logo ha renderizado correctamente", () => {
    const { getByTestId } = render(<Logo />);
    const logoText = getByTestId("logoText");
    expect(logoText).toBeDefined();
  });
});

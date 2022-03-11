import { screen } from "@testing-library/react";

import { default as RegForm } from ".";

describe("RegForm", () => {
  xtest("it renders the form", () => {
    renderWithProviders(<RegForm />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
});

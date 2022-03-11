import { screen } from "@testing-library/react";

import { default as LoginForm } from ".";

describe("LoginForm", () => {
  test("it renders the form", () => {
    renderWithProviders(<LoginForm />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
});

// Need to test

// After login it redirects to secret page

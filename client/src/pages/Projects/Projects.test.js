import { screen } from "@testing-library/react";

import { default as Projects } from ".";

describe("Projects page", () => {
  test("it renders coming soon message", () => {
    renderWithProviders(<Projects />);
    const message = screen.getByText(/coming soon/i);
    expect(message).toBeInTheDocument();
  });
});

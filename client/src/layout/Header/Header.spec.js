import { screen } from "@testing-library/react";

import Header from "../layout";

describe("Header", () => {
  test("it renders only pub routes with no user", () => {
    renderWithProviders(<Header />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
    expect(screen.getByText(/Login/)).toBeInTheDocument();
    expect(screen.getByText(/Logout/)).not.toBeInTheDocument();
  });
});

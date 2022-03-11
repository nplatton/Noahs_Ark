import { screen } from "@testing-library/react";

import { default as Header } from ".";

describe("Header", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("it renders only pub routes with no user", () => {
    renderWithProviders(<Header />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.queryByText(/logout/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/secret/i)).not.toBeInTheDocument();
  });

  // The below test is more of an integration test
  // Ideally a unit test would involve mocking out useAuthContext

  test("renders secret page when user is logged in", () => {
    const testToken =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5vYWgiLCJpYXQiOjE2NDY5OTU1NzAsImV4cCI6MTY0Njk5NjU3MH0.LoZ_RS5xtGsy5jaAgNFphm5dsvgvBA5HNAJ6XOlbUCo";
    localStorage.setItem("token", testToken);
    renderWithProviders(<Header />);
    const links = screen.getAllByRole("link");
    expect(screen.queryByText(/login/i)).not.toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
    expect(screen.getByText(/secret/i)).toBeInTheDocument();
  });
});

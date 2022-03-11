import { screen } from "@testing-library/react";

import { default as Home } from ".";

describe("Home", () => {
  beforeEach(() => {
    renderWithProviders(<Home />);
  });

  test("it renders the photo", () => {
    const photo = screen.getByAltText(/photo of noah/i);
    expect(photo).toBeInTheDocument();
  });

  test("it renders the linkdin link", () => {
    const links = screen.getAllByRole("link");
    expect(links[1]).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/noah-platton-4568bb1a2/"
    );
  });

  test("it renders the github link", () => {
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "https://github.com/nplatton");
  });

  test("it renders the intro message", () => {
    const message = screen.getByText(/hi, i'm noah/i);
    expect(message).toBeInTheDocument();
  });

  test("it renders the technologies", () => {
    const technologies = screen.getByTestId("tech-region");
    expect(technologies).toBeInTheDocument();
    expect(technologies.childNodes).toHaveLength(6);
  });
});

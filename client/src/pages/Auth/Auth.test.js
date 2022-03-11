import { screen } from "@testing-library/react";

import { default as Auth } from ".";

describe("Auth page", () => {
  test("it renders the swipe element", () => {
    renderWithProviders(<Auth />);
    const swiper = screen.getByRole("region");
    expect(swiper).toBeInTheDocument();
  });
});

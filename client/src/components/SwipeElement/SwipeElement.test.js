import { screen } from "@testing-library/react";

import { default as SwipeElement } from ".";

describe("SwipeElement", () => {
  beforeEach(() => {
    renderWithProviders(<SwipeElement />);
  });

  describe("rendering", () => {
    test("it renders the swipe element", () => {
      const swiper = screen.getByRole("region");
      expect(swiper).toBeInTheDocument();
    });

    test("it renders the login form", () => {
      const loginForm = screen.getByRole("form", { id: "login-form" });
      expect(loginForm).toBeInTheDocument();
    });

    xtest("it renders the registration form", () => {
      const regForm = screen.getByRole("form", { id: "reg-form" });
      expect(regForm).toBeInTheDocument();
    });
  });

  describe("swipe functionality", () => {
    xtest("it swipes to the right", () => {
      const swiper = screen.getByRole("region");
      // const swiper = screen.getByTestId("swipe-elt");
      console.log(fireEvent.mouseDown(swiper, { clientX: 400 }));
      fireEvent.mouseUp(swiper, { clientX: 350 });
      expect(swiper).toBe(1);
    });
  });
});

import { screen } from "@testing-library/react";

import { SwipeElement } from "../components";

describe("SwipeElement", () => {
  beforeEach(() => {
    render(<SwipeElement />);
  });

  test("it swipes to the right", () => {
    const swiper = screen.getByRole("region", { id: "outer-container" });
    // const swiper = screen.getByTestId("swipe-elt");
    fireEvent.mouseDown(swiper, { clientX: 400 });
    fireEvent.mouseUp(swiper, { clientX: 350 });
    expect(swiper).toBe(1);
  });
});

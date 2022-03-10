import { screen } from "@testing-library/react";

import { default as SwipeElement } from ".";

describe("SwipeElement", () => {
  beforeEach(() => {
    render(<SwipeElement />);
  });

  test("it swipes to the right", () => {
    const swiper = screen.getByRole("region");
    // const swiper = screen.getByTestId("swipe-elt");
    console.log(fireEvent.mouseDown(swiper, { clientX: 400 }));
    fireEvent.mouseUp(swiper, { clientX: 350 });
    expect(swiper).toBe(1);
  });
});

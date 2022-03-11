import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { default as NotFound } from ".";

describe("NotFound", () => {
  test("it renders a message on 404", () => {
    render(<NotFound />, { wrapper: MemoryRouter });
    let message = screen.getByRole("alert");
    expect(message.textContent).toMatch(/we can't find the page/i);
  });
});

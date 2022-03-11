import { screen } from "@testing-library/react";

import { default as About } from ".";

describe("About page", () => {
  beforeEach(() => {
    renderWithProviders(<About />);
  });

  describe("rendering", () => {
    test("it renders 4 sections", () => {
      const sections = screen.getAllByRole("article");
      expect(sections).toHaveLength(4);
    });

    test("each section has a photo", () => {
      const photos = screen.getAllByRole("img");
      expect(photos).toHaveLength(4);
    });

    test("each section has a heading", () => {
      const headings = screen.getAllByRole("heading");
      expect(headings).toHaveLength(4);
    });
  });

  describe("functionality", () => {
    xtest("it scrolls down on mouseLeave", () => {});

    xtest("it scrolls up on mouseLeave", () => {});

    xtest("it scrolls down on 'down arrow' key press", () => {});

    xtest("it scrolls up on 'down arrow' key press", () => {});
  });
});

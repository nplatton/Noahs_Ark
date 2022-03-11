import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/Auth";

// const jwt_decode = require("jwt-decode");
// jest.mock("jwt-decode", () => ({ username: "tester" }));

const UnAuthedProviders = ({ children }) => {
  return (
    <MemoryRouter>
      <AuthProvider>{children}</AuthProvider>
    </MemoryRouter>
  );
};

const renderWithProviders = (ui, options) => {
  render(ui, { wrapper: UnAuthedProviders, ...options });
};

global.React = React;
global.renderWithProviders = renderWithProviders;
global.userEvent = userEvent;

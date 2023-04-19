import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();

test("Router test", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );

  const links = screen.getAllByTestId("link");

  fireEvent.click(links[1]);
  expect(screen.queryByTestId("about-page")).toBeInTheDocument();

  fireEvent.click(links[0]);
  expect(screen.queryByTestId("home-page")).toBeInTheDocument();

  fireEvent.click(links[2]);
  expect(screen.queryByTestId("form-page")).toBeInTheDocument();
});

test("Error page test", () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/usgdhsf"]}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.queryByTestId("not-found-page")).toBeInTheDocument();
});

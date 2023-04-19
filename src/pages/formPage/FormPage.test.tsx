import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store";

import { FormPage } from "./FormPage";

const store = setupStore();

describe("FormPage", () => {
  test("render form element", () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );

    const form = screen.getByTestId("form");

    expect(form).toBeInTheDocument();
  });
});

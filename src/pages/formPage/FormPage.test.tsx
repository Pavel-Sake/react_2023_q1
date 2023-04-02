import { screen, render } from "@testing-library/react";

import { FormPage } from "./FormPage";

describe("FormPage", () => {
  test("render form element", () => {
    render(<FormPage />);

    const form = screen.getByTestId("form");

    expect(form).toBeInTheDocument();
  });
});

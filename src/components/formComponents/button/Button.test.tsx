import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

const value = "click";

describe("text Button element", () => {
  test("render element in document", () => {
    render(<Button name={value} />);

    const button = screen.getByTestId("button");

    expect(button).toBeInTheDocument();
  });

  test("render value in element", () => {
    render(<Button name={value} />);

    const button = screen.getByTestId("button");

    expect(button).toHaveTextContent("click");
  });
});

import { render, screen } from "@testing-library/react";

import { SearchInput } from "./SearchInput";
import React from "react";

const placeholder = "name";
// const textInput = "name";
// const mockedSetTod = jest.fn();

describe("Test App", () => {
  test("should render input", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<SearchInput placeholder={placeholder} inputRef={ref} />);

    const input = screen.getByTestId("searchInput");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder");
  });
});

import { render, screen } from "@testing-library/react";

import { SearchInput } from "./SearchInput";

const placeholder = "name";
const textInput = "name";
const mockedSetTod = jest.fn();

describe("Test App", () => {
  // test("should render input", () => {
  //   render(
  //     <SearchInput
  //       placeholder={placeholder}
  //       textInput={textInput}
  //       handleInputSearch={mockedSetTod}
  //     />
  //   );
  //
  //   const input = screen.getByTestId("searchInput");
  //
  //   expect(input).toBeInTheDocument();
  //   expect(input).toHaveValue(textInput);
  // });
});

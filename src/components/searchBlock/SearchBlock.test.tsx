import { SearchBlock } from "./SearchBlock";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store";

import React from "react";

const store = setupStore();

describe("test SearchBlock", () => {
  test("should render component", () => {
    render(
      <Provider store={store}>
        <SearchBlock />
      </Provider>
    );

    const searchInput = screen.getByTestId("searchInput");
    const SearchButton = screen.getByTestId("SearchButton");

    expect(searchInput).toBeInTheDocument();
    expect(SearchButton).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";

import { Home } from "./Home";

describe("Test Homepage", () => {
  test("is lest render", () => {
    render(<Home />);
    //
    // const list = screen.getByTestId("product-list");
    // expect(list).toBeInTheDocument();
  });
  test("number of elements in page", () => {
    render(<Home />);
    // const productsLength = products.length;
    //
    // const items = screen.getAllByTestId("product-item");
    //
    // expect(items.length).toBe(productsLength);
  });
});

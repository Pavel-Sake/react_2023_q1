import React from "react";
import { render, screen } from "@testing-library/react";

import { ItemProduct } from "./ItemProduct";

const itemProduct = {
  name: "Daisy Jones and The Six",
  author: "Taylor Jenkins Reid",
  price: 50,
  currency: "zł",
  rating: 4,
  src: "/img/DaisyJones.jpg",
  id: 11,
};

test("is render element", () => {
  // render(<ItemProduct />);
  //
  // const item = screen.getByTestId("product-item");
  //
  // expect(item).toBeInTheDocument();
});

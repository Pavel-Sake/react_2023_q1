import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { ItemProduct } from "./ItemProduct";

import { ICharacterCard } from "../../interfaces/ICharacterCard";

const propsData: ICharacterCard = {
  id: 1,
  name: "name",
  status: "",
  species: "",
  gender: "",
  type: "",
  origin: {
    name: "",
    url: "",
  },
  location: {
    name: "",
    url: "",
  },
  image: "",
  episode: [],
  url: "",
  created: "",
};

describe("test ItemProduct", () => {
  test("render in document", () => {
    render(<ItemProduct data={propsData} />);

    const itemProductDefault = screen.getByTestId("itemProductDefault");

    expect(itemProductDefault).toBeInTheDocument();
  });

  test("should render ItemProductExtended when itemProductDefault is clicked", async () => {
    render(<ItemProduct data={propsData} />);

    const itemProductDefault = screen.getByTestId("itemProductDefault");
    fireEvent.click(itemProductDefault);

    const itemProductExtended = screen.getByTestId("itemProductExtended");

    expect(itemProductExtended).toBeInTheDocument();
  });

  test("should not render ItemProductExtended when overlay is clicked", async () => {
    render(<ItemProduct data={propsData} />);

    const itemProductDefault = screen.getByTestId("itemProductDefault");
    fireEvent.click(itemProductDefault);
    const itemProductExtended = screen.getByTestId("itemProductExtended");

    fireEvent.click(itemProductExtended);

    const itemProductExtended1 = screen.queryByTestId("itemProductExtended");

    expect(itemProductExtended1).toBeNull();
  });

  test("should not render ItemProductExtended when button close is clicked", async () => {
    render(<ItemProduct data={propsData} />);

    const itemProductDefault = screen.getByTestId("itemProductDefault");
    fireEvent.click(itemProductDefault);
    // const itemProductExtended = screen.getByTestId("itemProductExtended");
    const buttonClose = screen.getByTestId("button-close");

    fireEvent.click(buttonClose);

    const itemProductExtended1 = screen.queryByTestId("itemProductExtended");

    expect(itemProductExtended1).toBeNull();
  });
});

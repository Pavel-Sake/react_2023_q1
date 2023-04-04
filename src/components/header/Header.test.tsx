import React from "react";
import { render, screen } from "@testing-library/react";

import { Header, getPageLabel } from "./Header";
import { paths } from "../../data/paths";
import { MemoryRouter } from "react-router-dom";

const mockedSetTod = jest.fn();

describe("Test Header page", () => {
  test("render", () => {
    render(
      <MemoryRouter>
        <Header paths={paths} handleSetCharactersCard={mockedSetTod}/>
      </MemoryRouter>
    );
    const navElement = screen.queryByTestId("nav");

    expect(navElement).toBeInTheDocument();
  });
  test("test getPageLabel", () => {
    expect(getPageLabel("/")).toBe("Home");
    expect(getPageLabel("/about")).toBe("About");
    expect(getPageLabel("/notFound")).toBe("Not found");
  });
});

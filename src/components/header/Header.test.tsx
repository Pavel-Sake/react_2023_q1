import React from "react";
import { render, screen } from "@testing-library/react";

import { Header, getPageLabel } from "./Header";
import { paths } from "../../data/paths";
import { MemoryRouter } from "react-router-dom";

const mockedSetTod = jest.fn();

describe("Test Header page", () => {
  // test("render element in the document", () => {
  //   render(
  //     <MemoryRouter>
  //       <Header paths={paths} handleSetSearchName={mockedSetTod} />
  //     </MemoryRouter>
  //   );
  //   const navElement = screen.queryByTestId("nav");
  //   const pageLabel = screen.getByTestId("page-label");
  //   const searchBlock = screen.getByTestId("searchBlock");
  //
  //   expect(navElement).toBeInTheDocument();
  //   expect(pageLabel).toBeInTheDocument();
  //   expect(searchBlock).toBeInTheDocument();
  // });
  // test("test getPageLabel", () => {
  //   expect(getPageLabel("/")).toBe("Home");
  //   expect(getPageLabel("/about")).toBe("About");
  //   expect(getPageLabel("/form")).toBe("Form");
  //   expect(getPageLabel("/notFound")).toBe("Not found");
  // });
});

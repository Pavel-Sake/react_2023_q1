import { screen, render, fireEvent } from "@testing-library/react";
import { Form } from "./Form";

const mockedSetTod = jest.fn();
const initialFormSate = {
  name: "",
  surname: "",
  birthday: "",
  country: "Poland",
  gender: "",
  imgFile: null,
  consent: false,
};

describe("form test", () => {
  // test("should render the basic fields", () => {
  //   render(
  //     <Form changeStateAddCard={mockedSetTod} dataForm={initialFormSate} />
  //   );
  //
  //   expect(screen.getByRole("textbox", { name: "Name" })).toBeInTheDocument();
  //   expect(
  //     screen.getByRole("textbox", { name: "Surname" })
  //   ).toBeInTheDocument();
  //   expect(screen.getByTestId("intupDate")).toBeInTheDocument();
  //   expect(screen.getByRole("combobox", { name: "" })).toBeInTheDocument();
  //   expect(screen.getByRole("radio", { name: "male" })).toBeInTheDocument();
  //   expect(screen.getByRole("radio", { name: "female" })).toBeInTheDocument();
  //   expect(screen.getByRole("button", { name: "click" })).toBeInTheDocument();
  // });

  // test("should input show correct text", () => {
  //   render(
  //     <Form changeStateAddCard={mockedSetTod} dataForm={initialFormSate} />
  //   );
  //
  //   const inputTextName: HTMLInputElement = screen.getByRole("textbox", {
  //     name: "Name",
  //   });
  //
  //   fireEvent.change(inputTextName, { target: { value: "paave" } });
  //
  //   expect(inputTextName.value).toBe("paave");
  // });
});

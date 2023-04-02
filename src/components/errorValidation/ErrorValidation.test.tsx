import { render, screen } from "@testing-library/react";
import { ErrorValidation } from "./ErrorValidation";

describe("is ErrorValidation in document", () => {
  test("element in document not valid", () => {
    const text = "value is not valid";
    const error = {};

    const keyWord = "name";

    render(<ErrorValidation text={text} errors={error} keyWord={keyWord} />);

    //const errorElementTrue = screen.getByTestId("error-true")
    const errorElementFalse = screen.getByTestId("error-false");

    expect(errorElementFalse).toBeInTheDocument();
    expect(errorElementFalse).toHaveTextContent("");
  });

  test("element in document valid", () => {
    const text = "value is not valid";
    const error = {
      name: {},
    };

    const keyWord = "name";

    render(<ErrorValidation text={text} errors={error} keyWord={keyWord} />);

    const errorElementTrue = screen.getByTestId("error-true");

    expect(errorElementTrue).toBeInTheDocument();
    expect(errorElementTrue).toHaveTextContent(text);
  });
});

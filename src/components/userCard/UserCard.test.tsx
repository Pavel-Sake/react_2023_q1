import { screen, render } from "@testing-library/react";

import { UserCard } from "./UserCard";

describe("test UserCard", () => {
  test("render text based on props", () => {
    const initialFormSate = {
      name: "Pavel",
      surname: "Sak",
      birthday: "11.12.20203",
      country: "Poland",
      gender: "male",
      imgFile: null,
      consent: false,
    };

    render(<UserCard card={initialFormSate} />);

    expect(screen.getByText(initialFormSate.name)).toHaveTextContent("Pavel");
    expect(screen.getByText(initialFormSate.surname)).toHaveTextContent("Sak");
    expect(screen.getByText(initialFormSate.country)).toHaveTextContent(
      "Poland"
    );
    expect(screen.getByText(initialFormSate.gender)).toHaveTextContent("male");
  });
});

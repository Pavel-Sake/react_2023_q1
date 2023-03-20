import React from "react";
import { Input } from "../input/Input";
import { Select } from "../select/Select";
import { Radio } from "../radio/Radio";
import { Button } from "../button/Button";
import { pageFormData } from "../../../data/pageFormData";

type MyProps = {
  message: string;
};

type MyState = {
  state: string;
};
class Form extends React.Component<MyProps, MyState> {
  render() {
    const { name, surname, date, countries, gender, consent } = pageFormData;
    return (
      <form method="POST">
        <fieldset>
          <legend>checkbox</legend>
          <Input
            type={name.type}
            label={name.label}
            name={name.name}
            value={name.value}
          />
          <Input
            type={surname.type}
            label={surname.label}
            name={surname.name}
            value={surname.value}
          />
          <hr />
          <Input
            type={date.type}
            label={date.label}
            name={date.name}
            value={date.value}
          />
          <hr />
          <Select countries={countries.option} />
          <hr />
          <Radio gender={gender} />
          <hr />
          <input type="file" accept="image/jpeg, image/png, image/jpg" />
          <Input
            type={consent.type}
            label={consent.label}
            name={consent.name}
            value={consent.value}
          />
          <Button name="click" />
        </fieldset>
      </form>
    );
  }
}

export { Form };

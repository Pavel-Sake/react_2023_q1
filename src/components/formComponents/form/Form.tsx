import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Input } from "../input/Input";
import { Select } from "../select/Select";
import { Radio } from "../radio/Radio";
import { Button } from "../button/Button";
import { pageFormData } from "../../../data/pageFormData";

import styles from "./styles.module.css";

type MyProps = {
  message: string;
};

// later extract into separate block
type MyState = {
  name: string | undefined;
  surname: string | undefined;
  birthday: string | undefined;
  country: string | undefined;
};

const cardData: MyState = {
  name: "",
  surname: "",
  birthday: "",
  country: "",
};

class Form extends React.Component<MyProps | Readonly<MyProps>, MyState> {
  constructor(props: MyProps) {
    super(props);

    // this.state = {
    //   name: "",
    // };
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  changeState(text: string | undefined, key: string): void {
    cardData[key as keyof typeof cardData] = text;
  }
  render() {
    const { name, surname, date, countries, gender, consent } = pageFormData;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Card</legend>
          <Input
            type={name.type}
            label={name.label}
            name={name.name}
            value={name.value}
            changeState={this.changeState}
          />
          <Input
            type={surname.type}
            label={surname.label}
            name={surname.name}
            value={surname.value}
            changeState={this.changeState}
          />
          <hr />
          <Input
            type={date.type}
            label={date.label}
            name={date.name}
            value={date.value}
            changeState={this.changeState}
          />
          <hr />
          <Select countries={countries.option} keyWord={countries.keyWord} changeState={this.changeState}/>
          <hr />
          <Radio gender={gender} />
          <hr />
          {/*<input type="file" accept="image/jpeg, image/png, image/jpg" />*/}
          {/*<Input*/}
          {/*  type={consent.type}*/}
          {/*  label={consent.label}*/}
          {/*  name={consent.name}*/}
          {/*  value={consent.value}*/}
          {/*/>*/}
          <Button name="click" />
        </fieldset>
      </form>
    );
  }
}

export { Form };

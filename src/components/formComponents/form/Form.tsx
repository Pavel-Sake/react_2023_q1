import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Input } from "../input/Input";
import { Select } from "../select/Select";
import { Radio } from "../radio/Radio";
import { Button } from "../button/Button";
import { pageFormData } from "../../../data/pageFormData";
import { InputImg } from "../inputImg/InputImg";

import styles from "./styles.module.css";

type MyProps = {
  message: string;
};

type StrAndUnd = string | undefined;

type MyState = {
  name: StrAndUnd;
  surname: StrAndUnd;
  birthday: StrAndUnd;
  country: StrAndUnd;
  gender: StrAndUnd;
  consent: StrAndUnd;
  file: object
};

type FileData = {
  name: string;
  size: string;
  file: object
}

class Form extends React.Component<MyProps | Readonly<MyProps>, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      birthday: "",
      country: "",
      gender: "",
      consent: "false",
      file: {
        name: "",
        size: null,
        file: null
      },
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(this.state);
  };

  changeState = (value: string | undefined, key: string): void => {
    const currentObjState: any = {};
    currentObjState[key] = value;
    this.setState({ ...currentObjState });
  };

  updateStateImg = (file: object) => {
    this.setState({file: file})
  }
  render() {
    const { name, surname, birthday, countries, gender, consent } =
      pageFormData;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Card</legend>
          <Input data={name} changeState={this.changeState} />
          <Input data={surname} changeState={this.changeState} />
          <hr />
          <Input data={birthday} changeState={this.changeState} />
          <hr />
          <Select
            countries={countries.option}
            keyWord={countries.keyWord}
            changeState={this.changeState}
          />
          <hr />
          <Radio gender={gender} changeState={this.changeState} />
          <hr />
          <InputImg updateStateImg={this.updateStateImg}/>
          {/*{this.state.file ? <img src={this.state.file} /> : null}*/}
          <Input data={consent} changeState={this.changeState} />
          <Button name="click" />
        </fieldset>
      </form>
    );
  }
}

export { Form };

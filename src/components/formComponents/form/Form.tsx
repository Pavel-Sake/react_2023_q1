import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Input } from "../input/Input";
import { Select } from "../select/Select";
import { Radio } from "../radio/Radio";
import { Button } from "../button/Button";
import { pageFormData } from "../../../data/pageFormData";
import { InputImg } from "../inputImg/InputImg";
import { validation } from "../../../formValidation/validation";
import {checkCreatingCard} from "../../../formValidation/validationCreatingCard";

import styles from "./styles.module.css";

import { IStateForForm } from "../../../interfaces/IStateForForm";

type MyProps = {
  message?: string;
};

const itintialState = {
  name: "",
  surname: "",
  birthday: "",
  country: "",
  gender: "",
  consent: "false",
  file: {},
  errorData: {
    name: {
      isValid: false,
      errorText: "",
    },
    surname: {
      isValid: false,
      errorText: "",
    },
    birthday: {
      isValid: false,
      errorText: "",
    },
    country: {
      isValid: false,
      errorText: "",
    },
    gender: {
      isValid: false,
      errorText: "",
    },
    consent: {
      isValid: false,
      errorText: "",
    },
  },
  isAllFieldsValid: false,
};

class Form extends React.Component<MyProps, IStateForForm> {
  constructor(props: MyProps) {
    super(props);
    this.state = itintialState;
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorValidationData = validation(this.state);
    this.setState({ errorData: errorValidationData }, () => {
      const isAllFieldsValid = checkCreatingCard(this.state.errorData)
      this.setState({isAllFieldsValid: isAllFieldsValid})
    });
  };



  changeState = (value: string | undefined, key: string): void => {
    const currentObjState: any = {};
    currentObjState[key] = value;
    this.setState({ ...currentObjState });
  };

  updateStateImg = (file: object) => {
    this.setState({ file: file });
  };
  render() {
    const { name, surname, birthday, countries, gender, consent } =
      pageFormData;

    const { errorData } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Card</legend>
          <Input
            data={name}
            changeState={this.changeState}
            errorData={errorData.name}
          />
          <Input
            data={surname}
            changeState={this.changeState}
            errorData={errorData.surname}
          />
          <Input
            data={birthday}
            changeState={this.changeState}
            errorData={errorData.birthday}
          />
          <Select
            data={countries}
            changeState={this.changeState}
            errorData={errorData.country}
          />
          <Radio
            data={gender}
            changeState={this.changeState}
            errorData={errorData.gender}
          />
          <InputImg updateStateImg={this.updateStateImg} />
          {/*/!*{this.state.file ? <img src={this.state.file} /> : null}*!/*/}
          <Input data={consent} changeState={this.changeState}  errorData={errorData.consent} />
          <Button name="click" />
        </fieldset>
      </form>
    );
  }
}

export { Form };

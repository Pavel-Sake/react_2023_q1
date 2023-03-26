import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Input } from "../input/Input";
import { Select } from "../select/Select";
import { Radio } from "../radio/Radio";
import { Button } from "../button/Button";
import { pageFormData } from "../../../data/pageFormData";
import { InputImg } from "../inputImg/InputImg";
import { validation } from "../../../formValidation/validation";
import { checkCreatingCard } from "../../../formValidation/validationCreatingCard";

import styles from "./styles.module.css";

import { IStateForForm, IDataFromForm } from "../../../interfaces/IStateForForm";

type MyProps = {
  changeStateAddCard: (dataFromForm: IDataFromForm) => void;
};

const itintialState = {
  dataFromForm: {
    name: "",
    surname: "",
    birthday: "",
    country: "",
    gender: "",
    consent: "false",
    file: null
  },
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

    const errorValidationData = validation(this.state.dataFromForm);
    this.setState({ errorData: errorValidationData }, () => {
      const { errorData, dataFromForm } = this.state;
      const isAllFieldsValid = checkCreatingCard(errorData);
      this.setState({ isAllFieldsValid: isAllFieldsValid }); //delete later

      if (isAllFieldsValid) {
        this.props.changeStateAddCard(dataFromForm);
      }
    });
  };

  changeState = (value: string | undefined, key: string): void => {
    const { dataFromForm } = this.state;
    const currentObjState: any = {};
    currentObjState[key] = value;
    this.setState({dataFromForm: {...dataFromForm, ...currentObjState } });
  };

  updateStateImg = (file: object) => {
    const { dataFromForm } = this.state;
    this.setState({ dataFromForm: { ...dataFromForm, file: file } });
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
          <Input
            data={consent}
            changeState={this.changeState}
            errorData={errorData.consent}
          />
          <Button name="click" />
        </fieldset>
      </form>
    );
  }
}

export { Form };

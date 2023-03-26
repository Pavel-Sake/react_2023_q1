import React, { ChangeEvent, ChangeEventHandler, RefObject } from "react";
import { Input } from "../input/Input";
import { Select } from "../select/Select";
import { Radio } from "../radio/Radio";
import { Button } from "../button/Button";
import { pageFormData } from "../../../data/pageFormData";
import { InputImg } from "../inputImg/InputImg";
import { validation } from "../../../formValidation/validation";
import { checkCreatingCard } from "../../../formValidation/validationCreatingCard";

import styles from "./styles.module.css";

import {
  IStateForForm,
  IDataFromForm,
} from "../../../interfaces/IStateForForm";

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
    file: null,
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
  elements: [],
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
        // this.state.elements.forEach((item) => {
        //   if (item.current?.name === "name") {
        //     item.current.value = "";
        //   } else if (item.current?.name === "surname") {
        //     item.current.value = "";
        //   } else if (item.current?.name === "birthday") {
        //     item.current.value = "";
        //   } else if (item.current?.name === "gender") {
        //     item.current.checked = false;
        //   } else if (item.current?.name === "consent") {
        //     item.current.checked = false;
        //   }
        // });

        this.setState({});

        this.props.changeStateAddCard(dataFromForm);
      }
    });
  };

  changeState = (value: string | undefined, key: string): void => {
    const { dataFromForm } = this.state;
    const currentObjState: any = {};
    currentObjState[key] = value;
    this.setState({ dataFromForm: { ...dataFromForm, ...currentObjState } });
  };

  updateStateImg = (file: object) => {
    const { dataFromForm } = this.state;
    this.setState({ dataFromForm: { ...dataFromForm, file: file } });
  };

  addElementToState = (element: RefObject<HTMLInputElement>): void => {
    this.state.elements.push(element);
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
            addElementToState={this.addElementToState}
          />
          <Input
            data={surname}
            changeState={this.changeState}
            errorData={errorData.surname}
            addElementToState={this.addElementToState}
          />
          <Input
            data={birthday}
            changeState={this.changeState}
            errorData={errorData.birthday}
            addElementToState={this.addElementToState}
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
            addElementToState={this.addElementToState}
          />
          <InputImg updateStateImg={this.updateStateImg} />
          <Input
            data={consent}
            changeState={this.changeState}
            errorData={errorData.consent}
            addElementToState={this.addElementToState}
          />
          <Button name="click" />
        </fieldset>
      </form>
    );
  }
}

export { Form };

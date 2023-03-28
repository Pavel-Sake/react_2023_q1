import React, { ChangeEvent, ChangeEventHandler, RefObject } from "react";
import { useForm } from "react-hook-form";

import { InputText } from "../inputText/InputText";
import { Select } from "../select/Select";
import { Radio } from "../radio/Radio";
import { Button } from "../button/Button";
import { pageFormData } from "../../../data/pageFormData";
import { InputImg } from "../inputImg/InputImg";
import { validation } from "../../../formValidation/validation";
import { checkCreatingCard } from "../../../formValidation/validationCreatingCard";

import styles from "./styles.module.css";

// import {
//   IStateForForm,
//   IDataFromForm,
// } from "../../../interfaces/IStateForForm";
import { InputDate } from "../inputDate/InputDate";
import {InputCheckbox} from "../inputCheckbox/inputCheckbox";
import { IUserFormState } from "../../../interfaces/IUserFormState";


type MyProps = {
  changeStateAddCard: (dataFromForm: IUserFormState) => void;
};


function Form({ changeStateAddCard }: MyProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { name, surname, birthday, countries, gender, consent } = pageFormData;

  function handleSubmitForm(data: any) {

    changeStateAddCard(data)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Card</legend>
        <InputText data={name} register={register} errors={errors} />
        <InputText data={surname} register={register} errors={errors} />
        <InputDate data={birthday} register={register} errors={errors} />
        <Select data={countries} register={register} errors={errors} />
        <Radio data={gender} register={register} errors={errors} />
        <InputImg register={register} />
        <InputCheckbox data={consent} register={register} errors={errors} />
        <Button name="click" />
      </fieldset>
    </form>
  );
}

export { Form };

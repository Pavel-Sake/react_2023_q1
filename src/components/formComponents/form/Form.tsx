import React, { ChangeEvent, ChangeEventHandler, RefObject } from "react";
import { useForm } from "react-hook-form";

import { InputText } from "../inputText/InputText";
import { Select } from "../select/Select";
import { Radio } from "../radio/Radio";
import { Button } from "../button/Button";
import { pageFormData } from "../../../data/pageFormData";
import { InputImg } from "../inputImg/InputImg";

import styles from "./styles.module.css";

import { InputDate } from "../inputDate/InputDate";
import {InputCheckbox} from "../inputCheckbox/inputCheckbox";
import { IUserFormState } from "../../../interfaces/IUserFormState";


type MyProps = {
  changeStateAddCard: (dataFromForm: IUserFormState) => void;
  dataForm: IUserFormState;
};


function Form({ changeStateAddCard, dataForm }: MyProps) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { name, surname, birthday, countries, gender, consent } = pageFormData;

  function handleSubmitForm(data: any) {

    const arrDataForm = Object.entries(dataForm)

    arrDataForm.forEach(([key, value]) => {
      setValue(key, value)
    })

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

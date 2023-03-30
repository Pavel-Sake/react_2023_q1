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
import { InputCheckbox } from "../inputCheckbox/inputCheckbox";
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

  function uploadImage(data: any) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = reader.result!.toString();

        data.imgFile = img
        changeStateAddCard(data)
      };
      reader.readAsDataURL(data.imgFile[0]);
  }

  function handleSubmitForm(data: any) {
    const arrDataForm = Object.entries(dataForm);


    if (data.imgFile.length > 0) {
      uploadImage(data)
    } else {
      data.imgFile = null
      changeStateAddCard(data)
    }

    arrDataForm.forEach(([key, value]) => {
        setValue(key, value)
    })

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

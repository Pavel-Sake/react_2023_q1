import React, {ChangeEvent, ChangeEventHandler, RefObject, useEffect} from "react";
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
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import { cardFormSlice } from "../../../store/reducers/CardFormSlice";


const initialFormData = {
  name: "",
  surname: "",
  birthday: "",
  country: "Poland",
  gender: "",
  imgFile: null,
  consent: false,
};


function clearForm(dataForm: IUserFormState, setValue: any) {

  const arrDataForm = Object.entries(dataForm);

  arrDataForm.forEach(([key, value]) => {    // put in a separate function
    setValue(key, value);
  });
}

type MyProps = {
  showNotification: () => void
}

function Form({showNotification}: MyProps) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { name, surname, birthday, countries, gender, consent } = pageFormData;

  const dispatch = useAppDispatch();
  const { addCardForm } = cardFormSlice.actions;

   function uploadImageAndDispatch(data: any) {
    const reader = new FileReader();
    reader.onload = () => {
      const img = reader.result!.toString();

      data.imgFile = img;

      dispatch(addCardForm(data))

    };
    reader.readAsDataURL(data.imgFile[0]);
  }


  function handleSubmitForm(data: any) {

    if (data.imgFile.length > 0) {
       uploadImageAndDispatch(data);
    } else {
      data.imgFile = null;
      dispatch(addCardForm(data))
    }

    showNotification()

    clearForm(initialFormData, setValue)

  }


  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(handleSubmitForm)}
      data-testid="form"
    >
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

import React from "react";
import styles from "./stules.module.css";
import { IInput } from "../../../interfaces/IPageFormData";
import { ErrorValidation } from "../../errorValidation/ErrorValidation";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type MyProps = {
  data: IInput;
  // register: UseFormRegister<FieldValues>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

function InputText({ data, register, errors }: MyProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          placeholder={data.label}
          {...register(`${data.name}`, {
            required: "Name is invalid",
            minLength: 2,
            maxLength: 12,
            pattern: /^[A-Z][a-z]/,
          })}
        />
        {data.label}
      </label>
      <ErrorValidation
        text={`${data.label} is invalid`}
        errors={errors}
        keyWord={data.keyWord}
      />
    </div>
  );
}

export { InputText };

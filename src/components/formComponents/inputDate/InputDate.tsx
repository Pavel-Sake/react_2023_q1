import React from "react";
import styles from "../inputText/stules.module.css";
import { ErrorValidation } from "../../errorValidation/ErrorValidation";
import { IInput } from "../../../interfaces/IPageFormData";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type MyProps = {
  data: IInput;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

function InputDate({ data, register, errors }: MyProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="date"
          placeholder={data.label}
          {...register(`${data.keyWord}`, { required: true })}
        />
        {data.label}
      </label>
      <ErrorValidation
        text={`${data.label} is required`}
        errors={errors}
        keyWord={data.keyWord}
      />
    </div>
  );
}

export { InputDate };

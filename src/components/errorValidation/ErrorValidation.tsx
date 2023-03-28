import React from "react";
import styles from "./styles.module.css";
import { FieldErrors, FieldValues } from "react-hook-form";

type MyProps = {
  text: string | undefined;
  errors: FieldErrors<FieldValues>;
  keyWord: string;
};
function ErrorValidation({ text, errors, keyWord }: MyProps) {
  return (
    <>
      {errors[keyWord] ? (
        <div className={styles.textError}>{text}</div>
      ) : (
        <div className={styles.space}></div>
      )}
    </>
  );
}

export { ErrorValidation };

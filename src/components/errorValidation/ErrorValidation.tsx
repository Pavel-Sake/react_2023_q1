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
    <div>
      {errors[keyWord] ? (
        <div className={styles.textError} data-testid="error-true">
          {text}
        </div>
      ) : (
        <div className={styles.space} data-testid="error-false"></div>
      )}
    </div>
  );
}

export { ErrorValidation };

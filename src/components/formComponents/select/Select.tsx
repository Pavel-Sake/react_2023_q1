import React from "react";
import { ErrorValidation } from "../../errorValidation/ErrorValidation";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type IOption = {
  value: string;
  id: number;
};

type ISelect = {
  option: IOption[];
  keyWord: string;
};
type MyProps = {
  data: ISelect;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

function Select({ data, register, errors }: MyProps) {
  const { option, keyWord } = data;

  return (
    <div>
      <select {...register(`${keyWord}`, { required: true })}>
        {option.map((item) => {
          return (
            <option value={item.value} key={item.id}>
              {item.value}
            </option>
          );
        })}
      </select>
      <ErrorValidation
        text={`${data.keyWord} is required`}
        errors={errors}
        keyWord={data.keyWord}
      />
    </div>
  );
}

export { Select };

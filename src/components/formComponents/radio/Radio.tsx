import React from "react";
import { IInput } from "../../../interfaces/IPageFormData";
import { ErrorValidation } from "../../errorValidation/ErrorValidation";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type MyProps = {
  data: {
    items: IInput[];
    keyWord: string;
  };
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

function Radio({ data, register, errors }: MyProps) {
  return (
    <div>
      <div>
        {data.items.map((item, index) => {
          return (
            <label key={index}>
              <input
                type="radio"
                value={item.value}
                {...register(item.name, { required: true })}
              />
              {item.value}
            </label>
          );
        })}
      </div>
      <ErrorValidation
        text={`${data.keyWord} is required`}
        errors={errors}
        keyWord={data.keyWord}
      />
    </div>
  );
}

export { Radio };

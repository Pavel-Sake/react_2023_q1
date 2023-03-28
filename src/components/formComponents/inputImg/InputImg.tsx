import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type MyProps = {
  register: UseFormRegister<FieldValues>;
};

function InputImg({ register }: MyProps) {
  return (
    <input
      type="file"
      accept="image/jpeg, image/png, image/jpg"
      {...register("imgFile")}
    />
  );
}

export { InputImg };

// const file: any = e.target.files;
// this.setState({ file: URL.createObjectURL(file[0]) });

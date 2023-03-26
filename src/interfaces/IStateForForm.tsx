import { RefObject } from "react";

type StrAndUnd = string | undefined;

type DataValid = {
  isValid: boolean | null | undefined;
  errorText: string;
};

type DataError = {
  consent:
    | { isValid: boolean | null | undefined; errorText: string | undefined }
    | undefined;
  gender:
    | { isValid: boolean | null | undefined; errorText: string | undefined }
    | undefined;
  name: DataValid;
  surname: DataValid;
  birthday: DataValid;
  country: DataValid;
};
interface IDataFromForm {
  name: StrAndUnd;
  surname: StrAndUnd;
  birthday: StrAndUnd;
  country: StrAndUnd;
  gender: StrAndUnd;
  consent: StrAndUnd;
  file: object | null;
}
interface IStateForForm {
  dataFromForm: IDataFromForm;
  errorData: DataError;
  isAllFieldsValid: boolean;
  elements: RefObject<HTMLInputElement>[];
}

export type { IStateForForm, DataError, IDataFromForm };

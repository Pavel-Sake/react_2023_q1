interface IInput {
  type: string;
  label: string;
  name: string;
  value: string;
}

interface IOption {
  value: string;
  id: number;
}

interface IPageFormData {
  name: IInput;
  surname: IInput;
  date: IInput;
  countries: {
    option: IOption[];
    keyWord: string;
  };
  gender: IInput[];
  consent: IInput;
}

export type { IPageFormData, IOption, IInput };

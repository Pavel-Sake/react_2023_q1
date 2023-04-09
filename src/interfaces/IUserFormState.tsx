interface IUserFormState {
  name: string;
  surname: string;
  birthday: string;
  country: string;
  gender: string;
  imgFile: string | null;
  consent: boolean;
}

export type { IUserFormState };

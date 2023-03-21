import { IPageFormData } from "../interfaces/IPageFormData";

const pageFormData: IPageFormData = {
  name: {
    type: "text",
    label: "Name",
    name: "name",
    value: "",
  },
  surname: {
    type: "text",
    label: "Surname",
    name: "surname",
    value: "",
  },
  date: {
    type: "date",
    label: "birthday",
    name: "birthday",
    value: "",
  },
  countries: {
    option: [
      {
        value: "Choose countries",
        id: 1,
      },
      {
        value: "Poland",
        id: 2,
      },
      {
        value: "Belarus",
        id: 3,
      },
      {
        value: "Ukraine",
        id: 4,
      },
      {
        value: "Litva",
        id: 5,
      },
      {
        value: "Latvia",
        id: 6,
      },
    ],
    keyWord: "country",
  },
  gender: [
    {
      type: "radio",
      label: "male",
      name: "gender",
      value: "male",
    },
    {
      type: "radio",
      label: "female",
      name: "gender",
      value: "female",
    },
  ],
  consent: {
    type: "checkbox",
    label: "I consent to my personal data field",
    name: "checkboxNmae",
    value: "checkboxValue",
  },
};

export { pageFormData };

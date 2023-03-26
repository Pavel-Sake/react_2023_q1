import { IDataFromForm, IStateForForm } from "../interfaces/IStateForForm";

const textError = {
  name: "Fist Letter must be capital and english",
  surname: "Fist Letter must be capital and english",
  birthday: "choose your birthday",
  country: "choose your country",
  gender: "choose your gender",
  consent: "please consent your personal data",
};

const typeValidation = {
  name: "name",
  surname: "surname",
  birthday: "birthday",
  country: "country",
  gender: "gender",
  consent: "consent",
};

function isNameValid(text: string | undefined) {
  const regexp = /^[A-Z][a-z]{1,10}$/;

  if (typeof text === "string") {
    return regexp.test(text);
  }
}
function isBirthdayValid(text: string | undefined) {
  if (text) {
    return true;
  } else {
    return false;
  }
}
function isCountryValid(text: string | undefined) {
  if (text) {
    return true;
  } else {
    return false;
  }
}
function isGenderValid(text: string | undefined) {
  if (text) {
    return true;
  } else {
    return false;
  }
}
function isConsentValid(text: string | undefined) {
  if (text === "true") {
    return true;
  } else {
    return false;
  }
}

function getObjError(name: string | undefined, text: string, type: string) {
  let isValid = null;

  switch (type) {
    case "name":
      isValid = isNameValid(name);
      break;
    case "surname":
      isValid = isNameValid(name);
      break;
    case "birthday":
      isValid = isBirthdayValid(name);
      break;
    case "country":
      isValid = isCountryValid(name);
      break;
    case "gender":
      isValid = isGenderValid(name);
      break;
    case "consent":
      isValid = isConsentValid(name);
      break;
  }

  return {
    isValid: isValid,
    errorText: text,
  };
}

function validation(dataCard: IDataFromForm) {
  const { name, surname, birthday, country, gender, consent } = dataCard;

  const nameValidData = getObjError(name, textError.name, typeValidation.name);
  const surnameValidData = getObjError(
    surname,
    textError.surname,
    typeValidation.surname
  );
  const birthdayValidData = getObjError(
    birthday,
    textError.birthday,
    typeValidation.birthday
  );
  const countryValidData = getObjError(
    country,
    textError.country,
    typeValidation.country
  );
  const genderValidData = getObjError(
    gender,
    textError.gender,
    typeValidation.gender
  );
  const consentValidData = getObjError(
    consent,
    textError.consent,
    typeValidation.consent
  );

  return {
    name: nameValidData,
    surname: surnameValidData,
    birthday: birthdayValidData,
    country: countryValidData,
    gender: genderValidData,
    consent: consentValidData,
  };
}

export { validation };

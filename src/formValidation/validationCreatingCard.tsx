import { DataError } from "../interfaces/IStateForForm";

function checkCreatingCard(errorDate: DataError) {
  const arrFromInput = Object.values(errorDate);

  let result = true;

  arrFromInput.forEach((item) => {
    if (!item?.isValid) {
      result = false;
      return result;
    }
  });
  return result;
}

export { checkCreatingCard };

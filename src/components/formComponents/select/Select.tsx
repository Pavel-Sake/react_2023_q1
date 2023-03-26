import React from "react";
import { ErrorValidation } from "../../errorValidation/ErrorValidation";

type IOption = {
  value: string;
  id: number;
};

type ISelect = {
  option: IOption[];
  keyWord: string;
};
type MyProps = {
  // countries: IOption[];
  // keyWord: string;
  data: ISelect;
  changeState: (text: string | undefined, name: string) => void;
  errorData?: {
    isValid: boolean | null | undefined;
    errorText: string | undefined;
  };
};

type MyState = {
  state: string;
};

class Select extends React.Component<MyProps, MyState> {
  render() {
    const { option, keyWord } = this.props.data;
    const { changeState } = this.props;
    const { isValid, errorText } = this.props.errorData!;

    return (
      <div>
        <select
          onChange={(e) => {
            const value = e.target.value;
            changeState(value, keyWord);
          }}
        >
          {option.map((item) => {
            return (
              <option value={item.value} key={item.id}>
                {item.value}
              </option>
            );
          })}
        </select>
        <ErrorValidation text={errorText} isValid={isValid} />
      </div>
    );
  }
}

export { Select };

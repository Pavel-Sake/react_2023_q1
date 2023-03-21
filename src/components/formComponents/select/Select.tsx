import React from "react";
import { IOption } from "../../../interfaces/IPageFormData";

type MyProps = {
  countries: IOption[];
  keyWord: string;
  changeState: (text: string | undefined, name: string) => void;
};

type MyState = {
  state: string;
};

class Select extends React.Component<MyProps, MyState> {
  render() {
    const { countries, changeState, keyWord } = this.props;

    return (
      <select
        onChange={(e) => {
          const value = e.target.value;
          changeState(value, keyWord);
        }}
      >
        {countries.map((item) => {
          return (
            <option value={item.value} key={item.id}>
              {item.value}
            </option>
          );
        })}
      </select>
    );
  }
}

export { Select };

import React from "react";
import { IOption } from "../../../interfaces/IPageFormData";

type MyProps = {
  countries: IOption[];
};

type MyState = {
  state: string;
};
class Select extends React.Component<MyProps, MyState> {
  render() {
    const { countries } = this.props;

    return (
      <select>
        {countries.map((item) => {
          return <option key={item.id}>{item.value}</option>;
        })}
      </select>
    );
  }
}

export { Select };

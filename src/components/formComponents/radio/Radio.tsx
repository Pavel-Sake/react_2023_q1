import React from "react";
import { Input } from "../input/Input";
import { IInput } from "../../../interfaces/IPageFormData";

type MyProps = {
  gender: IInput[];
};

type MyState = {
  state: string;
};

class Radio extends React.Component<MyProps, MyState> {
  render() {
    const { gender } = this.props;
    return (
      <div>
        {/*{gender.map((item, index) => {*/}
        {/*  return (*/}
        {/*    <Input*/}
        {/*      type={item.type}*/}
        {/*      label={item.label}*/}
        {/*      name={item.name}*/}
        {/*      value={item.value}*/}
        {/*      key={index}*/}
        {/*    />*/}
        {/*  );*/}
        {/*})}*/}
      </div>
    );
  }
}

export { Radio };

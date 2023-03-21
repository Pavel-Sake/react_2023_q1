import React from "react";
import { Input } from "../input/Input";
import { IInput } from "../../../interfaces/IPageFormData";

type MyProps = {
  gender: IInput[];
  changeState: (text: string | undefined, name: string) => void;
};

type MyState = {
  state: string;
};

class Radio extends React.Component<MyProps, MyState> {
  render() {
    const { gender } = this.props;
    return (
      <div>
        {gender.map((item, index) => {
          return (
            <Input
              data={item}
              key={index}
              changeState={this.props.changeState}
            />
          );
        })}
      </div>
    );
  }
}

export { Radio };
